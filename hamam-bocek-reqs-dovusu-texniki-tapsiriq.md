# Hamam Böcəyi Rəqs Döyüşü — Texniki Tapşırıq

Tarix: 18 noyabr 2026

## 1. Layihə haqqında

TikTok LIVE yayımı üçün interaktiv rəqs döyüşü oyunu. Hədiyyə atan hər izləyici profil şəkli ilə öz hamam böcəyini alır və komandası ilə ritmə uyğun oynayır.

- **Məqsəd:** izləyicini hədiyyə atmağa həvəsləndirən, gülməli və paylaşılan canlı yayım formatı yaratmaq.
- **Əsas fikir:** hədiyyə atan hər kəs ekranda öz üzünü görür. Hər komandada 5 böcək oynayır. Hədiyyə böcəyin enerjisini doldurur, böyük hədiyyə isə böcəyi mərkəzə çıxarıb xüsusi rəqs etdirir. Enerjisi bitən böcəyi 4 həkim oynaya-oynaya aparır.
- **Platforma:** brauzerdə işləyən oyun (HTML5 Canvas). Yayıma OBS və ya TikTok LIVE Studio ilə çıxarılır. Ekran şaquli formatdadır: 1080×1920 (9:16).
- **Komandalar:** iki komanda var, Qırmızı (sol) və Mavi (sağ). Komandaların siyasi və ya milli mənası yoxdur.
- **Hədəf auditoriya:** azərbaycan və türkdilli TikTok izləyiciləri. İnterfeys mətnləri ayrıca dil faylında saxlanılır ki, asanlıqla dəyişdirilsin.

## 2. Oyun mexanikası

Səhnədə hər komandanın 5 böcəyi oynayır. Hər böcəyin üzündə bir hədiyyə atanın profil şəkli olur. Böcəyin enerjisi hədiyyə ilə dolur və zamanla azalır. Raund sonunda xalı çox olan komanda qalib gəlir.

### 2.1 Komandaya qoşulma

- İzləyici şərhdə `1` yazsa Qırmızıya, `2` yazsa Maviyə qoşulur.
- Komanda seçməmiş izləyici hədiyyə atsa, həmin an xalı az olan komandaya düşür. Bu, balansı saxlayır.
- Seçim raund boyu dəyişmir. Yeni raundda yenidən seçmək olar.

### 2.2 Səhnə və yerlər

- Hər komandanın 5 yeri var, səhnədə cəmi 10 böcək olur. **Bütün böcəklər eyni ölçüdədir**, hədiyyə ölçünü dəyişmir.
- Boş yerdə şəkilsiz, boz rəngli boş böcək oynayır.
- Hədiyyə atan öz böcəyini alır: başında dairəvi profil şəkli, altında adı olur. **Bu, məcburi tələbdir.** Şəkil yüklənməsə, adın ilk hərfi olan rəngli dairə göstərilir.
- Eyni adam yenidən hədiyyə atsa, yeni böcək yaranmır, mövcud böcəyin enerjisi artır.
- 5 yer doludursa, yeni hədiyyə atan **enerjisi ən az olan** böcəyin yerini alır. Köhnə böcək yıxılır və həkimlər onu aparır (Bax: Bölmə 2.5). Belə olanda hər hədiyyə atan mütləq ekrana düşür.
- Yeni girən böcək ilk 5 saniyə yerindən çıxarıla bilməz (ayarlarda dəyişir). Bu müddət hər kəsə öz üzünü görmək imkanı verir.

### 2.3 Böcəyin enerjisi

- Hər böcəyin başının üstündə öz enerji zolağı var.
- Hədiyyə enerjini doldurur: 1 coin 10 saniyəlik enerji verir (ayarlarda dəyişir). Maksimum enerji 10 dəqiqəlikdir.
- Enerji hər saniyə azalır. 30%-dən aşağı düşəndə böcək yorulur: yavaş oynayır, tərləyir, zolaq qırmızı olur.
- Enerji 0 olanda böcək yıxılır (Bax: Bölmə 2.5).

### 2.4 Böyük hədiyyə: mərkəz şousu

