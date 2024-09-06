gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true);

gsap.timeline().from("body", {opacity:0, duration:3, ease:"expo.inOut"});

var navianimation = gsap.timeline({paused: true})
    .to("#openNav", {opacity:0, duration:.4, ease:"expo.inOut"})
    .to("#navigation", {yPercent:100, duration:1, ease:"expo.inOut"}, "-=40%")
    .to("#logo", {opacity:1, duration:.4, ease:"expo.inOut"})
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

// CHALLENGE SHOW TEMPLATE ----------------------------------------------------------------------------------------------

// pin hero area
// ScrollTrigger.create({
//   Trigger: '#hero-area',
//   start: 'top top',
//   end: "+=2500",
//   pin: '#hero-area',
// });

// fade away the title text on scroll
gsap.fromTo(
  "#initialQuote",
  {opacity: 1, // Initial opacity (from value)
  },
  {
    immediateRender: false,
    opacity: 0, // Target opacity (to value)
    duration: 0.25,
    scrollTrigger: {
      trigger: "#initialQuote",
      start: "bottom 90%",
      end: "bottom 20%",
      toggleActions: "play pause reverse reset",
      markers: false,
      scrub: false,
    },
  }
);

//fade up the intro text
gsap.to('#introText', {
  scrollTrigger: {
      trigger: "#initialQuote",
      start: "bottom center",
      end: "bottom top",
      toggleActions: "play pause reverse reset",
      markers: false,
      scrub: false,
  },
  opacity: 1,
  duration: 1,
});

//pin introText for a while
ScrollTrigger.create({
  trigger: "#initialQuote",
  start: "top top",
  end: "+=1200",
  pin: '#introText',
  pinSpacing: false,
});


// fade awway hero-area on scroll
gsap.fromTo(
  "#hero-area",
  {opacity: 1, // Initial opacity (from value)
  },
  {
    opacity: 0, // Target opacity (to value)
    duration: .5,
    scrollTrigger: {
      trigger: "#introText",
      start: "top top",
      end: "bottom center",
      toggleActions: "play none reverse reverse",
      markers: false,
      scrub: false,
    },
  }
);

// Pin breadcrumb
// ScrollTrigger.create({
//   trigger: "main",
//   start: "top top",
//   end: "bottom top",
//   markers: false,
//   pin: '#breadcrumb',
//   pinSpacing: false,
// });

// Pin breadcrumb
// ScrollTrigger.create({
//   trigger: "main",
//   start: "top top",
//   end: "bottom top",
//   markers: false,
//   pin: '#breadcrumb',
//   pinSpacing: false,
// });

// Pin filterssheet
// ScrollTrigger.create({
//   trigger: "main",
//   start: "top top",
//   end: "bottom top",
//   markers: false,
//   pin: '#filtersheet',
//   pinSpacing: false,
// });

// Expand breadcrumb to show filters
// var showFilters = gsap.timeline({ paused: true })
//   .to("#breadcrumb", { height: 300, duration: 1, ease: "expo.inOut" });

// document.getElementById("filterButton").onclick = () => {
//   showFilters.play();
//   console.log("yo");
// };
// document.getElementById("closeFilters").onclick = () => {
//   showFilters.reverse();
//   console.log("yo");
// };


gsap.registerPlugin(Flip);

const filterbar = document.querySelector("#filtersheet");

function doFlip() {
  // Get the initial state
  const state = Flip.getState(filterbar);
  filterbar.style.height = "100vh";
  return Flip.from(state, {duration: 1, ease: "power1.inOut"});
}

var revealFilters = gsap.timeline({paused: true})
      .to('#filterButton', {
        backgroundColor: '#141852',
        color: 'white'
      }
      )
      .add(doFlip(), "-=50%")
      .fromTo('.labelcontainer', 
        { 
        autoAlpha: 0,
        left: 60
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          left: 0,
          stagger: 0.1
        }, "-=30%"
      )
      .fromTo('#filterButtons', {
        y: 90,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
      }, "-=130%")
      ;

document.getElementById("filterButton").onclick = () => revealFilters.play();
document.getElementById("closeFiltersButton").onclick = () => revealFilters.reverse();


  
  
//   // re-pin hero area
// ScrollTrigger.create({
//   Trigger: '#hero-area',
//   start: '+=1500',
//   end: '+=19500',
//   pin: '#hero-area',
// });

  






// fade/show title text on challenge.show


  