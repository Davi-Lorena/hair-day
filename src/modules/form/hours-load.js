import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }){
    const opening = openingHours.map((hour)  => {
        // Mapeia cada item do array "openingHours" e recupera somente a hora 
       const [scheduleHour] = hour.split(":")

       // Adiciona a hora na date e verifica se está indisponível

       const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
       
       return {
        hour,
        available: isHourPast
       }

    })

// Renderiza os horários 

opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour 
    hours.append(li)
})

}