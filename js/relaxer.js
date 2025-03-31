const cotainer = document.getElementById('container')
const text = document.getElementById('text')

function breathAnimation() {
    text.innerHTML = 'Breath In'
    container.classList.add('grow')

   setInterval(breathAnimation(), 7500)

    setTimeout(( )= > {
        text.innerHTML = 'Hold'
    } , 3000)

    setTimeout(()=> {

        text.innerHTML = 'Breathe Out!'
        container.classList.remove('grow')
        container.classList.add('shrink')
    },4500)
}

