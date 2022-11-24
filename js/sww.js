const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "nat" && password === "1234") {
        
        window.location.href = './Alexa.html';
    } 

    if (username === "PetuniaG" && password === "11242022") {
        
        window.location.href = './petunia.html';
    } 

    if (username === "Miguelh11118@gmail.com" && password === "Estephanie@2022") {
        
        window.location.href = './Estephanie.html';
    } 


   
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
