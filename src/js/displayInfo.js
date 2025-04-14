
const locationInfo = document.querySelector('#locationInfo')
const weatherInfo = document.querySelector('#weatherInfo')
export const currentConditions = document.createElement('div')
export const description = document.createElement('h4')
currentConditions.setAttribute('id', 'currentConditions')
const dates = document.querySelector('#dates')

export  async function displayInfo(api, dayIndex = 0){
    console.log(api);
    // Location Info

    const h2 = document.createElement('h2')
    description.setAttribute('id', 'description')
    description.style.fontWeight = '200'
    h2.innerText = api.resolvedAddress
    description.innerText = api.days[dayIndex].description
    locationInfo.append(h2,description)

    //  Weather Info

    const conditions =   api.currentConditions
    // console.log(api.days[0].temp);
    const weather = [((conditions.temp -32) * 5/9).toFixed(1) + '°C', ((conditions.feelslike -32) * 5/9).toFixed(1) + '°C' , conditions.sunrise , conditions.sunset, conditions.precip]
    const labels = ['Temparature', 'Feels Like', 'Sun Rise', 'Sun Set', 'Rain']
    let i=0
    weather.forEach(w =>{
        console.log( labels[i] + w);
        const h4 = document.createElement('h4')
        const br = document.createElement('br')
        h4.innerText = `${labels[i]}  \n ${w}`
        h4.style.fontWeight = '100'
        currentConditions.append(h4)
        weatherInfo.append(currentConditions)
        i++;
    })

    // Display Dates

    const days = api.days
    function reverseString(str) {
        return str.split("-").reverse().join("/")
    }
    for(let i=0; i<=6; i++){
            console.log(reverseString(days[i].datetime));
            const h4 = document.createElement('h4')
            h4.setAttribute('id',`${i}`)
            h4.setAttribute('class', 'date')
            h4.innerText = reverseString(days[i].datetime)
            dates.append(h4)
    }
    const allDates = document.querySelectorAll('.date')
    allDates[dayIndex].classList.add('dateHover')
}