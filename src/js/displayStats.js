import { createStateItems } from "./createStatItems"

const stats = document.querySelector('#stats')


export function displayStats(api, dayIndex=0){
    const days = api.days
    console.log(days)
    const hours = days[dayIndex].hours
    const time = ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
    // createStateItems()
    let j=0
    hours.forEach(hour =>{
        const statItem = document.createElement('div')
        const actual = document.createElement('h5')
        const feels = document.createElement('h5')
        statItem.setAttribute('class','statItem')
        actual.setAttribute('id','actual')
        feels.setAttribute('id','feels')
        // div.append(time[j],hour.temp, hour.feelslike)
        const img = new Image()
        img.src = require(`../icons/${hour.icon}.png`)
        img.setAttribute('class', 'img')
        actual.innerText = ` Temp ${hour.temp}`
        feels.innerText = ` Feels ${hour.feelslike}`
        statItem.append(actual)
        statItem.append(feels)
        statItem.append(img)
        statItem.append(time[j])
        j++
        stats.append(statItem)
    })
}