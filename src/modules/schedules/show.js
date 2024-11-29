import dayjs from "dayjs";

// Selecionando as sessões do dia 
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
    try {
        // Limpando as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        // Renderiza os agendamentos por período
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            // Adiciona ID de agendamento
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
name.textContent = schedule.name

            // Cria o ícone de cancelar o agendamento 
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Ícone de cancelamento")

// Adiciona o tempo e o nome no item
item.append(time, name, cancelIcon)

// Obtendo a hora
const hour = dayjs(schedule.when).hour()

// Renderiza o agendamento na sessão
if (hour <= 12) {
    periodMorning.appendChild(item)
} else if (hour > 12 && hour < 18) {
    periodAfternoon.appendChild(item)
} else if (hour >= 18) {
    periodNight.appendChild(item)
}

        })
    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}