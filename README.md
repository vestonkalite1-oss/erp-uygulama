# ERP Takip - Android ve Windows uygulaması

Bu klasör, ERP Takip Programı'nı **Chrome olmadan** kullanmak için gerçek bir uygulamaya çevirir:

- **Android uygulaması (APK):** telefonun kendi barkod okuyucusunu kullanır, kamera izni sorunu olmaz.
- **Windows masaüstü uygulaması (EXE kurulum dosyası):** kendi penceresinde açılır.

İkisi de internetteki siteyi (statuesque-granita-4b93d0.netlify.app) açar. Siteyi her güncellediğimizde uygulamayı yeniden kurmanız gerekmez.

## Uygulamaları üretmek (bir kez, ücretsiz)
1. https://github.com adresinde ücretsiz hesap açın ve giriş yapın.
2. Sağ üstteki **+** > **New repository**. Ad: `erp-uygulama`. **Private** seçin. **Create repository**.
3. Açılan sayfada **uploading an existing file** bağlantısına tıklayın.
4. Bu zip'in içindeki **her şeyi** (`.github`, `android`, `masaustu`, `www` klasörleri ve `package.json`, `package-lock.json`, `capacitor.config.json`, `.gitignore`, `README.md` dosyaları) kutuya sürükleyin.
5. En altta **Commit changes** düğmesine basın.
6. Üstteki **Actions** sekmesine geçin. İki iş otomatik başlar: *Android uygulaması (APK)* ve *Windows masaüstü uygulaması (EXE)*. Her biri 5-15 dakika sürer. Yeşil tik çıkınca bitmiştir.
7. Bitmiş işe tıklayın, sayfanın altındaki **Artifacts** bölümünden dosyayı indirin:
   - `ERP-Takip-Android-APK` (içinden `app-debug.apk` çıkar)
   - `ERP-Takip-Windows-Kurulum` (içinden `ERP-Takip-Kurulum.exe` çıkar)

Kırmızı çarpı çıkarsa işe tıklayıp hata satırlarının ekran görüntüsünü gönderin.

## Android'e kurmak
1. `app-debug.apk` dosyasını telefona gönderin (WhatsApp, e-posta, USB).
2. Dosyaya dokunun. "Bilinmeyen kaynaklardan yüklemeye izin ver" derse izin verin.
3. Play Protect uyarısı çıkarsa **Yine de yükle** deyin.
4. Uygulama "ERP Takip" adıyla gelir. Giriş ekranındaki e-posta ve şifrenizi kullanın.

## Windows'a kurmak
1. `ERP-Takip-Kurulum.exe` dosyasına çift tıklayın.
2. "Windows bilgisayarınızı korudu" uyarısı çıkarsa **Ek bilgi** > **Yine de çalıştır** deyin (dosya imzasızdır).
3. Kurulum bitince masaüstünde "ERP Takip" simgesi olur.

## iPhone
Bu pakette iPhone yoktur. iPhone için Apple geliştirici hesabı (yılda 99 $) ve ayrı bir yayın süreci gerekir.
