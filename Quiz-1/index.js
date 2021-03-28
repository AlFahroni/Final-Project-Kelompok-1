// Soal 1
var kata = "Aku Gagal Lagi";
var arrKata = kata.split(' ');
var jmlKata = 0;
for(var i=0 ; i<=arrKata.length; i++){
    jmlKata=i;
}
console.log(jmlKata);



// Soal 2
var date = "31 Desember 2021";
var tgl = date.split(' ');
var hari = parseInt(tgl[0]);

var bulan = tgl[1].toLocaleLowerCase();
var tahun = parseInt(tgl[2]);

//menentukan tahun kabisat
if (tahun%400==0||tahun%4==0) {if (bulan=='februari'){bulan='februariKabisat';}}

//total Tanggal dan koversi bulan ke int
switch (bulan){
    case 'januari': {bulan = 1; totalTanggal = 31; break;}
    case 'februari': {bulan = 2; totalTanggal = 28; break;}
    case 'februariKabisat': {bulan = 2; totalTanggal = 29; break;}
    case 'maret': {bulan = 3; totalTanggal = 31; break;}
    case 'april': {bulan = 4; totalTanggal = 30; break;}
    case 'mei': {bulan = 5; totalTanggal = 31; break;}
    case 'juni': {bulan = 6; totalTanggal = 30; break;}
    case 'juli': {bulan = 7; totalTanggal = 31; break;}
    case 'agustus': {bulan = 8; totalTanggal = 31; break;}
    case 'september': {bulan = 9; totalTanggal = 30; break;}
    case 'oktober': {bulan = 10; totalTanggal = 31; break;}
    case 'november': {bulan = 11; totalTanggal = 30; break;}
    case 'desember': {bulan = 12; totalTanggal = 31; break;}
}

//hitung tanggal besok
var hariBesok = hari+1;
if (hariBesok>totalTanggal) {
    bulan++;
    hariBesok=1;
    if (bulan==13) {bulan=1; tahun++}
}

var tomorrow=hariBesok+' '+bulanString(bulan)+' '+tahun;
console.log(tomorrow);

function bulanString (bln){
    switch (bln){        
        case 1 : {bulan = 'Januari'; break;}
        case 2 : {bulan = 'Februari'; break;}
        case 3 : {bulan = 'Maret'; break;}
        case 4 : {bulan = 'April'; break;}
        case 5 : {bulan = 'Mei'; break;}
        case 6 : {bulan = 'Juni'; break;}
        case 7 : {bulan = 'Juli'; break;}
        case 8 : {bulan = 'Agustus'; break;}
        case 9 : {bulan = 'September'; break;}
        case 10 : {bulan = 'Oktober'; break;}
        case 11 : {bulan = 'November'; break;}
        case 12: {bulan = 'Desember'; break;}
    }
    return bulan;
}


