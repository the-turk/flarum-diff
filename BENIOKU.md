 # Flarum için Diff

[![MIT lisansı](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-diff/blob/master/LICENSE) [![Son Stabil Sürüm](https://img.shields.io/packagist/v/the-turk/flarum-diff.svg)](https://packagist.org/packages/the-turk/flarum-diff) [![Toplam İndirme](https://img.shields.io/packagist/dt/the-turk/flarum-diff.svg)](https://packagist.org/packages/the-turk/flarum-diff)

Bu eklenti [Flarum](https://github.com/flarum) forumunuza "düzenleme geçmişi" özelliği eklemenizi sağlar. Şu anda beta aşamasında olduğundan, ileride gelecek bir güncellemeyle eski düzenleme geçmişlerinizi kaybedebilirsiniz.

Ekran görüntüleri:

- [Mesaj Görünümü](https://i.ibb.co/4m21pnM/post-Stream-Item.png)
- [Revizyon Listesi](https://i.ibb.co/PTTcWCw/dropdown-List.png)
- Aynı Hizada Gösterim Modu
  - [Satır numarasız özel görünüm](https://i.ibb.co/3RZWbsG/custom-Line-By-Line.png) (default)
  - [Satır numaralı tablo görünümü](https://i.ibb.co/XtDT9Pp/tabular-Line-By-Line.png)
- Yan Yana Gösterim Modu
  - [Satır numarasız özel görünüm](https://i.ibb.co/LP0x3vf/custom-Side-By-Side.png)
  - [Satır numaralı tablo görünümü](https://i.ibb.co/d04NBS3/tabular-Side-By-Side.png)
- [Eklenti Ayarları](https://i.ibb.co/YPBbhYT/extension-Settings.png)

## Özellikler

- [jfcherng/php-diff](https://github.com/jfcherng/php-diff) tabanlıdır.
- **satır** (varsayılan), **kelime** ve **karakter** seviyesindeki farklılıkları hesaplayabilir.
- "Aynı hizada" ve "Yan yana" olmak üzere iki ayrı gösterim modu vardır.
- Değişime uğrayan satırları, satır numaraları ile birlikte gösterebilirsiniz.
- Düzenleme geçmişlerini silebilirsiniz.
- `fof/nightmode` eklentisini destekler.

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

## Bağlantılar

- [Flarum tartışma konusu](https://discuss.flarum.org/d/22779-diff-for-flarum)
- [GitHub üzerindeki kaynak kodu](https://github.com/the-turk/flarum-diff)
- [Değişiklikler](https://github.com/the-turk/flarum-diff/blob/master/CHANGELOG.md)
- [Sorun bildir](https://github.com/the-turk/flarum-diff/issues)
- [Packagist aracılığıyla indir](https://packagist.org/packages/the-turk/flarum-diff)
