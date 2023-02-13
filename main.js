
const bntTry = document.querySelector("#btnTry")
const bntReset = document.querySelector("#bntReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let attempts = 1
let randomNumber = Math.round(Math.random() * 10)


bntTry.addEventListener('click', handleTryClick)
bntReset.addEventListener('click', function () {
    toggleScreen()
    attempts = 1
    randomNumber = Math.round(Math.random() * 10)

})

function handleTryClick(event) {
    event.preventDefault() // nao enviar o formulario

    const inputNumber = document.querySelector("#inputNumber")

    // console.log(inputNumber.value)

    // console.log(attempts)

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText =
            `Acertou em ${attempts}  tentativas!`

        // console.log("voce acertou em" + attempts)
    }

    inputNumber.value=""

    attempts++


}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}




