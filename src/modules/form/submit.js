import dayjs from "dayjs"

// Capturando o formulário
const form = document.querySelector("form")
// Capturando o input de data
const selectedDate = document.getElementById("date")

// Data atual para formatar o input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

// Capturando o evento de envio do formulário
form.onsubmit = (event) => {
    // Previne o comportamento padrão de carregar a página com o envio do formulário
    event.preventDefault()
    
}