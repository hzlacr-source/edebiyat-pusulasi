# AI Notları

## Promptlar ve amaçları

Bu notlar Copilot ile yapılan çalışma oturumunu özetler. İstekleri ben verdim; kod değişikliklerini Copilot uyguladı, ben de sonuçları kontrol edip gerektiğinde yönlendirdim.

1. **“Menü kısmını sayfa yapısına uygun yap, yazılar aşağı inmesin; arama yerini özelleştir, sayfanın renklerine özel vintage yap.”**

   Amaç: Menü taşmasını önlemek ve arama alanıyla görsel dili vintage temaya uydurmak.

2. **“Arama çubuğuna yazar adı yazınca onu listelemiyor, kontrol eder misin?”**

   Amaç: Yazar adına göre aramanın neden çalışmadığını bulmak. İncelemede içerikler sayfasının `script.js` dosyasını yüklemediği görüldü; bağlantı eklendi.

3. **“Ünlü cümlelere daha fazla cümle ekler misin?”**

   Amaç: Alıntı kartlarının sayısını artırmak. Eklenen alıntıların kaynakları ayrıca doğrulanmadı; yayımlanmadan önce eser ve sayfa bilgileriyle kontrol edilmeleri gerekir.

4. **“Bordo krem temasını değiştirir misin?”**

   Amaç: Sayfanın ana renklerini bordo ve krem paletine taşımak.

5. **“Üst üste olan gerçek kitap görseli bul, onu koy.”**

   Amaç: CSS ile çizilmiş kitapların yerine gerçek bir kitap fotoğrafı kullanmak. İlk çizim yaklaşımını bu istek üzerine değiştirdim; Wikimedia Commons'taki CC0 lisanslı fotoğrafı kullandık.

## Bir öneri üzerine kararım

İlk görsel yaklaşımı üst üste kitapları CSS şekilleriyle çizmeye dayanıyordu. Gerçek kitap fotoğrafı isteğimi karşılamadığı için bunu kabul etmedim ve fotoğrafla değiştirilmesini istedim. Fotoğrafın altındaki kaynak yazısının görünmesini de daha sonra istemediğim için kaldırttım.

## Kod davranışını kendi sözlerimle açıklama

- **Event listener:** `script.js` içindeki iletişim formunun `submit` dinleyicisi, form gönderildiğinde sayfanın normal gönderim davranışını durdurur. Ad, e-posta, konu ve mesajı bir e-posta taslağına dönüştürüp kullanıcının e-posta uygulamasını açar. Bir sunucuya mesaj göndermez; alıcı adresi uygulamada eklenmelidir.
- **Filtreleme koşulu:** `script.js` içindeki `!query || searchableText.includes(query)` koşulu, arama alanı boşsa bütün kitapları görünür bırakır. Alan doluysa normalleştirilmiş arama metninin kitap adı veya yazar bilgisinde geçip geçmediğine bakar; eşleşmeyen kitapları gizler.
