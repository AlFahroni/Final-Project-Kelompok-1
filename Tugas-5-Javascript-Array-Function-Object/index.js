// Soal 1
var daftarBuah = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
var daftarHewan = daftarBuah.sort();
for (var a = 0; a < daftarHewan.length; a++){
    console.log(daftarHewan[a]);
}

// Soal 2
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
var perkenalan = introduce(data);

function introduce(dataDiri){
    var kenalkan = 'Nama Saya '+dataDiri.name+', umur saya '+dataDiri.age+' tahun, alamat saya di '+dataDiri.address+', dan saya punya hobby yaitu '+dataDiri.hobby;
    console.log(kenalkan);
}

// Soal 3
var hurufVokal = ['a','i','u','e','o'];
var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1 , hitung_2) // 3 2

function hitung_huruf_vokal(kata){
    var jmlHurufVokal=0;
    var huruf=kata.toLowerCase().split('');
    for (var i=0 ; i <huruf.length ; i++){
       if (hurufVokal.indexOf(huruf[i])!=-1) {
        jmlHurufVokal++;
       }
    }
    return jmlHurufVokal;    
}

// Soal 4

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8

function hitung(angka){
    hasil = (angka * 2) - 2
    return hasil;
}