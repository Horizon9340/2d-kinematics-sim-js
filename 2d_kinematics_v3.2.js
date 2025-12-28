//2D Kinematics Simulation V3.2

//define lots of vars
const g = 9.81;
const dt = 0.01; //derivative of t, or how much time is changing between calculations

let V = 10;
let theta = 30;

let Viy = V * Math.sin(theta * Math.PI/180);
let Vix = V * Math.cos(theta * Math.PI/180);

let x = 0;
let y = 0;
let t = 0;

while (y >= 0) {
    t = t + dt;
    updatePosition(); 
    console.log(
        "X: " + x + "Y: " + y + "\nT: " + t + "\n");
};

function updatePosition (){
    //update velocity and position in y
    Viy = Viy - g * dt;
    y = y + Viy * dt;

    //update velocity and position in x
    x = x + Vix * dt;
};

console.log("Total time elapsed: " + t + " seconds.");
