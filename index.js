import chalk from 'chalk';
// Eski toplama fonksiyonumuz (Aynen duruyor)
function topla(a, b) {
return a + b;
}
// YENİ ÖZELLİK: Çıkarma fonksiyonu ekliyoruz
function cikar(a, b) {
return a - b;
}
// Testler
const toplamaSonuc = topla(12, 23);
console.log("Sayıların Toplamı: " + chalk.blue.underline(toplamaSonuc));
const cikarmaSonuc = cikar(30, 12);
console.log("Sayıların Farkı: " + chalk.red.bold(cikarmaSonuc));