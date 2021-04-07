console.log('client side js is loading...')

const form = document.querySelector('form')
const address = document.querySelector('input')
const contentOne = document.querySelector('#contentOne')
const contentTwo = document.querySelector('#contentTwo')

contentOne.textContent = ''
contentTwo.textContent = ''

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/weather?address='+address.value).then((response)=>{
        response.json().then((data)=>{
            if(data.err){
                contentOne.textContent = data.err
                contentTwo.textContent = ''
                contentOne.style.color = 'red'
            }else{
                contentOne.style.color = 'black'
                contentOne.textContent = data.location
                contentTwo.textContent = data.des
            }
        })
        
    })
})