
const stats = document.querySelector('#stats')
export function createStateItems(){
    const statItem = document.createElement('div')
    const actual = document.createElement('h5')
    const feels = document.createElement('h5')
    statItem.setAttribute('class','statItem')
    const img = new Image()
    img.src = require(`../icons/${hour.icon}.png`)
    img.setAttribute('class', 'img')
    actual.setAttribute('id','actual')
    feels.setAttribute('id','feels')
    statItem.append(actual)
    statItem.append(feels)
    statItem.append(img)
    stats.append(statItem)
}