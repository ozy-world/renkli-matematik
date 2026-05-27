// 1. İnternetten indirdiğimiz renk paketini projemize çağırıyoruz:
import chalk from 'chalk';
// 2. Kendi basit toplama fonksiyonumuzu yazıyoruz:
function topla(a, b) {
return a + b;
}
// 3. Fonksiyonu çalıştırıp sonucu alıyoruz:
const sonuc = topla(12, 23);
// 4. Sonucu chalk paketi sayesinde terminalde süslü yazdırıyoruz:
console.log(chalk.green.bold("Tebrikler! İşlem Başarılı."));
console.log("Sayıların Toplamı: " + chalk.blue.underline(sonuc));