- Hədiyyə 100 coin və ya daha bahalıdırsa (ayarlarda dəyişir), həmin böcək səhnənin mərkəzinə keçir. Üstünə projektor işığı düşür və xüsusi hərəkətlər edir: fırlanma, breakdance, moonwalk, salto.
- Şou müddəti hədiyyənin dəyərinə bağlıdır (Bax: Bölmə 3). Ekranda geri sayım görünür.
- Şou zamanı digər böcəklər yerində qalır və onu alqışlayır.
- Eyni anda yalnız bir şou olur. Başqa böyük hədiyyə gəlsə, o növbəyə düşür və növbə coin dəyərinə görə sıralanır. Növbədəkilərin şəkli ekranın kənarında "Növbədə" siyahısında görünür.
- Şou bitəndə böcək öz yerinə qayıdır. Şou zamanı böcəyin enerjisi azalmır.

### 2.5 Yıxılma və həkimlər

1. Enerjisi bitən böcək arxası üstə yıxılır, ayaqları yuxarı qalxır və titrəyir (1 saniyə).
2. Ekranın kənarından ağ xalatlı, başında həkim papağı olan **4 həkim böcək** xərəklə qaça-qaça gəlir.
3. Həkimlər böcəyi xərəyə qoyur və mahnının ritminə uyğun oynaya-oynaya aparır (4 saniyə). Hər zərbədə xərəyi qaldırıb endirirlər.
4. Xərəyin üstündə yıxılan böcəyin profil şəkli və adı görünür.
5. Yer boşalır və orada boş böcək peyda olur.
6. Eyni anda ekranda maksimum 3 həkim dəstəsi olur, qalanlar növbə gözləyir.

### 2.6 Raund və qalib

- Raund müddəti: 90 saniyə (ayarlarda 30–300 saniyə arası seçilir).
- Hər hədiyyə öz komandasına coin dəyəri qədər **komanda xalı** verir. Komanda xalı böcəyin enerjisindən ayrıdır.
- Raund bitəndə xalı çox olan komanda qalib gəlir. Bərabərlik olsa, 10 saniyəlik əlavə vaxt verilir.
- Qalib komandada ən çox coin xərcləyən izləyicinin böcəyi 5 saniyəlik mərkəzə çıxır və "Rəqs Kralı" tacı alır.
- Uduzan komandanın böcəkləri 3 saniyə başlarını aşağı salıb kədərlə dayanır.
- Sonra 5 saniyəlik fasilə olur və yeni raund başlayır. Böcəklər və onların enerjisi qalır, komanda xalları sıfırlanır.

### 2.7 Liderlər cədvəli

- Ekranın yuxarısında raundun top-5 hədiyyə atanı göstərilir: profil şəkli, ad və xərclədiyi coin.
- Biri sırada yüksələndə onun sətri qısa animasiya ilə yuxarı qalxır.

## 3. Hədiyyə cədvəli

Hədiyyənin coin dəyəri iki şeyi müəyyən edir: böcəyə nə qədər enerji verdiyini və mərkəz şousunun olub-olmadığını. Böcəyin ölçüsü heç vaxt dəyişmir. Dəyərlər səviyyələr üzrə qurulur, ona görə cədvəldə olmayan hədiyyə də avtomatik düzgün işləyir.

| Səviyyə | Coin aralığı | Enerji əlavəsi | Mərkəz şousu | Xüsusi effekt |
| --- | --- | --- | --- | --- |
| 1 | 1–9 | coin × 10 san | Yoxdur | Yoxdur |
| 2 | 10–99 | coin × 10 san | Yoxdur | Giriş bildirişi, parıltı |
| 3 | 100–499 | Maksimum (10 dəq) | 10 san | Projektor işığı |
| 4 | 500–999 | Maksimum (10 dəq) | 20 san | Ekran sarsıntısı, böyük bildiriş |
| 5 | 1000+ | Maksimum (10 dəq) | 30 san | Ekranı tam tutan giriş, xüsusi səs |

- **Komanda xalı:** hər hədiyyə komandaya `coin × say` qədər xal verir.
- **Combo (ardıcıl hədiyyə):** TikTok eyni hədiyyəni combo kimi göndərəndə (məsələn, 10 gül), enerji və xal say qədər artır. Combonun cəmi coin-i şou həddini keçərsə, şou da açılır. Combo sayacı böcəyin yanında "×10" kimi görünür.
- **Mahnı hədiyyəsi:** ayarlarda seçilən **bir sabit hədiyyə** yalnız mahnını dəyişir. Bu hədiyyə enerji və xal vermir. Göndərənin profil şəkli və adı "[ad] mahnını dəyişdi" bildirişində göstərilir (Bax: Bölmə 4).
- Coin aralıqları, enerji əmsalı və şou müddətləri ayarlar panelindən dəyişdirilir. Hədiyyənin coin dəyəri TikTok-dan gələn məlumatdan (`diamondCount`) avtomatik götürülür.

