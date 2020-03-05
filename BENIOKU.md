 # Flarum için Diff

[![MIT lisansı](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-diff/blob/master/LICENSE) [![Son Stabil Sürüm](https://img.shields.io/packagist/v/the-turk/flarum-diff.svg)](https://packagist.org/packages/the-turk/flarum-diff) [![Toplam İndirme](https://img.shields.io/packagist/dt/the-turk/flarum-diff.svg)](https://packagist.org/packages/the-turk/flarum-diff)

Bu eklenti [Flarum](https://github.com/flarum) forumunuza "düzenleme geçmişi" özelliği eklemenizi sağlar. Şu anda beta aşamasında olduğundan, ileride gelecek bir güncellemeyle eski düzenleme geçmişlerinizi kaybedebilirsiniz.

Ekran görüntüleri:

- [Mesaj Görünümü](https://i.ibb.co/4m21pnM/post-Stream-Item.png)
- [Revizyon Listesi](https://i.ibb.co/PTTcWCw/dropdown-List.png)
- Aynı Hizada Gösterim Modu
  - [Özel görünüm](https://i.ibb.co/3RZWbsG/custom-Line-By-Line.png) (varsayılan)
  - [Tablo görünümü](https://i.ibb.co/XtDT9Pp/tabular-Line-By-Line.png)
- Yan Yana Gösterim Modu
  - [Özel görünüm](https://i.ibb.co/LP0x3vf/custom-Side-By-Side.png)
  - [Tablo görünümü](https://i.ibb.co/d04NBS3/tabular-Side-By-Side.png)
- Kombine Gösterim Modu
  - [Custom view](https://i.ibb.co/FYhSjLj/Combined-Custom.png)
  - [Tabular view](https://i.ibb.co/df6JP6q/Combined-Tabular.png)
- [Eklenti Ayarları](https://i.ibb.co/YPBbhYT/extension-Settings.png)

## Özellikler

- [jfcherng/php-diff](https://github.com/jfcherng/php-diff) tabanlıdır.
- **satır** (varsayılan), **kelime** ve **karakter** seviyesindeki farklılıkları hesaplayabilir.
- "Aynı hizada", "Yan yana" ve "Kombine" olmak üzere üç ayrı gösterim modu vardır.
- Değişime uğrayan satırları, satır numaraları ile birlikte gösterebilirsiniz.
- Eski düzenlemeleri elle ya da zamanlanmış görev kullanarak arşivleyebilirsiniz.
- Düzenleme geçmişlerini silebilir ya da eski bir düzenlemeye geri dönebilirsiniz.
- `fof/nightmode` ve `the-turk/flarum-quiet-edits` eklentilerini destekler.

## Gereksinimler

![php](https://img.shields.io/badge/php-%5E7.1.3-blue?style=flat-square) ![ext-iconv](https://img.shields.io/badge/ext-iconv-brightgreen?style=flat-square)

php sürümünüzü `php -v` komutunu çalıştırarak ve `iconv` pakedinin yüklü olup olmadığını `php --ri iconv` komutunu çalıştırarak (`iconv support => enabled` çıktısını görmelisiniz) öğrenebilirsiniz.

## Kurulum

[Bazaar](https://discuss.flarum.org/d/5151) kullanın ya da elle kurulum yapın:

```bash
composer require the-turk/flarum-diff
```

## Güncelleme

```bash
composer update the-turk/flarum-diff
php flarum migrate
php flarum cache:clear
```

## Kullanım

Eklentiyi aktif edin, izinleri ayarlayın ve görünümü istediğiniz şekilde özelleştirin.

### Eski Düzenlemeleri Arşivleyin

**x** mesajın düzenlenme sayısı olmak üzere, **x ≥ A** koşulu sağlandığında mesaja ait ilk **y=mx+b** düzenlemeyi birleştirip sıkıştırarak yeni bir tabloda (`post_edit_histories_archive`) `BLOB` tipinde saklayabilirsiniz. **A**, **m** ve **b** değerlerini eklentinin ayarlarından belirleyin. Ondalık **y** değerleri en yakın alt tam sayıya yuvarlanacaktır. Depolama alanından tasarruf etmek istiyorsanız, eski düzenlemeleri arşivlemeniz önerilir ancak _depolama alanı sıkıntınız yoksa önerilmez_.

Eski düzenlemeleri arşivlemek istiyorsanız _zamanlanmış görev seçeneğini_ aktif edebilirsiniz. Bu görev `diff:archive` komutunu kullanarak her hafta pazar günü sabah saat 02:00'de çalışır**. Zamanlanmış görev kullanmazsanız, mesajın her düzenlemesinden sonra mesaja ait eski düzenlemeler taranır ve arşivlenir. Diğer bir seçenek de `php flarum diff:archive` komutunu kullanarak eski düzenlemeleri elle arşivlemektir.

> **: Zamanlanmış görevlerin çalışabilmesi için Linux sunucunuza aşağıdaki komutu vermelisiniz:
> 
> `* * * * * php /<path/to/flarum>/flarum schedule:run >> /dev/null 2>&1`
> 
> Bu komut dakikada bir zamanlanmış görevleri kontrol eder ve zamanı gelmiş görevleri çalıştırır.

## Bağlantılar

- [Flarum tartışma konusu](https://discuss.flarum.org/d/22779-diff-for-flarum)
- [GitHub üzerindeki kaynak kodu](https://github.com/the-turk/flarum-diff)
- [Değişiklikler](https://github.com/the-turk/flarum-diff/blob/master/CHANGELOG.md)
- [Sorun bildir](https://github.com/the-turk/flarum-diff/issues)
- [Packagist aracılığıyla indir](https://packagist.org/packages/the-turk/flarum-diff)
