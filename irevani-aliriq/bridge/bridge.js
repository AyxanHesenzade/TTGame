// İrəvanı Alırıq — TikTok LIVE bridge
// TikTok yayımındakı hədiyyə və like-ları tutur, ws://localhost:<port> ilə oyuna ötürür.
//
// İşə salmaq:   npm start                 (config.json-dakı istifadəçi adı ilə)
//               npm start -- istifadeci   (adı birbaşa vermək)
// Test rejimi:  npm test                  (TikTok-suz, saxta hədiyyələr göndərir)

import { readFileSync } from 'node:fs';
import { WebSocketServer } from 'ws';

// ---------------- Ayarlar ----------------
const cfgPath = new URL('./config.json', import.meta.url);
let cfg = { username: '', port: 8080, likesPerSecond: 6, maxRepeatPerGift: 30 };
try { cfg = { ...cfg, ...JSON.parse(readFileSync(cfgPath, 'utf8')) }; } catch { /* config yoxdursa default */ }
const args = process.argv.slice(2);
const TEST = args.includes('--test');
const username = (args.find(a => !a.startsWith('--')) || cfg.username || '').replace(/^@/, '').trim();

const log = (...a) => console.log(new Date().toLocaleTimeString('az-AZ'), ...a);

// ---------------- Oyunla əlaqə (WebSocket server) ----------------
const wss = new WebSocketServer({ port: cfg.port });
let tiktokStatus = 'waiting';
function send(obj) {
  const msg = JSON.stringify(obj);
  for (const c of wss.clients) if (c.readyState === 1) c.send(msg);
}
wss.on('connection', ws => {
  log(`🎮 Oyun qoşuldu (cəmi: ${wss.clients.size})`);
  ws.send(JSON.stringify({ type: 'status', tiktok: tiktokStatus }));
  ws.on('close', () => log('🎮 Oyun ayrıldı'));
});
wss.on('error', e => {
  if (e.code === 'EADDRINUSE') log(`❌ Port ${cfg.port} artıq istifadədədir. Bridge artıq açıqdır? Köhnə pəncərəni bağla.`);
  else log('❌ WebSocket xətası:', e.message);
  process.exit(1);
});
function setStatus(s) { tiktokStatus = s; send({ type: 'status', tiktok: s }); }
log(`🔌 Oyun üçün server: ws://localhost:${cfg.port}`);

// ---------------- Like növbəsi (ekran dolmasın) ----------------
let likeQueue = [];
setInterval(() => {
  const n = Math.min(likeQueue.length, cfg.likesPerSecond);
  for (const u of likeQueue.splice(0, n)) send({ type: 'like', user: u });
  if (likeQueue.length > 200) likeQueue = likeQueue.slice(-200);   // çox yığılmasın
}, 1000);

// ---------------- Köməkçi: istifadəçi məlumatı ----------------
function userInfo(u = {}) {
  const name = u.uniqueId || u.displayId || u.nickname || 'izləyici';
  const nick = u.nickname || name;
  const pics = [
    ...(u.profilePicture?.urls || u.profilePicture?.url || []),
    ...(u.avatarThumb?.urlList || []),
    ...(u.avatarMedium?.urlList || []),
  ].filter(Boolean);
  // brauzerin aça bildiyi formatı seç (heic yox)
  const avatar = pics.find(p => !/\.heic/i.test(p)) || pics[0] || '';
  return { name, nick, avatar };
}

// ---------------- Hədiyyə: combo (streak) düzgün sayılır ----------------
// Combo hədiyyələrdə TikTok hər klikdə repeatCount artıraraq hadisə göndərir.
// Biz hər dəfə yalnız FƏRQİ göndəririk — 10 gül = dəqiq 10 əsgər, gecikmə olmadan.
const streaks = new Map();   // açar -> son göndərilən say
function handleGift(d) {
  const g = d.gift || d.giftDetails || {};
  const giftName = g.name || g.giftName || d.giftName || '';
  const coins = Number(g.diamondCount ?? d.diamondCount ?? 1) || 1;
  const type = Number(g.type ?? g.giftType ?? d.giftType ?? 0);
  const repeat = Math.max(1, Number(d.repeatCount) || 1);
  const ended = Boolean(Number(d.repeatEnd)) || d.repeatEnd === true;
  const { name, nick, avatar } = userInfo(d.user);

  let count;
  if (type === 1) {
    const key = `${name}|${d.giftId}|${d.groupId || ''}`;
    const sent = streaks.get(key) || 0;
    count = repeat - sent;
    if (ended) streaks.delete(key); else streaks.set(key, repeat);
  } else count = repeat;
  if (count <= 0) return;
  count = Math.min(count, cfg.maxRepeatPerGift);

  log(`🎁 ${nick} (@${name}) → ${giftName || 'hədiyyə'} x${count}  (${coins} coin)`);
  send({ type: 'gift', user: nick, id: name, avatar, coins, giftName, count });
}

