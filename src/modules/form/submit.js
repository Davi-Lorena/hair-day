import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

import { schedulesDay } from "../schedules/load.js"

// Capturando o formulário
const form = document.querySelector("form")
// Capturando o input de nome
const clientName = document.getElementById("client")
// Capturando o input de data
const selectedDate = document.getElementById("date")

// Data atual para formatar o input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

// Capturando o evento de envio do formulário
form.onsubmit = async (event) => {
    // Previne o comportamento padrão de carregar a página com o envio do formulário
    event.preventDefault()

try {
    // Recuperando o nome do cliente 
const name = clientName.value.trim()

// Garantindo que ele digitará o nome 
if(!name) {
    return alert("Por favor, digite o nome do cliente")
}

// Recuperando o horário selecionado
const hourSelected = document.querySelector(".hour-selected")

// Confirmando que um horário disponível foi selecionado
if(!hourSelected) {
    return alert("Por favor, selecione um horário disponível")
}

// Recupera somente a hora
const [hour] =  hourSelected.innerText.split(":")

// Inserindo a hora na data 
const when = dayjs(selectedDate.value).add(hour, "hour")
console.log(when)

// Gera um ID
const id = new Date().getTime()

await scheduleNew({id, name, when,})

// Recarrega os agendamentos
await schedulesDay()

// Limpa o input de nome do cliente 
clientName.value = ""

} catch (error) {
    alert("Não foi possível realizar o agendamento")
}


}

