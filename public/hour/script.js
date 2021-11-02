setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const number = document.querySelector('number number1')


let degree = 0;
const clock = document.getElementById('clock')

function createItem(num, degree) {
  let element = document.createElement("div")
element.className = 'number number1'
element.innerText = num;
element.style.transform = `rotate(${degree}deg)`
clock.appendChild(element) 
}

for(let i = 1; i <= 12; i++) {
console.log(i)
degree +=30;
createItem(i, degree)

}
  
function setClock() {
  
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock()

