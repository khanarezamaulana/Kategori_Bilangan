var hasil = []; // untuk tampung hasilnya
var i = 0;
var prima = [];

var angka = (x) =>{
    if(isNaN(x)== false && (x % 1 == 0)){
        hasil.push('Bulat');
        i++;
    }

    if (i == 1){
        if (x < 0){
        hasil.push('Negatif') ; 
        }
    }

    if (i == 1){
        if (x >= 0){
        hasil.push('Cacah');
        }
    }

    if (i == 1){
        if (x > 0){
        hasil.push('Asli');
        }
    }

    if (i == 1){
        if (x % 2 != 0 && x > 0){
        hasil.push('Ganjil');
        }
    }

    if (i == 2){
        if (x % 2 == 0){
        hasil.push('Genap');
        }
    }

    if (x > 1 && i == 4){
        hasil.push('Komposit');
    }

    if (x == 0){
        hasil.push('Nol')
        hasil.push('Genap')
    }

    if (x == 1){
        i++
        hasil.push('Bukan Bilangan Prima');
    }
    if (x < 1){
        i++
        hasil.push('Bukan Bilangan Prima');
    }
    if (x == 2){
        i += 2
        hasil.push('Prima')
    }
    if (x == 3){
        i += 2
        hasil.push('Prima')
    }

    else if (x > 3){
        for(krm = 2; krm < x; krm++) {
            prima.push(x % krm);
        }
        if(prima.includes(0) == true){
            hasil.push("Bukan Prima");
            i++;
        }else{
            hasil.push("Prima");
            i+=2;
        }
    }

    return hasil;
    hasil = [];
}

console.log(angka(3))