## 4. Mahnı sistemi

Yayımçı öz MP3 fayllarını yükləyir. Oyun hər mahnının ritmini avtomatik tapır və böcəklər hər zərbədə oynayır.

### 4.1 Mahnı siyahısı

- Ayarlar panelində "Mahnı yüklə" düyməsi var: bir və ya bir neçə MP3, WAV və ya OGG faylı seçilir.
- Fayllar brauzerin yaddaşında (IndexedDB) saxlanılır, səhifə yenilənəndə itmir.
- Hər mahnının adı, BPM-i və "aktiv/deaktiv" düyməsi olur. BPM avtomatik tapılır, lazım olsa əl ilə düzəldilə bilər.
- Mahnılar dövrə ilə çalınır: mahnı bitəndə növbətisi başlayır.
- Mahnı yüklənməyibsə, oyunun daxilində Web Audio ilə yaradılan sadə nağara ritmi çalınır.

### 4.2 Ritm aşkarlanması

- Mahnı yüklənəndə bir dəfə analiz olunur: BPM və ilk zərbənin vaxtı (offset) tapılır.
- Çalınma zamanı Web Audio `AnalyserNode` ilə aşağı tezliklər izlənir (bas və nağara, təxminən 40–150 Hz). Güclü zərbə gələndə böcəklər atılır.
- Oyunun daxili "beat saatı" BPM-ə görə işləyir, analizator isə onu canlı düzəldir. Bu, ritmi həm dəqiq, həm də sabit edir.
- Rəqs hərəkətləri BPM-ə görə seçilir: yavaş mahnıda (90 BPM-dən aşağı) yellənmə, sürətli mahnıda (130 BPM-dən yuxarı) atılma və fırlanma.

### 4.3 Mahnının dəyişməsi

- Mahnını yalnız ayarlarda seçilən **Mahnı hədiyyəsi** dəyişir.
- Hədiyyə gələndə cari mahnının səsi 1 saniyə ərzində azalıb sönür, növbəti mahnı səsi artaraq başlayır. Ekranda 3 saniyə göndərənin üzü və "[ad] mahnını dəyişdi: [mahnı adı]" yazısı görünür.
- Mahnı ən azı 20 saniyə çalınmadan yenidən dəyişdirilə bilməz (ayarlarda dəyişir). Bu müddətdə gələn mahnı hədiyyələri növbəyə düşür və göndərənin adı "Növbədə" siyahısında görünür.
- Növbəti mahnı siyahıdakı sıra ilə və ya təsadüfi seçilir (ayarlarda seçilir).

### 4.4 Müəllif hüququ

- Kommersiya mahnıları TikTok-da canlı yayımın səsinin bağlanmasına səbəb ola bilər. Tövsiyə olunan: öz yazıların, royalty-free nağara və folk bitləri.
- Bu barədə xəbərdarlıq ayarlar panelində göstərilir.

## 5. Like, şərh və komanda seçimi

Hədiyyə atmayan izləyicilər də oyuna təsir edir: like kiçik xal verir, şərhlə isə komanda seçilir. Bu, yayımı aktiv saxlayır.

| Hadisə | Nəticə | Limit |
| --- | --- | --- |
| Şərhdə `1` və ya `2` | İzləyici Qırmızı və ya Mavi komandaya qoşulur | Raundda bir dəfə |
| Like | Komandaya 0.1 xal əlavə olunur, komandanın böcəkləri qısa müddət sürətli oynayır | İzləyici başına dəqiqədə maksimum 10 xal |
| Follow | Ekranda "[ad] izləməyə başladı" bildirişi | Yoxdur |
| Share | Ekranda "[ad] yayımı paylaşdı" bildirişi | Yoxdur |

