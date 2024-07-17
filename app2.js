const username = document.getElementById('name');
const age = document.getElementById('age');
// const btngreeting = document.getElementById('greeting');
const messageGreat = document.getElementById('message');

messageGreat.addEventListener('keypress', sendGreeting);
age.addEventListener('keydown', sendGreeting);
username.addEventListener('keyup', sendGreeting);

function sendGreeting() {
    let user = username.value;
    let userAge = age.value;

    if (userAge >= 18) {
        messageGreat.textContent = `Bienvenido ${user}`;
        
    if (userAge >=18){
         messageGreat.textContent = `Bienvenido ${user},es mayor de edad`;
        messageGreat.style.color = 'green';
    }
       
    } else {
        messageGreat.textContent = `Bienvenido ${user} es menor de edad`;
        messageGreat.style.color = 'orange';
    }
}
