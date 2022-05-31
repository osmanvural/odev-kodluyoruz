let namePrompt = prompt("Lütfen Adınızı Giriniz:")
let myName = document.querySelector("#myName")

if (namePrompt) {
    myName.innerHTML = `${namePrompt.toUpperCase()}`
}

function hours() {
    let clock =new Date();
    let hours = clock.getHours().toLocaleString()
    let minutes = clock.getMinutes().toLocaleString()
    let seconds = clock.getSeconds().toLocaleString()
    let day = "Çarşamba"

    document.querySelector("#myClock").innerHTML= `${hours}:${minutes}:${seconds} ${day}`
    
}

setInterval(hours, 1000)
