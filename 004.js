// palindrome
let palindrome = (str) => {
    var regularExpresion = /[^A-Za-z0-9]/g;
    // ganti ke lowercase dam hapus karakter 
    var lowRegStr = str.toLowerCase().replace(regularExpresion, '');
    // balik
    var reverseStr = lowRegStr.split('').reverse().join('');
    // cek
    console.log(reverseStr === lowRegStr)
}
palindrome("Cigar? Toss it in a can. It is so tragic") // output true
palindrome("I did, did I?") // output true
palindrome("Red rum, sir, is murder") // output true
palindrome("Eva, can I see bees in a cave?") // output true
palindrome("Hello World") // output false