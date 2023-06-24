const startbtn = document.querySelector
('#start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0
startbtn.addEventListener('click', (Event) => {
    Event.preventDefault()
    screens[0].classList.add('up')
})

timelist.addEventListener('click', Event =>
    {
    if(Event.target.classList.contains('time-btn'))
    {time = parseInt(Event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
}
})

board.addEventListener('click', Event => {
if (Event.target.classList.contains('circle')){
 score++
 Event.target.remove()
 createRandomCircle()
}})


function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}
function decreaseTime(){
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if(current < 10) {
            current= `0${current}`
        }
        setTime(current)
    }
}

function setTime(velue) {
    timeEl.innerHTML = `00:${velue}`
}
function finishGame(){
    timeEl.remove()
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle () {
    const circle = document.createElement('div')
    const size = getrandomnumber(10, 40)
    const {width, height} = board.getBoundingClientRect()
    const x = getrandomnumber(0, width - size)
    const y = getrandomnumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width= `${size}px`
    circle.style.height= `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getrandomnumber(min, max){
     return Math.round(Math.random() * (max - min) + min)
}