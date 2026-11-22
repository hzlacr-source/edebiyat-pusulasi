# Test Notları

Testler 22 Kasım 2026'da Playwright ile Chromium tarayıcısında ve yerel sunucuda yapıldı. Arama ve klavye testleri gerçek sayfa üzerinde çalıştırıldı.

| # | Adım | Sonuç |
|---|---|---|
| 1 | Arama alanına ayırt edici başlık `Kürk Mantolu Madonna` yazıldı. | **Geçti.** Tek kitap eşleşti. |
| 2 | Aynı ifade `  KÜRK MANTOLU MADONNA  ` biçiminde, harf büyüklüğü değiştirilip kenarlarına boşluk eklenerek arandı. | **Geçti.** Normalleştirme sonrası yine tek kitap eşleşti. |
| 3 | Katalogda olmayan `YOK-BÖYLE-BİR-KİTAP-XYZZY` ifadesi arandı. | **Geçti.** Hiçbir kitap eşleşmedi; kod eşleşme yok durumu için mesaj alanı oluşturuyor. |
| 4 | Arama dolduruldu, “Temizle”ye basıldı, ardından yalnızca boşluk girildi. | **Geçti.** Eksik olan “Temizle” düğmesi sekiz sayfanın tümüne eklendi. Chromium'da düğmeye tıklandı; alan boşaldı, filtre sıfırlandı ve yalnızca boşluk girildiğinde 100 kitap geri geldi. |
| 5 | Her sayfanın menü bağlantıları açılarak hedefleri kontrol edildi. | **Geçti.** 8 HTML sayfasındaki 64 dahili menü bağlantısının tamamı yerel sunucudan HTTP 200 döndürdü. Menü açma/kapama davranışı da script düzeneğinde kontrol edildi. |
| 6 | 390 px genişlikte mobil düzen ve Tab ile gezinme kontrol edildi. | **Geçti.** Chromium penceresi 390 px genişliğe ayarlandı; sayfa yatay taşmadı (`scrollWidth = 390`). Menü açıldı ve Tab sırasıyla 8 menü bağlantısını, arama alanını, görünür “Temizle” düğmesini ve “Ara” düğmesini gezdi. |

## Kullanılan kontroller

- Arama testi yerel sunucudan yüklenen gerçek sayfada Chromium ile yapıldı.
- Menü hedefleri `http://localhost:4174/` üzerinden istendi.
- Mobil görünümde 390 × 844 viewport kullanıldı; menü görünürlüğü, yatay taşma ve gerçek Tab tuşu sırası Chromium'da doğrulandı.
