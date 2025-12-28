//2D Kinematics Simulation V4.3

const startButton = document.getElementById("startButton");

//canvas setup
const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

//declaring lots of variable
const g = 9.81;
const dt = 0.01;

let velocity = 10;
let theta = 30;

let velocityX = velocity * Math.cos(theta * Math.PI/180);
let velocityY = velocity * Math.sin(theta * Math.PI/180);

let x = 0;
let y = 0;
let t = 0;

startButton.addEventListener("click", () => {//runs functions when button is clicked
    animate();
});

function animate() {//function that runs all of the animations
    if (y <= 400) {
        t += dt;
        updatePosition();
        drawPosition();
        requestAnimationFrame(animate);
    }
}

function updatePosition () {//updates position and velocities
    velocityY = velocityY - g * dt;
    y = y + velocityY * dt;

    x = x + velocityX * dt;
};

function drawPosition () {//draws a pixel at new position
    ctx.fillRect(x * 10, canvas.height - y * 10, 1, 1);
};

