// soal no 1
var nilai =54;
var indeks='';
if (nilai>=85) {
	indeks='A';
}else if (nilai >=75 && nilai < 85) {
	indeks='B';
}else if (nilai >=65 && nilai < 75) {
	indeks='C';
}else if (nilai >=55 && nilai < 65) {
	indeks='D';
}else{
	indeks='E';
}
console.log(indeks+'\n');

//soal no 2
var tanggal = 14;
var bulan = 10;
var tahun = 1996;

switch(bulan){
	case 1 : { bulan='Januari';
		break;
	}
	case 2 : { bulan='Februari';
		break;
	}
	case 3 : { bulan='Maret';
		break;
	}
	case 4 : { bulan='April';
		break;
	}
	case 5 : { bulan='Mei';
		break;
	}
	case 6 : { bulan='Juni';
		break;
	}
	case 7 : { bulan='Juli';
		break;
	}
	case 8 : { bulan='Agustus';
		break;
	}
	case 9 : { bulan='September';
		break;
	}
	case 10 : { bulan='Oktober';
		break;
	}
	case 11 : { bulan='November';
		break;
	}
	case 12 : { bulan='Desember';
		break;
	}
	default : { bulan = 'Tidak Ditemukan'}
}
var tanggalLahir = tanggal+' '+bulan+' '+tahun;
console.log(tanggalLahir+'\n');

//Soal 3
var n = 3;
var i = 0;
var j = 0;
var segitiga = '';
for (i=n; i>=1; i--){
     for (j=i; j<=n; j++){
        segitiga +='# ';
    }segitiga +='\n';
}
console.log(segitiga);

// soal 4
var m = 13;
var batas='';
var c = 0;
var baris='';
for	(var a=1; a<=m; a++){
	c++;
	switch(c){
		case 1 : { baris = a+' - I love programming'; break;}
		case 2 : { baris = a+' - I love Javascript'; break;}
		case 3 : { baris = a+' - I love VueJS'; break;}
	}
	console.log(baris);
	if(a%3==0){
		for (var s=1; s<=a ; s++){
			batas +='=';
		}
		console.log(batas);
		batas='';
		c = 0;
	}
}