let kota = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"]

//set jadi objek
let uniqueSet = new Set(kota);
//balikin k array
let balik = [...uniqueSet];
console.log(balik);