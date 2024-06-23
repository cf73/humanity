gsap.registerPlugin(ScrollTrigger);

gsap.timeline().from("body", {opacity:0, duration:3, ease:"expo.inOut"});
gsap.timeline()
    .to("#dimmer", {delay: 1.5, opacity:1, duration:2.5, ease:"expo.inOut"})
    // .from("#titleText", {opacity:0, duration:2, ease:"expo.inOut"}, "-=80%")
    .from("#openNav", {opacity:0, duration:3, ease:"expo.inOut"}, "-=60%")
    ;

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



// SCROLL TRIGGERS

// pin filters
// ScrollTrigger.create({
//   scrollTrigger: '#hero-area',
//   start: 'top top',
//   endTrigger: 'footer',
//   end: 'bottom bottom',
//   pin: '#filter',
// });

// pin hero area
ScrollTrigger.create({
    Trigger: '#hero-area',
    start: 'top top',
    end: '+=1500',
    pin: '#hero-area',
  });

  //fade away the title text on scroll
  gsap.to('#titleText', {
    scrollTrigger: {
        trigger: "#titleText",
        start: "bottom 90%",
        end: "bottom center",
        scrub: true,
    },
    opacity: 0,
    duration: 1,
    });

//fade up the intro text
gsap.to('#introText', {
    scrollTrigger: {
        trigger: "#titleText",
        start: "bottom center",
        end: "bottom top",
        markers: true,
        scrub: true,
    },
    opacity: 1,
    duration: 1,
    })


  //pin introText for a while
  ScrollTrigger.create({
    trigger: "#titleText",
    start: "top top",
    end: "+=1200",
    pin: '#introText',
  });

// fade/show title text on challenge.show


  