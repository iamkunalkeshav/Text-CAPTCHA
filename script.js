const captcha = document.querySelector(".captacha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector("input"),
CheckBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");


//storing all captcha characters in array 
let allCharacters = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
'Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l'
,'m','n','o','p','q','r','s','t','u','v','w','x','y','z' , 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function getCaptcha(){
    for (let i =0; i < 6; i++) { //getting 6 random characters from the array
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomChar}` ; //passing 6 random charcters inside captcha innerText

    }
}
getCaptcha();

reloadBtn.addEventListener("click" , ()=>{
    captcha.innerText = "";
    getCaptcha();
});

CheckBtn.addEventListener("click", e =>{
    e.preventDefault(); //preventing button rom its default behaviour
    statusTxt.style.display ="block";
    // adding space after each value of uder entered captcha I' ve added spaces while generating captcha
    let inputVal = inputField.value.split('').join(' ');
    if(inputVal == captcha.innerText){ //if captcha matched
       statusTxt.style.color = "#4db2ec";
        statusTxt.innerText ="Nice! You don't appear to be a robot."
        setTimeout(()=>{
          statusTxt.style.display = "";
          inputField.value = "";
          captcha.innerText = "";
          getCaptcha(); //calling captcha funtion
        }, 4000); // removing user entered value and captcha innerText after 4 sec
    }else{
        statusTxt.style.color = "#ff0000" ;
       statusTxt.innerHTML = "Captcha not matched. Please try again!"   
    }
});
