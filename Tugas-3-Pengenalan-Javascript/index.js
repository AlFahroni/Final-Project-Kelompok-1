// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
var gabungKalimat = pertama.substr(0, 5)+pertama.substr(12, 7)+kedua.substring(0, 8)+kedua.substring(8, 18).toUpperCase();
console.log(gabungKalimat);

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var hasil1 = (parseInt(kataPertama)-parseInt(kataKeempat)) * (parseInt(kataKedua)+parseInt(kataKetiga)); //(10 - 6) * (2 + 4)
console.log(hasil1);

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(3, 14);  
var kataKetiga = kalimat.substring(14, 19);  
var kataKeempat = kalimat.substring(19, 24);  
var kataKelima = kalimat.substring(24);  

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
