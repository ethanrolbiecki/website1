const main = document. querySelector('main')
 const voicesSelect = document.getElementById('voices')
 const textarea = document.getElementById('text')
 const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById( 'close')



const data = [

    {
        image: "drink.jpg",
        text: "I'm Thirsty"
    },
    {
        image: 'food.jpg',
        text: "I'm Hungry"
    },
    {
        image: 'tired.jpg',
        text: "I'm Tired"
    },
    {
        image: 'hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: 'happy.jpg',
        text: "I'm Happy"
    },
    {
        image: 'angry.jpg',
        text: "I'm Angry"
    },
    {
        image: 'sad.jpg',
        text: "I'm Sad"
    },
    {
        image: 'scared.jpg',
        text: "I'm Scared"
    },
    {
        image: 'outside.jpg',
        text: "I Want To Go Outside"
    },
    {
        image: 'home.jpg',
        text: 'I Want To Go Home'
    },
    {
        image: 'school.jpg',
        text: 'I Want To Go To School'      
    },
    {
        image: 'grandma.jpg',
        text: "I Want To Go to Grandmas"
    }
]

data.forEach(createBox)

function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src = "${item.image}" alt = "${item.text}" />
        <p class="info">${item.text}</p>
    `


    box.addEventListener('click', ()=> {
        setTextMessage(item.text)
        speakText()

        box.classList.add('active')
        setTimeout(() =>box.classList.remove('active'),800)
    })
    main.appendChild(box)
}

//Initialize SPeecje synthiunandaisdnaod

const message = new SpeechSynthesisUtterance()

//Set text fucntuion
function setTextMessage(text) {
    message.text = text
}

function speakText() {
    speechSynthesis.speak(message)
}
// Toggle Text box
toggleBtn.addEventListener('click', ()=> {
    document.getElementById('text-box').classList.toggle
    ('show')
})

//Close box
closeBtn.addEventListener('click',()=> {
    document.getElementById('text-box').classList.remove
    ('show')
})

let voices = []

function getVoices() {
    voices = speechSynthesis.getVoices()

    voices.forEach(voice => {
        const option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`

        voicesSelect.appendChild(option)
    })
}

speechSynthesis.addEventListener('voiceschanged', getVoices)

//change voice

voicesSelect.addEventListener('change', setVoice)

function setVoice(e) {
    message.voice = voice.find(voice => voice.name === e.target.value)
}

getVoices()

readBtn.addEventListener('click', ()=> {
    setTextMessage(textarea.value)
    speakText()
})