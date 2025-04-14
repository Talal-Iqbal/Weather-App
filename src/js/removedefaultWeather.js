import { currentConditions } from "./displayInfo"
import { description } from "./displayInfo"
const locationInfo = document.querySelector('#locationInfo')
const weatherInfo = document.querySelector('#weatherInfo')
const dates = document.querySelector('#dates')
const stats = document.querySelector('#stats')
// const description = document.querySelector('#description')
console.log(description);
// const currentConditions = document.getElementById('currentConditions')
// const currentConditions = document.querySelector('#currentConditions')

export async function removeDefaultWeather(){
    while (locationInfo.firstChild) {
        locationInfo.removeChild(locationInfo.firstChild);
    }
    description.remove()
    while(currentConditions.firstChild){
        currentConditions.removeChild(currentConditions.firstChild)
    }
    while (dates.firstChild) {
        dates.removeChild(dates.firstChild);
    }
    while (stats.firstChild) {
        stats.removeChild(stats.firstChild);
    }
    // currentConditions.remove()

}