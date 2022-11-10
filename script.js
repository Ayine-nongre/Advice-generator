window.onload = getData

document.getElementById('dice').addEventListener('click',getData)

function getData(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(response => {
        document.getElementById('quote').innerText = response.slip.advice 
        document.getElementById('advice-num').innerText = response.slip.id
    })
    .catch(error => console.error(error))
}
