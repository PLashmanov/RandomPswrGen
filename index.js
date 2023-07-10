
function generator() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
    "!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
    let pswrd1 = [];
    let pswrd2 = [];
    let passwordLength = 15;
    for(let i = 0; i < passwordLength ; i++){
    let randomPsswrd1 = Math.round(Math.random() * characters.length )
    let randomPsswrd2 = Math.round(Math.random() * characters.length )
    pswrd1 += characters[randomPsswrd1]
    pswrd2 += characters[randomPsswrd2]
    let pswrdEl1 = document.getElementById("pswrd-el1")
    let pswrdEl2 = document.getElementById("pswrd-el2")
    let generateBtn = document.getElementById("gen-el")
    pswrdEl1.value = pswrd1
    pswrdEl2.value = pswrd2
    
    }
}
