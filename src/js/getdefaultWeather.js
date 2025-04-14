import { displayInfo } from './displayInfo'
import { displayStats } from './displayStats'
import { removeDefaultWeather } from './removedefaultWeather';
const loader = document.querySelector('.loader-overlay')

export async function getdefaultWeather(dayIndex= 0, firstCall=true) {
        if(firstCall == false){
                await removeDefaultWeather()
        }
        const location = 'lahore'
        loader.style.display = 'flex'
        const api = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9CH68YR5NRXPCGFQKYJDDZTPF`)
        const apiJson = await api.json()
        // console.log(apiJson);
        await displayInfo(apiJson, dayIndex)
        displayStats(apiJson, dayIndex)
        loader.style.display = 'none'
        // return location;
}

