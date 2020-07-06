// tahun kabisat
let leapYear = (y1,y2) => {
    for (let i = y1; i < y2; ++i) {
        if (!(i % 4) && (i % 100) || !(i % 400)) console.log(i);
    }
}

leapYear(1600, 2020)