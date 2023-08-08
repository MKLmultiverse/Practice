var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-10+"px";
    crsr.style.top = dets.y-10+"px";
    crsr_blur.style.left = dets.x-275+"px";
    crsr_blur.style.top = dets.y-275+"px";
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4;
        crsr.style.border = "0.01px solid #fff";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition = "all linear 0.15s"
    })
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.transition = "0s";
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2,
    }
})


gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:10,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1,
    }
})
// gsap.from(".card",{
//     scale:0.5,
//     opacity:0,
//     duration:1,
//     stagger:"0.1",
//     scrollTrigger:{
//         trigger:"#about-us",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 90%",
//         scrub:1,
//     }
// })
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 80%",
        scrub:4,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 90%",
        scrub:4,
    }
})

gsap.from("#page4 h1",{
    y:90,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end: "top 90%",
        scrub:3,
    }
})

