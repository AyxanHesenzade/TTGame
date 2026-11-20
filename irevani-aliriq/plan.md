# İrəvanı Alırıq — Oyun Planı (qaralama)

Tarix: 20 noyabr 2026
Status: plan, kod yoxdur

## 1. Fikir

TikTok LIVE üçün interaktiv müdafiə/hücum oyunu. Mövzu: **İrəvan xanlığı və İrəvan qalası** (1747–1828).
Ekranın yuxarısında qala dayanır, aşağıdan qılınclı əsgərlər dalğa-dalğa gəlir. İzləyicilər hədiyyə atanda
göydən mərmi düşür və ya öz profil şəkli ilə əsgər olaraq döyüşə girir.

- **Platforma:** HTML5 Canvas, brauzerdə. OBS / TikTok LIVE Studio ilə yayım.
- **Ekran:** şaquli 1080×1920 (9:16).
- **Texnologiya:** əvvəlki oyunla eyni (Bridge → WebSocket → oyun). Kodun böyük hissəsi təkrar istifadə olunur:
  hədiyyə hadisələri, profil şəkli yükləmə, ayarlar paneli, test rejimi.

## 2. Əsas mexanika

### 2.1 Qala və canlar
- Qalanın **canı** var (məs. 10 ürək, ayarlarda dəyişir).
- Düşmən əsgəri qala divarına çatıb qılıncla vursa — qala 1 can itirir. Əsgər bundan sonra yox olur.
- Can 0 olsa → **"Qala düşdü"** ekranı, raund bitir, yenidən başlayır.
- Dalğanı tam təmizləsək → növbəti dalğa (daha çox və daha sürətli əsgər).

### 2.2 Düşmən əsgərləri
- Aşağıdan yuxarı qalaya doğru yeriyir, əlində qılınc.
- Hər dalğada N əsgər (1-ci dalğa 10, sonra +5).
- Növlər (sonra əlavə oluna bilər): adi piyada, qalxanlı (2 zərbəyə ölür), atlı (sürətli).

### 2.3 Hədiyyə = hücum
Kim hədiyyə atsa, ekranda mütləq **profil şəkli** görünür.

| Səviyyə | Coin | Effekt |
| --- | --- | --- |
| 1 | 1–9 | Gifter-in şəkli bir **müdafiəçi əsgərin başına** yerləşir; əsgər qaladan çıxıb ən yaxın düşməni qılıncla vurur |
| 2 | 10–99 | Göydən **top mərmisi** düşür (üstündə profil şəkli), kiçik partlayış, 3–5 düşmən ölür |
| 3 | 100–999 | **Raket** düşür (profil şəkli raketin üstündə), böyük partlayış, 10–15 düşmən ölür |
| 4 | 1000–9999 | Raket yağışı (5 raket ardıcıl) |
| 5 | **Şir (Lion) və ya 20000+** | **ATOM BOMBASI** ☢ |

### 2.4 Atom bombası (Şir hədiyyəsi)
1. Ekran qaralır, sirena səsi, yuxarıda yazı: **"[Ad] ATOM BOMBASI ATDI!"** + böyük profil şəkli (2 san).
2. Göydən yavaş-yavaş böyük bomba enir, üstündə gifter-in şəkli.
3. Yerə dəyəndə ağ parıltı → göbələk bulud → ekran titrəyir (3 san).
4. **Ekrandakı bütün düşmənlər ölür**, qalaya +3 can, cari dalğa avtomatik qazanılır.
5. Gifter liderlər cədvəlində ⭐ "Atom Ustası" nişanı alır (raund boyu).
6. Eyni anda bir bomba; ikinci Şir gəlsə növbəyə düşür.

### 2.5 Like və şərh
- Like → qala divarından ox atılır (kiçik zərər). Pulsuz izləyicini də oyuna salır.
- Şərhdə `1` → sənin adınla ox atılır (limitli, spam olmasın).

### 2.6 Liderlər
- Yuxarıda top-5: ən çox düşmən öldürən hədiyyə atanlar (şəkil + ad + öldürmə sayı).

## 3. Ekran (9:16)

```
┌──────────────────────┐
│ Top-5 | Dalğa 3      │
│   ❤❤❤❤❤❤❤❤❤❤        │
│   [ İRƏVAN QALASI ]  │  ← yuxarı 25%
│ ─────── divar ────── │
│                      │
│   döyüş meydanı      │  ← düşmən yuxarı yeriyir
│   ☄ mərmilər düşür   │
│                      │
│  düşmən spawn zonası │  ← aşağı
│ Hədiyyə ipucu paneli │
└──────────────────────┘
```

## 4. Texniki hissə (qısa)
- `game/` — oyun döngüsü (requestAnimationFrame), varlıqlar: Castle, Enemy, Defender, Projectile, Explosion.
- `bridge/` — TikTok hadisələri (əvvəlki layihədən).
- `config.json` — can sayı, dalğa ölçüsü, hədiyyə səviyyələri.
- Test rejimi: klaviaturadan saxta hədiyyə/like göndərmək.
- Performans: ekranda maks. ~80 əsgər, sprite pool.

## 5. Mərhələlər
1. Səhnə: qala, düşmən hərəkəti, can sistemi (hədiyyəsiz).
2. Müdafiəçi əsgər + profil şəkli başında.
3. Mərmi + partlayış + səviyyələr.
4. Bridge qoşulması, like/şərh.
5. Dalğalar, liderlər, raund sonu ekranı.
6. Qrafika və səs cilası.

## 6. Risklər
- **TikTok qaydaları:** milli/etnik nifrət kimi görünə bilən mətn, bayraq, təhqir istifadə etməmək.
  Düşmən "düşmən ordusu" kimi ümumi göstərilsin, mövzu tarixi qala müdafiəsi olsun — yayım bağlanma riskini azaldır.

## 7. Açıq suallar
1. ~~Mərmi yoxsa raket?~~ → ikisi də + Şirə atom bombası ✅
2. Qala neçə can? (10 təklif)  50 
3. Rejim: biz qalanı **müdafiə edirik**, yoxsa qalaya **hücum edirik**? (Plan müdafiə üzrə yazılıb) hucum 
4. Komanda (2 tərəf) olacaq, yoxsa hamı bir tərəfdə?  1 teref sadece hucum edleer oacaq

