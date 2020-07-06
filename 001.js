// menentukan grade dari suatu masukan angka
let grade = (a) => {
    //angka lebih besar atau sama dengan 90, maka output adalah huruf A
    if(a >= 90){
        console.log('A')
    }
    //angka di antara 80 dan 89, maka output adalah huruf B
    else if(a >= 80){
        console.log('B')
    }
    //angka di antara 70 dan 79, maka output adalah huruf C
    else if (a >= 70) {
        console.log('C')
    }
    //angka di antara 60 dan 69, maka output adalah huruf D
    else if (a >= 60) {
        console.log('D')
    }
    //angka lebih kecil dari pada 59, maka output adalah huruf E
    else if (a < 59) {
        console.log('E')
    }
};


// Testing
grade(10)