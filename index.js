const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    
    return randomPassword
    
}
function show(){
const generatedPasswordOne = generateRandomPassword()
let theKey = document.getElementById("key");
    theKey.textContent = (generatedPasswordOne)
}
function showw(){
const generatedPasswordOne = generateRandomPassword()
let theKey = document.getElementById("keyy");
    theKey.textContent = (generatedPasswordOne)
}
// dark mode
// DOM Selectors
const h1 = document.querySelector(".h1-");
const switchBtn = document.getElementById("switch");
const div = document.querySelector(".child-");
const p = document.querySelector("p");

// Change theme
switchBtn.addEventListener("change", () => {
    toggleRootClass();
});

function toggleRootClass() {
    document.querySelector(".child-").classList.toggle("light");
    document.querySelector(".h1-").classList.toggle("light");
    document.querySelector("p").classList.toggle("light");
}