- Komanda seçməyib like atanın like-ı heç bir komandaya getmir.
- Like-ların cəmi xalı bir komandanın raund xalının 20%-ni keçə bilməz. Belə olanda hədiyyə həmişə əsas təsir olaraq qalır.
- Bütün rəqəmlər ayarlar panelindən dəyişdirilir.

## 6. Ekran tərtibatı (UI)

Ekran şaquli 1080×1920 formatındadır. Böcəklərin səhnəsi ortadadır, xallar, liderlər və bildirişlər isə yuxarıdadır. Aşağı hissə TikTok şərhləri ilə örtüldüyü üçün boş saxlanılır.

```
┌───────────────────────────────┐
│ [Qırmızı ░░░ taymer ░░░ Mavi] │  ← Komanda xalları və taymer
│ [          Top-5            ] │  ← Liderlər cədvəli (şəkil, ad, coin)
│ [        Mahnı adı          ] │  ← Çalınan mahnı, ritmlə yanıb-sönür
│ [       Bildirişlər         ] │  ← Yeni giriş, mahnı dəyişdi (şəkil + ad)
│ ┌───────────────────────────┐ │
│ │                [Növbədə]  │ │  ← Şou növbəsi
│ │  🔴  🔴     ✨     🔵  🔵  │ │
│ │            (🪳)            │ │  ← Mərkəz şousu (projektor işığı)
│ │  🔴  🔴            🔵  🔵  │ │  ← Hər komandanın 5 yeri
│ │    🔴                🔵    │ │
│ │       ═══[xərək]═══       │ │  ← Həkim dəstəsi (4 həkim)
│ └───────────────────────────┘ │
│ ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐ │
│      TikTok şərh zonası       │  ← TikTok bunu örtür, vacib heç nə olmur
│ └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘ │
└───────────────────────────────┘
```

Hər komanda öz yarısında oynayır. Böyük hədiyyə atanın böcəyi ortadakı işığa keçir, həkimlər isə səhnənin aşağı hissəsindən keçir.

- **Arxa fon:** rəqs meydançası, disko işıqları ritmlə yanıb-sönür. Fon şəklini ayarlardan dəyişmək olur.
- **Bildirişlər:** eyni anda maksimum 3 bildiriş görünür, hər biri 3 saniyə qalır. Hər bildirişdə profil şəkli və ad olur.
- **Oxunaqlılıq:** adlar ən azı 28 px hərflə yazılır. Ağ mətnin qara kənarı olur ki, istənilən fonda oxunsun. 12 simvoldan uzun adlar "…" ilə kəsilir.
- **Təhlükəsiz zona:** ekranın yuxarı 6%-i (TikTok-un başlıq xətti) və aşağı təxminən 25%-i vacib məlumat üçün istifadə olunmur. TikTok interfeysi cihazdan asılı olduğu üçün bu faizlər ayarlarda dəyişdirilir.

## 7. Texniki arxitektura

Sistem iki proqramdan ibarətdir: TikTok-a qoşulan **Bridge** və brauzerdə açılan **Oyun**. İkisi də yayımçının öz kompyuterində işləyir, server və ya hosting lazım deyil.

```
┌──────────────────┐      ┌──────────────────────┐  WS  ┌──────────────────────┐
│   TikTok LIVE    │ ───► │  Bridge (Node.js)    │ ───► │   Oyun (brauzer)     │
│ hədiyyə, like,   │      │ tiktok-live-connector│      │ Canvas, Web Audio,   │
│ şərh, follow,    │      │ hadisəni JSON-a      │      │ IndexedDB            │
│ share            │      │ çevirir, profil      │      │ səhnə, mahnı, enerji,│
│                  │      │ şəkillərini yükləyir │      │ şou; ayarlar: F2     │
└──────────────────┘      └──────────────────────┘      └──────────────────────┘
         ▲                                                          │
         │                                                          ▼ ekran şəkli
┌──────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│   İzləyicilər    │ ◄─── │    TikTok yayımı     │ ◄─── │ OBS və ya LIVE Studio│
│ öz üzünü səhnədə │      │ oyun canlı yayımda,  │      │ Browser Source kimi  │
│ görür və yenidən │      │ 9:16 formatında      │      │ oyun səhifəsini      │
│ hədiyyə atır     │      │                      │      │ tutur, 1080×1920     │
└──────────────────┘      └──────────────────────┘      └──────────────────────┘
```

