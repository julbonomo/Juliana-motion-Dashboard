//IMPORTS
 import { gsap } from "gsap";
 import { GSDevTools } from "gsap/GSDevTools";
 import { MorphSVGPlugin} from "gsap/MorphSVGPlugin";
 //import { MotionPathPlugin } from "gsap/MotionPathPlugin";

//register P//lugins
 gsap.registerPlugin(GSDevTools, MorphSVGPlugin);
 //gsap.registerPlugin(MotionPathPlugin);
// GSDevTools.create();

 //gsap.set("#moon",{transformOrigin:"center"});



 let ready = (callback)=>{
        if(document.readyState != "loading")callback();
        else document.addEventListener("DOMContentLoaded",callback);
      }
      
      ready(() => {


 let mainTL = gsap.timeline({id:"main"});

mainTL.from("#Gray-background", {scale:8, repeat:-1, duration:1}, "#Gray-background");



function init(){

//Intro

gsap.set(["#Big-rectangle", "#bottom-rectangle", "#top-rectangle", "#car", "#miles", "#P","#D",
"#light-blur","#mph","#auto-drive","#light-function","#songs", "#sensor-bottomright",
"#main-songline", "#sensor-topleft", "#white-songline", "#play-buttons"],{alpha:0});

gsap.set("#Logo", { transform0rigin:"50% 50%"});
gsap.set("#top-rectangle", { transform0rigin:"50% 50%"});
gsap.set("#bottom-rectangle", { transform0rigin:"50% 50%"});
gsap.set("#car", { transform0rigin:"50% 50%"});
gsap.set("#battery", { transform0rigin:"50% 50%"});
gsap.set("#miles", { transform0rigin:"50% 50%"});
gsap.set("#P", { transform0rigin:"50% 50%"});
gsap.set("auto-drive", { transform0rigin:"50% 50%"});
gsap.set("auto-drive", { transform0rigin:"50% 50%"});
gsap.set("auto-drive", { transform0rigin:"50% 50%"});





}



//Nested Timelines
//   ***********  fadeInTL  ****************
function fadeInTL(){
      let tl = gsap.timeline();
      tl.from("#Logo", {duration:2, scale:10, ease:"expo"}, "Logo")
      .to("#Logo", {alpha:0, duration:2.5, ease:"back" }, "Logo")
      
      .from ("#Big-rectangle", {alpha:0}, "Big-rectangle")
      .to ("Big-rectangle", {x:"-=200", duration:1 })

      .from ("#top-rectangle", {alpha:0}, "top-rectangle")
      .to ("top-rectangle", {x:"-=100", duration:1 })

      .from ("#bottom-rectangle", {alpha:0}, "bottom-rectangle")
      .to ("bottom-rectangle", {x:"-=100", duration:1 })


      .from("#car", {duration:2, scale:2, ease:"expo"}, "car")
      .to("#car", {alpha:0, duration:2.5, ease:"back" }, "car")

      .from ("#battery", {alpha:0}, "battery")
      .to ("battery", {x:"+=200", duration:2 })

      .from ("#miles", {alpha:0}, "miles")
      .to ("miles", {x:"+=200", duration:2 })

      .from("#P", {duration:3.5, scale:.50, ease:"expo"}, "P")
      .to("#P", {alpha:0, duration:2.5, ease:"expo" }, "P")

      .from("#auto-drive", {duration:4, scale:.10, ease:"bounce"}, "auto-drive")
      .to("#auto-drive", {alpha:0, duration:2.5, ease:"bounce" }, "auto-drive")

      .from("#light-function", {duration:4, scale:.10, ease:"bounce"}, "light-function")
      .to("#light-function", {alpha:0, duration:2.5, ease:"bounce" }, "light-function")


//P to D
      .from ("#P", {alpha:0})
      .to ("#P", {duration:1.5, morphSVG: "#D"}, "+=1")


      
      
      ;
      return tl;
      
}










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
 init();

//   //2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//   //3. BUILD Main timeline
mainTL.add(fadeInTL())


;//tl END

      });