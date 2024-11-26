import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "./show.js"

// seleciona o input de data 
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
// obtém a data do input 
const date = selectedDate.value 

// Busca na API os agendamentos 
const dailySchedules = await scheduleFetchByDay({ date })

// Exibe os agendamentos 
schedulesShow({ dailySchedules})
    // Renderiza as horas disponíveis 
    hoursLoad({ date, dailySchedules })
}