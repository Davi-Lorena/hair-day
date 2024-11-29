import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"


const periods = document.querySelectorAll(".period")

// Gerando um evento de clique para cada lista 

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            // obtém a li pai do elemento clicado
const item = event.target.closest("li")

console.log(item)

// Pega o ID do elemento para remover
const { id } = item.dataset
// Confirma que o Id foi selecionado
if(id) {
    // Confirma se o usuário quer cancelar
    const isConfirm = confirm("Deseja cancelar esse agendamento?")

    if(isConfirm) {
        // Faz a requisição para cancelar o agendamento na API
        await scheduleCancel({ id })
    
        // Atualiza a lista 
        schedulesDay()
    }
}


        }
    })
}
    )