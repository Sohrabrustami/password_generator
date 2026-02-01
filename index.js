
const characters = [
  // Uppercase A–Z
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

  // Lowercase a–z
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",

  // Digits 0–9
  "0","1","2","3","4","5","6","7","8","9",

  // Special characters
  "!","@","#","$","%","^","&","*","(",")",
  "-","_","=","+","[","]","{","}",";",":",
  "'","\"",",",".","<",">","/","?","\\","|","`","~"
];

const charactersWithoutSp = [
  // Uppercase A–Z
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

  // Lowercase a–z
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",

  // Digits 0–9
  "0","1","2","3","4","5","6","7","8","9"
];



let generated_password = document.getElementById("gn_btn")

let generated_password2 = document.getElementById("gn2_btn")

let pass_length = document.getElementById("field")

var pass_length2 = Number(pass_length.value)






function getRandomNum(){
  
    let indexN = Math.floor(Math.random()* characters.length)
    return characters[indexN]

}

function getRandomChracter(){
  
    let indexN = Math.floor(Math.random()* charactersWithoutSp.length)
    return charactersWithoutSp[indexN]

}

function generatePass(){
    let list= ''
    let pass_length2 = Number(pass_length.value)
    if (document.getElementById("checkbox").checked){
        for(let i=0;i<pass_length2;i++){
        list+=getRandomNum()
    }
    generated_password.innerText = list
        
    }
    else {
    for(let i=0;i<pass_length2;i++){
        list+=getRandomChracter()
    }
    generated_password.innerText = list
}
    
}



function generatePass2(){
    let list2= ''
    let pass_length2 = Number(pass_length.value)
    
    if(document.getElementById('checkbox').checked)
    {
    for(let i=0;i<pass_length2;i++){
        list2+=getRandomNum()
    }
    generated_password2.innerText = list2

    }

    else {
    for(let i=0;i<pass_length2;i++){
    list2+=getRandomChracter()
    }
    generated_password2.innerText = list2

    }

    
}

function copyPassword() {
const passwordEl = document.getElementById("gn_btn");
    const text = passwordEl.innerText.trim(); 

    if (text === "") {
        alert("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied!");
        })
        .catch(() => {
            alert("Copy failed");
        });

}

function copyPassword2(){
    const passwordEl = document.getElementById("gn2_btn");
    const text = passwordEl.innerText.trim()

    if (!text) {
        alert("Nothing to copy")
        return;

    }

    navigator.clipboard.writeText(text)
    .then(() => {
        alert('Copied')
    })
    .catch(() => {
        alert("copied failed")
    }

    )

}




