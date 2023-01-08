const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Alexa" && password === "1212") {
        
        window.location.href = './Alexa.html';
    } 

    if (username === "PetuniaG" && password === "11242022") {
        
        window.location.href = './petunia.html';
    } 

    if (username === "Miguelh11118@gmail.com" && password === "Estephanie@2022") {
        
        window.location.href = './Estephanie.html';
    } 

    if (username === "Hilda" && password === "1234") {
        
        window.location.href = './Hilda.html';
    } 
    if (username === "Alejandro" && password === "Rosa123") {
        
        window.location.href = './Alejandro.html';
    } 
    if (username === "Edna" && password === "Edna123") {
        
        window.location.href = './Edna.html';
    } 
    if (username === "Danielle" && password === "Fall2020") {
        
        window.location.href = './Danielle.html';
    }

    if (username === "Pfranco87" && password === "Julisaj5*") {
        
        window.location.href = './Precilla.html';
    }
    if (username === "Jazzymerlos" && password === "Jazzlene07$") {
        
        window.location.href = './Jazzy.html';
    }
   
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
