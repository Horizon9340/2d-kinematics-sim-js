//2D Kinematics Simulation V2.3

//define gravity
const g = 9.81;

//define positions and time
let x = 0;
let y = 0;
let t = 0;

//define launch vector
let V = 10;
let theta = 30;

//define components
let Vix = V * Math.cos(theta * Math.PI/180);
let Viy = V * Math.sin(theta * Math.PI/180);

//loop to display position
while (y >= 0){
    console.log("X: " + x + "\nY: " + y + "\nT: " + t + "\n");
    //kinematics equations to determine position
    y = Viy * t - 1/2 * g * (t * t);
    x = Vix * t;
    t += 0.01; //in seconds
};