Bridge hadisəni WebSocket (WS) ilə oyuna ötürür. OBS oyunun səhifəsini yayıma verir. İzləyici öz üzünü görüb yenidən hədiyyə atır.

| Hissə | Texnologiya | Qeyd |
| --- | --- | --- |
| Bridge | Node.js 20+, `tiktok-live-connector`, `ws` | `npm start` ilə işə düşür; oyunun fayllarını da lokal portdan verir; profil şəkilləri üçün proxy rolunu oynayır |
| Oyun | HTML5 Canvas (PixiJS), Web Audio API, IndexedDB, TypeScript, Vite | Bir səhifədən ibarətdir: oyun + `F2` ilə açılan ayarlar paneli |
| Ehtiyat mənbə | TikFinity WebSocket API | `tiktok-live-connector` işləməsə, bridge-in mənbəyi ayarlardan dəyişdirilir; oyunun koduna toxunulmur |
| Yayım | OBS Studio və ya TikTok LIVE Studio | Oyun Browser Source kimi əlavə olunur: 1080×1920, 60 FPS |

**Qovluq quruluşu:**

```
tiktok-bocek-dovusu/
  bridge/        # Node.js: TikTok bağlantısı, WebSocket, şəkil proxy-si
  game/
    src/
      core/      # oyun dövrəsi, vəziyyət, raund
      entities/  # böcək, həkim dəstəsi, mərkəz şousu
      audio/     # mahnılar, BPM, zərbə aşkarlanması
      ui/        # xallar, top-5, bildirişlər, ayarlar
      net/       # WebSocket müştərisi, test hadisələri
    assets/      # sprite-lar, səslər
```

## 8. Hadisə formatı və məlumat strukturları

Bridge TikTok-dan gələn hər hadisəni vahid JSON formatına çevirib WebSocket ilə oyuna göndərir. Oyun TikTok kitabxanasından asılı olmur: kitabxana dəyişsə, yalnız bridge yenilənir.

### 8.1 Bridge → Oyun hadisələri

```json
{
  "type": "gift",
  "userId": "7012345678",
  "username": "ali123",
  "nickname": "Əli",
  "avatarUrl": "https://...",
  "giftId": 5655,
  "giftName": "Rose",
  "giftImageUrl": "https://...",
  "coins": 1,
  "repeatCount": 10,
  "repeatEnd": true,
  "timestamp": 1763466000000
}
```

| `type` | Əlavə sahələr | Qeyd |
| --- | --- | --- |
| `gift` | `giftId`, `giftName`, `coins`, `repeatCount`, `repeatEnd` | Böcək ilk hadisədə dərhal yaradılır. Combo hədiyyədə son say yalnız `repeatEnd: true` gələndə tətbiq olunur |
| `like` | `likeCount` | Bir hadisədə bir neçə like gələ bilər |
| `comment` | `text` | Komanda seçimi (`1` / `2`) üçün |
| `follow` | — | Bildiriş |
| `share` | — | Bildiriş |
| `status` | `state`: `connected`, `disconnected`, `error`, `message` | Bağlantı vəziyyəti, ayarlar panelində göstərilir |

Bütün hadisələrdə `userId`, `username`, `nickname`, `avatarUrl` və `timestamp` sahələri olur.

### 8.2 Oyun daxili vəziyyət

- **Player** (izləyici): `userId`, `nickname`, `avatarImage` (yüklənmiş şəkil), `team`, `roundCoins`, `totalCoins`.
- **Bug** (böcək): `playerId`, `team`, `slot` (0–4), `energy`, `x`, `y`, `dancePhase`, `protectedUntil`, `state` (`empty`, `entering`, `dancing`, `tired`, `showing`, `fallen`, `carried`).
- **Team** (komanda): `id` (`red` / `blue`), `score`, `slots[5]`.
- **ShowQueue** (mərkəz şousu növbəsi): `playerId`, `coins`, `duration`.
- **Round** (raund): `number`, `startedAt`, `duration`, `state` (`playing`, `overtime`, `result`, `break`).
- **Track** (mahnı): `id`, `name`, `bpm`, `offset`, `blobKey`.

### 8.3 Profil şəkilləri

