gsap.timeline().from("body", {opacity:0, duration:3, ease:"expo.inOut"});

var navianimation = gsap.timeline({paused: true})
    .to("#openNav", {opacity:0, duration:.8, ease:"expo.inOut"})
    .to("#navigation", {yPercent:100, duration:1, ease:"expo.inOut"}, "-=30%")
    .to("#logo", {opacity:1, duration:.8, ease:"expo.inOut"})
    .from(".menu-title", {opacity:0, y:20}, "-=85%")
    .from(".menu-item", {opacity:0, y:20, stagger:0.05,}, "-=50%")
    .from(".menu-title2", {opacity:0, y:20}, "-=85%")
    .from(".menu-item2", {opacity:0, y:20, stagger:0.05,}, "-=50%")
    .from(".menu-title3", {opacity:0, y:20}, "-=85%")
    .from(".menu-item3", {opacity:0, y:20, stagger:0.05,}, "-=50%")
    .to("#closeNav", {opacity:1, delay:.5, duration:1})
    ;


document.getElementById("openNav").onclick = ()=> navianimation.play();
document.getElementById("closeNav").onclick = ()=> navianimation.reverse();