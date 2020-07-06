// menentukan nilai maksimum, minimum, dan rata-rata dari 100 deretan angka acak
let deretAngka = []
while (deretAngka.length < 100) {
    let r = Math.floor(Math.random() * 1000);
    if (deretAngka.indexOf(r) === -1) deretAngka.push(r);
}

let max = (e) => {
    console.log(Math.max(...e))
}
let min = (e) => {
    console.log(Math.min(...e))
}
let average = (e) => {
    // cari total semua
    let total = 0;
    for (let i = 0; i < deretAngka.length; i++) {
        total += deretAngka[i];
    }
    // rata-rata
    console.log(total / deretAngka.length)
}

max(deretAngka)
min(deretAngka)
average(deretAngka)