- Şəkillər bridge vasitəsilə yüklənir və oyuna `data:` URL və ya lokal proxy linki kimi verilir. Bu, brauzerin CORS məhdudiyyətini aradan qaldırır.
- Yüklənmiş şəkillər yaddaşda keşlənir (son 500 istifadəçi), ona görə eyni adam yenidən gələndə şəkli dərhal görünür.
- Şəkil 2 saniyə ərzində yüklənməsə, böcək adın ilk hərfi ilə çıxır. Şəkil gələndə avtomatik dəyişdirilir.

## 9. Ayarlar paneli və test rejimi

Ayarlar paneli yayımda görünmür: o, ayrı səhifədə (`/admin`) və ya `F2` düyməsi ilə açılan qatda olur. Test rejimi bütün oyunu canlı yayım olmadan yoxlamağa imkan verir.

### 9.1 Ayarlar

| Qrup | Ayarlar |
| --- | --- |
| Bağlantı | TikTok istifadəçi adı (`@username`), Qoşul / Ayır düyməsi, bağlantı vəziyyəti |
| Raund | Raund müddəti, fasilə müddəti, əlavə vaxt |
| Hədiyyələr | Səviyyələrin coin aralıqları, enerji əmsalı, maksimum enerji, şou həddi və müddətləri, yeni böcəyin qorunma müddəti |
| Mahnı | Mahnı hədiyyəsinin seçimi (TikTok hədiyyə siyahısından), minimum çalma müddəti, növbəti və ya təsadüfi seçim, mahnıları yüklə / sil / sırala |
| Ekran | Hər komandada yer sayı (standart 5), komanda adları və rəngləri, arxa fon şəkli, səs səviyyəsi |
| Like və şərh | Like xalı, limitlər, komanda seçmə şərh sözləri |

- Ayarlar brauzerdə (`localStorage`) saxlanılır və JSON faylı kimi ixrac və idxal edilir.
- Paneldə "Raundu sıfırla" və "Bütün böcəkləri sil" düymələri olur.

### 9.2 Test rejimi

- Ayarlar panelində test düymələri olur: "Qırmızıya gül", "Maviyə böyük hədiyyə", "Mahnı hədiyyəsi", "10 gül combo", "100 like", "Yeni izləyici şərhi".
- "Saxta izləyici axını" rejimi: hər 0.5–3 saniyədə təsadüfi ad və avatarla təsadüfi hədiyyə gəlir. Bu, yükləmə testi üçündür.
- Klaviatura qısayolları:
    - `Q` / `W`: Qırmızıya kiçik / böyük hədiyyə
    - `O` / `P`: Maviyə kiçik / böyük hədiyyə
    - `M`: mahnı hədiyyəsi
- Test hadisələri real hadisələrlə eyni formatda yaradılır və eyni koddan keçir.

## 10. Performans və qeyri-funksional tələblər

Oyun OBS ilə eyni anda işləyərkən orta səviyyəli kompyuterdə 60 FPS saxlamalı və hədiyyəni 1 saniyədən tez ekranda göstərməlidir.

| Tələb | Dəyər |
| --- | --- |
| Kadr tezliyi | Ekranda 10 böcək, mərkəz şousu və 3 həkim dəstəsi olarkən 60 FPS |
| Hədiyyədən ekrana qədər gecikmə (bridge + oyun) | 300 ms-dən az; TikTok-un öz gecikməsi buraya daxil deyil |
| Yükləmə | Dəqiqədə 300 hədiyyə hadisəsini itirmədən emal etmək |
| Uzun yayım | 6 saat ara vermədən, yaddaş sızması olmadan işləmək |
| Yenidən qoşulma | TikTok bağlantısı kəsiləndə bridge 5 saniyə fasilə ilə avtomatik yenidən qoşulur; oyun vəziyyəti itmir |
| Brauzer | Chrome / Edge (son versiya), OBS Browser Source |
| Çözünürlük | 1080×1920; kiçik ekranlarda miqyas avtomatik uyğunlaşır |

- Hədiyyələr növbəyə (queue) yazılır, hər kadrda maksimum 5 yeni böcək girişi icra olunur. Belə olanda böyük axında oyun donmur, hədiyyə də itmir.
- Animasiyalar Canvas-da sprite-sheet və ya sadə vektor çizimi ilə edilir. DOM elementləri yalnız bildirişlər üçün istifadə olunur.
- Bütün xətalar konsola və ayarlar panelindəki "Jurnal" bölməsinə yazılır. Bir xəta oyunu dayandırmamalıdır.

