//IMPORTS
 //import { gsap } from "gsap";
 //import { GSDevTools } from "gsap/GSDevTools";
 //import { MotionPathPlugin } from "gsap/MotionPathPlugin";

//register Plugins
 //gsap.registerPlugin(GSDevTools);
 //gsap.registerPlugin(MotionPathPlugin);
// GSDevTools.create();

 //gsap.set("#moon",{transformOrigin:"center"});

 //let mainTL = gsap.timeline();

//mainTL.from("#stars path", {scale:2, repeat:-1, yoyo:true, duration:1}, "sky")
     // .to("#moon", {rotate:30, repeat:-1, yoyo:true, duration:5}, "sky")
     // .to("#glow", {alpha:0, repeat:-1, yoyo:true, duration:2.5}, "sky")
     // .from("#spaceship", {y:"+=400", duration:2}, "fly")
     // .from("#spaceshipsmoke", {y:"+=400", duration:2}, "fly")
     // .from("#smoke1", {y:"+=200", scale:0, duration:0.25})
     // .from("#smoke2", {y:"+=200", scale:0, duration:0.25}, "-=0.5")
     // .from("#smoke3", {y:"+=450", scale:0, duration:0.25}, "-=0.75")
      // .to("#spaceshipsmoke", {y:"+=400", alpha:0, duration:0.75})
      // .to("#smoke1", {y:"+=200", alpha:0, duration:0.75})
      // .to("#smoke2", {y:"+=200", alpha:0, duration:0.75})
      // .to("#smoke3", {y:"+=450", alpha:0, duration:0.75})
      // .to("#spaceship", {duration: 5, motionPath: {path: "#spaceshippath", align:"#spaceshippath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "none", scale:0.5}, "-=3");

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
// let ready = (callback) => {
//   if (document.readyState != "loading") callback();
//   else document.addEventListener("DOMContentLoaded", callback);
// }

// ready(() => {
//   //add tools
//   //GSDevTools.create();

//   /* add your code here */
//   let mainTL = gsap.timeline({id:"main"});


//   function init(){
//     //***********  fadeInTL init ****************

//     //*********** zoomTL init ****************

//     //*********** spaceshipTL init ****************

//     //*********** liftOffTL init ****************

//     //*********** flightTL init ****************

//     //*********** moonLandingTL init ****************


//   }

//   //Nested Timelines
//   //***********  fadeInTL  ****************
//   function fadeInTL(){

//   }

//   //*********** zoomTL ****************

//   //*********** spaceshipTL ****************

//   //*********** liftOffTL ****************

//   //*********** flightTL ****************

//   //*********** moonLandingTL ****************


//   //1. set initial properties
//   init();

//   //2. show content - prevents FOUC
//   gsap.set('#svg-container',{visibility:"visible"});

//   //3. BUILD Main timeline
// //  mainTL.add(fadeInTL())


//   //;//tl END

// });