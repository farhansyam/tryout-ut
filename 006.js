let Mundur = (a) =>{
    if(a < 0) {
        console.log("NGGA BOLEH MINES")
    }
    else{
    if(a === 0) return //base case biar berhenti pada angka 0

    console.log(a)
    
    // rekursif
    Mundur(a - 1)
}
}

Mundur(22)