## 11. TikTok qaydaları və risklər

Ən böyük risklər iki dənədir: qeyri-rəsmi TikTok kitabxanasının işləməz hala düşməsi və yayımın qaydalara görə məhdudlaşdırılması. Bunları əvvəlcədən nəzərə almaq lazımdır.

| Risk | Nəticəsi | Qarşısını alma |
| --- | --- | --- |
| `tiktok-live-connector` rəsmi deyil, TikTok dəyişiklik edəndə işləməyə bilər | Hədiyyələr oyuna gəlmir | Bridge ayrı modul olur; lazım gəlsə TikFinity WebSocket API-yə keçmək imkanı var (Bax: Bölmə 7) |
| İzləyicini hədiyyəyə məcbur edən mətnlər ("hədiyyə at, yoxsa...") | Yayım tövsiyələrdən çıxarılır və ya bağlanır | Ekrandakı mətnlər neytral olur; oyunda pul udma və ya qumar elementi yoxdur |
| Müəllif hüququ olan mahnılar | Yayımın səsi bağlanır | Royalty-free mahnılar istifadə olunur, ayarlarda xəbərdarlıq var (Bax: Bölmə 4.4) |
| Uyğun olmayan profil şəkli və ya ad | Yayımda qeyri-etik məzmun görünür | Ayarlar panelində istifadəçini bloklama düyməsi olur: bloklanan istifadəçinin böcəyi şəkilsiz və adsız göstərilir |
| Ölüm və xəstəxana mövzusu | Bəzi izləyicilərə ağır görünə bilər | Animasiyalar yüngül cizgi film üslubundadır, qan və real zədə yoxdur |
| LIVE şərtləri | Hesab LIVE aça bilmir | Yayımçı 18 yaş şərtini və TikTok-un izləyici sayı tələblərini əvvəlcədən yoxlayır |

TikTok-un canlı yayım qaydaları və hədiyyə siyasəti vaxtaşırı dəyişir, ona görə ilk yayımdan əvvəl onların son versiyasını oxumaq lazımdır.

## 12. İş mərhələləri və qəbul meyarları

İş 5 mərhələdə görülür. Hər mərhələnin sonunda oyun test rejimində işlək olmalıdır. Növbəti mərhələyə yalnız qəbul meyarları ödənildikdən sonra keçilir.

1. **Prototip (test rejimi ilə):** səhnə, 5+5 yer, böcəklərin rəqsi, enerji, yıxılma və həkim animasiyası, test düymələri.
    - Qəbul: test düyməsi ilə göndərilən hədiyyə böcəyi şəkil və adla səhnəyə çıxarır; enerji bitəndə 4 həkim böcəyi ritmə uyğun aparır; yerlər dolu olanda yeni gələn enerjisi ən az olanın yerini alır.
2. **Mahnı sistemi:** MP3 yükləmə, BPM-in tapılması, zərbəyə uyğun rəqs, mahnı hədiyyəsi.
    - Qəbul: yüklənən nağara mahnısında böcəklər zərbə ilə eyni anda atılır; mahnı hədiyyəsi mahnını dəyişir və göndərənin üzünü göstərir.
3. **Mərkəz şousu, raund və liderlər:** böyük hədiyyə şousu və onun növbəsi, komanda xalı, raund taymeri, qalib ekranı, top-5 cədvəli.
    - Qəbul: 100+ coin-lik hədiyyə böcəyi mərkəzə çıxarır və şou cədvəldəki müddət qədər davam edir; eyni anda gələn iki böyük hədiyyə növbə ilə göstərilir.
4. **TikTok bağlantısı:** bridge, WebSocket, profil şəkillərinin yüklənməsi, yenidən qoşulma.
    - Qəbul: canlı yayımda atılan real hədiyyə 1 saniyə ərzində ekranda görünür; bağlantı kəsiləndə avtomatik bərpa olunur və oyun vəziyyəti itmir.
5. **Ayarlar, cila və yayım:** ayarlar paneli, idxal/ixrac, bloklama, effektlər, səslər, OBS-də test.
    - Qəbul: 6 saatlıq test yayımı 60 FPS ilə, kəsilmədən keçir; dəqiqədə 300 saxta hədiyyə göndəriləndə heç biri itmir.
