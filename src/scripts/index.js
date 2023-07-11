/* Desenvolva seu código aqui */

const baseURL = 'http://localhost:3333'

 async function login (loginBody) {

    const token = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginBody)
    })
        console.log(token.ok)
   const responseToken = await token.json()
   localStorage.setItem("loginToken", responseToken.token)

}

const buttonAcess = document.querySelector('#formLogin');

buttonAcess.addEventListener('submit', (event) => {
    
    event.preventDefault()
   
    const {email, password} = event.target

    const emailValue = email.value
    const passwordValue = password.value

    const loginData = {
        "email": emailValue,
        "password": passwordValue
    }

    login(loginData)

})
