let modeImg = document.querySelector('#mode')
let imgDaySrc = modeImg.getAttribute('src')
let headerText = document.querySelector('.header__text')
let p = document.querySelectorAll('p')
let careerTitle = document.querySelector('.career__title')
let skillsTitle = document.querySelectorAll('.skills__title')
let spanGray = document.querySelector('.gray')
let isDay = true
// imgDaySrc = imgDaySrc.slice(0,13) + '.png'
// let imgNightSrc = imgDaySrc.slice(0,13) + '1.png'
console.log(isDay);
modeImg.addEventListener('click', ()=>{
    if (isDay) {
        modeImg.setAttribute('src', 'img/night2.png')
        isDay = false
        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'
        p.forEach(element => {
            element.style.color = '#fff'
        });
        careerTitle.style.color = '#fff'
        skillsTitle.forEach(element=>{
            element.style.color = '#fff'
        })
        spanGray.style.color = '#fff'
    }
    else {
        modeImg.setAttribute('src', 'img/night2.png')
        isDay = true
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
        p.forEach(element => {
            element.style.color = '#474747'
        });
        careerTitle.style.color = '#474747'
        skillsTitle.forEach(element=>{
            element.style.color = '#474747'
        })
        spanGray.style.color = '#474747'



    }
})