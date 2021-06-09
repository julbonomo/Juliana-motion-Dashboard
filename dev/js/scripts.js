//IMPORTS
import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
// import {GSDevTools} from "gsap/GSDevTools";
 //import { MotionPathPlugin } from "gsap/MotionPathPlugin";

//register P//lugins
 gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
 //gsap.registerPlugin(MotionPathPlugin);

//  GSDevTools.create();

 
MorphSVGPlugin.convertToPath("D, ten, twenty, thirty");
 
const mainTL = gsap.timeline({paused:true});
let PERC = {num:0};
//let PERC_num = $("#percentage_txt tspan");
let PERC_num = document.querySelector("#battery tspan");
//  let mainTL = gsap.timeline({id:"main"});

// mainTL.from("#gray-background", {alpha:0, duration:5});





// function init(){

//Intro


gsap.set("#logo", { transform0rigin:"50% 50%"});


//Nested Timelines
//   ***********  fadeInTL  ****************
// function fadeInTL(){
//       let mainTl = gsap.timeline();

//logoFadeIn
mainTL.from("#logo", {duration:3, scale:8, transformOrigin:"center", ease:"expo"})
      .to("#logo", {alpha:0, duration:2.5, ease:"back" })

//rectangle left to right 
      .from ("#big-rectangle", {alpha:0})
      .to ("#big-rectangle", {x:"-=0", duration:.25 })

// //top rectangle left to right 
      .from ("#top-rectangle", {alpha:0}, "toprectangle")
      .to ("top-rectangle", {x:"-=100", duration:.25 })

// //bottom rectangle left to right 
      .from ("#bottom-rectangle", {alpha:0}, "bottomrectangle")
      .to ("bottom-rectangle", {x:"-=100", duration:.25 })

// //carFadeIn
      .from("#car", {alpha:0, y:"+300", duration:1.5})

     

// //BatteryFadeIn
      .from("#battery", {alpha:0, y:"-50"},"battery")
      .from("#miles", {alpha:0, y:"-50"},"battery")
      .to(PERC, {duration:4, num:"+=88", roundProps:"num", onUpdate:percentHandler, ease:"expo"},"greenbar")
      .from("#greenbar", {scaleX:0, duration:4, transform0rigin: "0 0"},"greenbar")

// //PFadeIn
      .from("#P", {alpha:0})


// //AutodriveFadeIn - lightfadein
      .from("#auto-drive", {alpha:0, rotation:"-90", transformOrigin:"50% 50%", duration:2},"autodrive")
      .from("#light-function", {alpha:0, duration:2},"autodrive")


//lightsON
      .from("#light-blur", {scale:0, transformOrigin:"50% 50%"})



// //PMORPH to D

      .to("#P",{duration:.5, morphSVG:"#D"})
      

      .from("#mph",{alpha:0},"mph")
//tenFadeInFadeOut
      .from("#ten",{alpha:0},"mph")
      .to("#ten", {alpha:0, duration:2, ease:"back"})

//twentyFadeinout
      .from("#twenty",{alpha:0})
      .to("#twenty", {alpha:0, duration:2, ease:"back"})

//thirtyFadein
      .from("#thirty",{alpha:0})
// .to("#thirty", {alpha:0, duration:5})

      // .from("#twenty",{alpha:0},"mph")
      // .to("#ten",{duration:.5, morphSVG:"#twenty"}, "logomorph")
      // .to("#ten",{duration:.5, morphSVG:"#thirty"})

//songsFadeIn
      .from ("#missedcalls", {alpha:0, x:"-50"})
      .from ("#bluebanisters", {alpha:0, x:"-50"})
      .from ("#wayout", {alpha:0, x:"-50"})
      .from ("#letitallout", {alpha:0, x:"-50"})
      .from ("#oxygen", {alpha:0, x:"-50", scale:2})

      // .to("#songchoice", {scale:5, transformOrigin:"center", duration:2}, "songchoice")



//SongLine - playbuttons
      .from("#main-songline", {alpha:0}, "song")
      .from("#play-buttons", {alpha:0}, "song")


//sensors
      .from("#sensor-topleft", {alpha:0, rotation:"-20", transformOrigin:"50% 50%", duration:4},"sensors")
      .from("#sensor-bottomright", {alpha:0, rotation:"+20", transformOrigin:"50% 50%", duration:4},"sensors")


      // .from("#sensor-topleft",{duration:5, drawSVG:0},"-=.25","sensordraw") 
      // .from("#sensor-bottomright",{duration:5, drawSVG:0},"-=.25","sensordraw") 

//secondSongline
      .from("#white-songline", {alpha:0, duration:5})   



//       ;
//       // return mainTl;
      
// // }


// //  init();

// // //   //2. show content - prevents FOUC
// // gsap.set('#svg-container',{visibility:"visible"});

// // //   //3. BUILD Main timeline
// // mainTL.add(fadeInTL())

mainTL.play();
function percentHandler(){

      //PERC_num.text(PERC.num);
    
      PERC_num.textContent=PERC.num +"%";
    
    }
// // ;
