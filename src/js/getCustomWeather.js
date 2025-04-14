import { displayInfo } from './displayInfo'
import { displayStats } from './displayStats'
import { removeDefaultWeather } from './removedefaultWeather';
const date = document.querySelectorAll('.date')
const loader = document.querySelector('.loader-overlay')
export async function getCustomWeather(input, dayIndex = 0) {
            loader.style.display = 'flex'
            const location = input;
            console.log(location);
            try {
                const api = await fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9CH68YR5NRXPCGFQKYJDDZTPF`
                );
            console.log(api);
            const apiJson = await api.json();
            console.log(apiJson);
            await removeDefaultWeather()
            await displayInfo(apiJson, dayIndex)
            displayStats(apiJson, dayIndex)
            loader.style.display = 'none'
            // date.forEach(d =>{
            //     d.onclick = async () =>{
            //         console.log(d.id);
            //         await removeDefaultWeather()
            //         displayCustomDates(apiJson, d.id)
            //     }
            // })
            }
            catch{
                alert('Enter a valid Country/City name')
            }
}