# 2d-kinematics-sim-js
This repo is a sequence of folders that documents my path in learning how to simulate basic 2d kinematics/projectile motion in JS, my first and most fluent programming language. The goal of this project was to understand how to code a simulation of projectile motion on Earth, with the only unbalanced force acting upon an object is gravity.

Note that each version has sub-versions (ex: v1.2 or v4.3) because I made these before I discovered GitHub, and simply changed the title of the file whenever I made significant changes to the code.

- [VERSION 1](2d_kinematics_v1.2)
  This was the first version I made, without any knowledge about simulations. I only logged numbers calculated from kinematic equations. I used separate x and y velocity components, and created a while loop that would print the position in x and y of the launched object at a certain time t based on the kinematic equations y = viy * t - 1/2 * g * t^2 and x = vix * t. 

- [VERSION 2](2d_kinematics_v2.3)
  Not much was changed from v1, except that I got rid of the x and y velocity components and replaced them with a single velocity vector and a launch angle theta. 

- [VERSION 3](2d_kinematics_v3.2)
  After I made v2, I did some learning on how simulations worked, and I realized that I had not been creating a simulation at all, but a calculation. By using kinematic equations, I was tying the launched object to a predetermined path (a parabola) that did not actually update in real time. I was not simulating motion, only drawing a path of what it was supposed to look like. This meant that if I wanted to add drag force, air resistance, wind, etc., then I would need to fundamentally change how my code worked.

  Instead of using kinematic equations, I updated velocity and then position within each time step, and then logged the result. This meant that I was now just predicting where the object would go in the next __seconds of time, and not pulling numbers from a path that is where the object should be. Now it is a simulation.

- [VERSION 4](2d_kinematics_v4.3/)
  Before I would get into any more advanced stuff, I decided I wanted to try and display the path of the object's motion. The only way I knew how to do this was with web building, so I created an HTML and CSS document to make an interface that can display the motion. After some research, I learned that canvas was the best way to draw something on an HTML website using JS. 
  
  This led to hours of understanding canvas, being confused, breaking the code, and ending up with a lopsided drawing of the motion more times than I want to count. I finally figured out how to display the path itself, though it's not very pretty. I didn't make any more updates to the code or visualization of data after that.

After all of this learning, writing, breaking, and relearning, I decided that JS and HTML was not the best way to create and displat a physics simulation. I knew that there must be an easier way to learn this, a way that comes without spending hours learning about web building, so I ended the project.