// ---------------- TEST rejimi ----------------
if (TEST) {
  setStatus('test');
  log('🧪 TEST rejimi: hər 2 saniyədən bir saxta hədiyyə göndərilir (TikTok-a qoşulmur)');
  const gifts = [['Rose', 1], ['Ice Cream Cone', 1], ['Finger Heart', 5], ['Perfume', 20], ['Doughnut', 30], ['Galaxy', 1000], ['Lion', 29999]];
  const names = ['Ayxan', 'Leyla', 'Murad', 'Nigar', 'Tural'];
  let i = 0;
  setInterval(() => {
    const [giftName, coins] = gifts[i % gifts.length]; const user = names[i % names.length]; i++;
    if (giftName === 'Lion' && i % 3) return;   // Şir az-az gəlsin
    log(`🧪 ${user} → ${giftName}`);
    send({ type: 'gift', user, id: user, avatar: '', coins, giftName, count: 1 });
    for (let k = 0; k < 5; k++) likeQueue.push(user);
    if (i % 4 === 0) send({ type: 'chat', user: names[(i + 2) % names.length], avatar: '', text: 'hücum!' });
    if (i % 9 === 0) send({ type: 'follow', user: 'YeniDost' + i, avatar: '' });
    if (i % 11 === 0) send({ type: 'share', user: names[(i + 1) % names.length], avatar: '' });
  }, 2000);
} else {
  if (!username) {
    log('❌ TikTok istifadəçi adı yoxdur. config.json faylında "username" yaz, ya da: npm start -- istifadeci_adi');
    process.exit(1);
  }
  startTikTok();
}

// ---------------- TikTok bağlantısı ----------------
async function startTikTok() {
  const { TikTokLiveConnection, WebcastEvent, ControlEvent } = await import('tiktok-live-connector');
  let conn = null, retryTimer = null;

  const retry = (sec, why) => {
    if (retryTimer) return;
    setStatus('waiting');
    log(`⏳ ${why} — ${sec} saniyədən sonra yenidən cəhd...`);
    retryTimer = setTimeout(() => { retryTimer = null; connect(); }, sec * 1000);
  };

  async function connect() {
    try { conn?.disconnect?.(); } catch { /* */ }
    conn = new TikTokLiveConnection(username, { processInitialData: false });   // köhnə hədiyyələri təkrar göndərməsin

    conn.on(WebcastEvent.GIFT, d => { try { handleGift(d); } catch (e) { log('⚠ Hədiyyə xətası:', e.message); } });
    conn.on(WebcastEvent.LIKE, d => {
      const n = Math.min(Number(d.likeCount ?? d.count ?? 1) || 1, 50);
      const { nick } = userInfo(d.user);
      for (let k = 0; k < n; k++) likeQueue.push(nick);
    });
    // Follow / paylaşma / şərh — pulsuz qarşılıqlı əlaqə (alqoritm üçün də faydalı)
    conn.on(WebcastEvent.FOLLOW, d => { const { nick, avatar } = userInfo(d.user); log(`➕ ${nick} izləməyə başladı`); send({ type: 'follow', user: nick, avatar }); });
    conn.on(WebcastEvent.SHARE, d => { const { nick, avatar } = userInfo(d.user); log(`🔗 ${nick} paylaşdı`); send({ type: 'share', user: nick, avatar }); });
    conn.on(WebcastEvent.CHAT, d => { const { nick, avatar } = userInfo(d.user); send({ type: 'chat', user: nick, avatar, text: String(d.comment || '').slice(0, 80) }); });
    conn.on(WebcastEvent.STREAM_END, () => { log('📴 Yayım bitdi'); retry(15, 'Yayım bitdi'); });
    conn.on(ControlEvent?.DISCONNECTED ?? 'disconnected', () => retry(5, 'Bağlantı qopdu'));
    conn.on(ControlEvent?.ERROR ?? 'error', e => log('⚠ TikTok xətası:', e?.message || e?.info || e));

    log(`📡 @${username} yayımına qoşulur...`);
    try {
      const state = await conn.connect();
      setStatus('connected');
      log(`✅ Qoşuldu! (otaq: ${state.roomId}) Hədiyyələr oyuna gedir.`);
    } catch (e) {
      const m = String(e?.message || e);
      if (/offline|not.*live|isn't online|LIVE has ended|UserOffline/i.test(m)) retry(15, `@${username} hazırda canlı yayımda deyil`);
      else retry(10, `Qoşulmaq alınmadı (${m.slice(0, 120)})`);
    }
  }
  connect();
}

process.on('SIGINT', () => { log('👋 Bridge dayandırıldı'); process.exit(0); });
