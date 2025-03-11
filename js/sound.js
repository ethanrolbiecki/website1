const sounds = ['applause','boo','gasp','tada',
    'victory','wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTLM = sound
    btn.addEventListener('click', ()=> {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})
