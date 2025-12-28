//define g
const g = 9.81;

//define separate velocity components, preset without user input
//note that there is no angle here. the x and y act independently
let Vix = 5;
let Viy = 30;

//define position and time
let y = 0;
let x = 0;
let t = 0;

//loop to display positions
while (y >= 0){
    console.log("X position: " + x + " meters" + "\nY position: " + y + " meters" + "\nTime: " + t + " seconds\n");
    //kinematic equations to determine position
    y = Viy * t - 1/2 * g * (t * t);
    x = Vix * t;
    t += 0.01;
};
