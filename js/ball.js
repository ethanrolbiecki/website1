
  const ball = document.createElement('div');
  const LPadel = document.createElement('div');
  document.body.appendChild(ball);
  document.body.appendChild(LPadel);

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const LPadelWidth = 20;
  const LPadelHeight = 300;
  let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2;
  const LPadelXPosition = 50;

  const ballRadius = 30;
  let ballXPosition = windowWidth / 2 - ballRadius;
  let ballYPosition = windowHeight / 2 - ballRadius;
  let ballSpeed = 5;
  let ballXDirection = 1;
  let ballYDirection = 0.5;

  let wKey = false;
  let sKey = false;
  const LPadelSpeed = 5;

  let score = 0;
  let level = 1;

  let animationId;

  function checkGameStatus(ballXPosition) {
    const missedPaddle = ballXPosition < 0;
    if (missedPaddle) {
      ballSpeed = 0;
      const gameOver = document.createElement('div');
      gameOver.innerText = 'GAME OVER';
      gameOver.style.position = 'absolute';
      gameOver.style.top = '200px';
      gameOver.style.left = '50%';
      gameOver.style.transform = 'translateX(-50%)';
      gameOver.style.fontSize = '40px';
      gameOver.style.color = 'red';
      document.body.appendChild(gameOver);
    }
  }

  function updateScoreAndLevel() {
    score = score + 1
    if (score % 10 === 0) {
      level = level + 1;
      ballSpeed = ballSpeed + 5;
    }
  }

  function createBall() {
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "red";
    ball.style.position = "absolute";
    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
  }

  function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`;
    LPadel.style.width = `${LPadelWidth}px`;
    LPadel.style.backgroundColor = "blue";
    LPadel.style.position = "absolute";
    LPadel.style.left = `${LPadelXPosition}px`;
    LPadel.style.top = `${LPadelYPosition}px`;
  }

  function moveBall() {

    checkGameStatus(ballXPosition);

    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

   
    if (ballYPosition <= 0 || ballYPosition >= windowHeight - 2 * ballRadius) {
      ballYDirection *= -1;
    }

    // Bounce off right wall
    if (ballXPosition >= windowWidth - 2 * ballRadius) {
      ballXDirection *= -1;
      ballXPosition = windowWidth - 2 * ballRadius;
    }

    // Paddle collision
    const ballTop = ballYPosition;
    const ballBottom = ballYPosition + 2 * ballRadius;
    const ballLeft = ballXPosition;
    const LPaddleTop = LPadelYPosition;
    const LPaddleBottom = LPadelYPosition + LPadelHeight;
    const LPaddleRight = LPadelXPosition + LPadelWidth;

    if (
      ballLeft <= LPaddleRight &&
      ballBottom >= LPaddleTop &&
      ballTop <= LPaddleBottom &&
      ballXDirection < 0
    ) {
      ballXDirection *= -1;
      ballXPosition = LPaddleRight; 
      updateScoreAndLevel();
      document.querySelector('.scoreBoard').innerText = `Score: ${score} | Level: ${level}`;
    }

  }

  function moveLPaddle() {
    if (wKey && LPadelYPosition > 0) {
      LPadelYPosition -= LPadelSpeed;
    }
    if (sKey && LPadelYPosition < windowHeight - LPadelHeight) {
      LPadelYPosition += LPadelSpeed;
    }
    LPadel.style.top = `${LPadelYPosition}px`;
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'w') wKey = true;
    if (event.key === 's') sKey = true;
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'w') wKey = false;
    if (event.key === 's') sKey = false;
  });

  function animate() {
    moveBall();
    moveLPaddle();
    animationId = requestAnimationFrame(animate);
  }

  createBall();
  createLPadel();
  requestAnimationFrame(animate);
