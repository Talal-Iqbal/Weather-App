import { getWeather } from './getWeather'
const api = await getWeather()

const days = api.days
const hours = days[0].hours

import  icons from `../icons/${hours[0].icon}`

export function getIcon(){
    console.log(icons);
}