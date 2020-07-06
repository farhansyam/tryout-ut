// bukan kalkulator 

let kumpulanAnka = []

let bukanKalkulator = (e) => {
    //validasi input harus angka
    if (Number.isInteger(e)){
        kumpulanAnka.push(e)
        console.log(kumpulanAnka)
   //jika input '=' 
    }else if(e === '=')
    {
        let total = 0
        for (let i = 0; i < kumpulanAnka.length; i++) {
            total += kumpulanAnka[i];
        }
        // reset arraynya
        kumpulanAnka = []
        // log total penjumlahan
        console.log(total)
    }
}

// NB: untuk qual nya pakai string : '='
