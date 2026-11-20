# İrəvanı Alırıq — Quraşdırma və Yayım

## Bir dəfəlik quraşdırma (yeni kompüterdə)

1. **Node.js** quraşdır (LTS versiya): https://nodejs.org
   Yoxlamaq: terminalda `node -v` yaz — versiya nömrəsi çıxmalıdır.
2. Layihəni çək:
   ```
   git clone https://github.com/AyxanHesenzade/TTGame.git
   ```
   (artıq varsa: qovluqda `git pull`)
3. Bridge-in paketlərini yüklə:
   ```
   cd TTGame/irevani-aliriq/bridge
   npm install
   ```
4. `bridge/config.json` faylını aç və TikTok istifadəçi adını yaz (`@` olmadan):
   ```json
   { "username": "senin_adin", "port": 8080, "likesPerSecond": 6, "maxRepeatPerGift": 30 }
   ```

## Hər yayımda

1. TikTok-da **LIVE**-ı başlat.
2. Terminalda:
   ```
   cd TTGame/irevani-aliriq/bridge
   npm start
   ```
   `✅ Qoşuldu!` yazısını gözlə. Yayım hələ başlamayıbsa, bridge özü gözləyib yenidən cəhd edir.
3. Oyunu Chrome-da aç: `irevani-aliriq/index.html?obs`
   (`?obs` — test düymələrini gizlədir)
4. Saatın altındakı nöqtəyə bax:
   - 🟢 **TikTok** — hər şey işləyir
   - 🟡 **Gözləyir** — bridge açıqdır, TikTok yayımı gözlənilir
   - 🔴 **Bridge yox** — bridge işləmir (`npm start` et)
5. TikTok LIVE Studio-da səhnəni **şaquli (9:16)** et, **Window Capture** ilə Chrome pəncərəsini əlavə et, səsi də əlavə et.

## Yayımsız test

```
cd TTGame/irevani-aliriq/bridge
npm test
```
TikTok-a qoşulmadan hər 2 saniyədən bir saxta hədiyyə göndərir — oyunun bridge-dən hədiyyə aldığını yoxlamaq üçün. Nöqtə 🔵 **TEST** göstərir.

## Problemlər

| Problem | Həll |
| --- | --- |
| `Port 8080 artıq istifadədədir` | Bridge artıq başqa pəncərədə açıqdır — onu bağla |
| `canlı yayımda deyil` | LIVE başladığından əmin ol; bridge özü təkrar yoxlayır |
| `Qoşulmaq alınmadı` bir neçə dəfə | `npm update` et (TikTok sistemini dəyişib ola bilər) |
| Profil şəkli yox, hərf görünür | TikTok şəkli verməyib — normaldır, ad hərfi göstərilir |
| Oyun donur / dəyişiklik görünmür | Tabı bağla, yenidən aç (Ctrl+Shift+R) |

## Test düymələri (oyunda, `?obs` olmadan)

`1` Like · `2` Gül · `3` Top · `4` Raket · `5` Şir (atom) · `6` Süvari · `7` 5 əsgər · `8` Taran · `9` Ox yağışı
`H` növbəti müdafiə səviyyəsi · `K` qalanı dərhal al · `Y` son 30 saniyə · `M` səs · `T` düymələri gizlət
