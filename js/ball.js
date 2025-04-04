const ball = document.createElement('div')
const ballRadius = 30

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = "100px"
    ball.style.width = "100px"
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = "30px"
    ball.style.left = "30px"
}

createBall()
