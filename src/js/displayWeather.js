// import { displayInfo } from './displayInfo'
// import { displayStats } from './displayStats'
import { getdefaultWeather } from './getdefaultWeather'
import { getCustomWeather } from './getCustomWeather'
import { removeDefaultWeather } from './removedefaultWeather';

const input = document.querySelector('#input')
const date = document.querySelectorAll('.date')
let value ;
let isDefault = true;


export  function displayWeather(){
    document.addEventListener('DOMContentLoaded', () => {
            getdefaultWeather()
    });

    input.addEventListener('keyup',(e) =>{
        if (e.keyCode == '13'){
            value = input.value;
            getCustomWeather(value)
            isDefault = false;
        }
    })

    document.addEventListener('click', e => {
        if (e.target.classList.contains('date')) {
            if (isDefault == true){
                // removeDefaultWeather()
                getdefaultWeather(e.target.id, false)
            }
            else{
                getCustomWeather(value, e.target.id)
            }
        }
    });

}