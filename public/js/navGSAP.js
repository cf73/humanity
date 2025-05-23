gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
ScrollTrigger.normalizeScroll(true);


// var navianimation = gsap.timeline({paused: true})
//     .to("#openNav", {opacity:0, duration:.4, ease:"expo.inOut"})
//     .to("#navigation", {yPercent:100, duration:1, ease:"expo.inOut"}, "-=40%")
//     .to("#logo", {opacity:1, duration:.4, ease:"expo.inOut"})
//     .from(".menu-title", {opacity:0, y:20}, "-=85%")
//     .from(".menu-item", {opacity:0, y:20, stagger:0.05,}, "-=50%")
//     .from(".menu-title2", {opacity:0, y:20}, "-=85%")
//     .from(".menu-item2", {opacity:0, y:20, stagger:0.05,}, "-=50%")
//     .from(".menu-title3", {opacity:0, y:20}, "-=85%")
//     .from(".menu-item3", {opacity:0, y:20, stagger:0.05,}, "-=50%")
//     .to("#closeNav", {opacity:1, delay:.5, duration:1})
//     ;

// document.getElementById("openNav").onclick = ()=> navianimation.play();
// document.getElementById("closeNav").onclick = ()=> navianimation.reverse();


ScrollTrigger.create({
  trigger: '#cardsGrid',
  start: 'top 114',
  end: 'bottom bottom',
  pin: '#filters',
  pinSpacing: false 
});

ScrollTrigger.create({
  trigger: '#contentColumn',
  start: 'top 114',
  end: 'bottom bottom',
  pin: '#filtersMenu',
  pinSpacing: false 
});
// gsap.to("#welcometext", {
//   scrollTrigger: {
//     trigger: "#welcomearea",
//     start: "top 90%", // Adjust based on when you want the animation to start
//     toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
//   },
//   opacity: 1,
//   filter: "blur(0px)",
//   duration: 2,
//   ease: "power2.inOut"
// });



// GLOABLS
// slide down nav bar

// gsap.to("#main-nav", {
//   scrollTrigger: {
//     trigger: "#invisibleScrollerTarget",
//     start: "top -96", // Adjust based on when you want the animation to start
//     toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
//   },
//   y: 96,
//   duration: .75,
//   ease: "power2.inOut",
// });

// CHALLENGE SHOW TEMPLATE ----------------------------------------------------------------------------------------------

// pin hero area
// ScrollTrigger.create({
//   trigger: '#tabs',
//   start: 'top 88',
//   end: '+=20000',
//   pin: '#tabs',
// });

// ScrollTrigger.create({
//   trigger: '#main',
//   start: 'top top',
//   pinSpacing: false,
//   pin: '#breadcrumbwithtags',
// });

// // pin challengesareas
// ScrollTrigger.create({
//   trigger: '#challengesMenu1',
//   start: 'top 62px',
//   end: '+=900',
//   pin: '#challengesMenu1',
// });

//change body color
// gsap.to("body", {
//   scrollTrigger: {
//     trigger: "#challengesMenu1",
//     start: "top 62px", // Adjust based on when you want the animation to start
//     toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
//   },
//   backgroundColor: "#25252e",
//   duration: 3,
//   ease: "power2.inOut"
// });

//change active challenge color
// gsap.to("#active1", {
//   scrollTrigger: {
//     trigger: "#challengesMenu1",
//     start: "top 62px", // Adjust based on when you want the animation to start
//     toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
//   },
//   duration: 3,
//   ease: "power2.inOut"
// });

// //fade inactive items1
// gsap.to(".inactive1", {
//   scrollTrigger: {
//     trigger: "#challengesMenu1",
//     start: "top 62px", // Adjust based on when you want the animation to start
//     toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
//   },
//   opacity: 0.4,
//   filter: "blur(10px)",
//   duration: 1,
//   ease: "power2.inOut"
// });

// //fade out hero
// gsap.to("#hero", {
//   scrollTrigger: {
//     trigger: "#hero",
//     start: "middle top", // Adjust based on when you want the animation to start
//     end: "bottom top",
//     scrub: true,
//   },
//   opacity: 0,
//   filter: "blur(10px)",
// });

//fade in introImage1
// gsap.to("#challengeIntroImage2", {
//   scrollTrigger: {
//     trigger: "#challengeIntroImage2",
//     start: "top bottom", // Adjust based on when you want the animation to start
//     end: "top middle",
//     scrub: true,
//   },
//   opacity: 1,
// });

//fade out introImage1
// gsap.to("#challengeIntroImage1", {
//   scrollTrigger: {
//     trigger: "#challengeIntroImage1",
//     start: "top top", // Adjust based on when you want the animation to start
//     end: "bottom middle",
//     scrub: true,
//   },
//   opacity: 0,
//   filter: "blur(10px)",
// });

// //fade out introImage2
// gsap.to("#challengeIntroImage2", {
//   scrollTrigger: {
//     trigger: "#challengeIntroImage2",
//     start: "top -100", // Adjust based on when you want the animation to start
//     end: "bottom middle",
//     scrub: true,
//   },
//   opacity: 0,
//   filter: "blur(10px)",
// });

// //fade out introImage3
// gsap.to("#challengeIntroImage3", {
//   scrollTrigger: {
//     trigger: "#challengeIntroImage3",
//     start: "top -100", // Adjust based on when you want the animation to start
//     end: "bottom middle",
//     scrub: true,
//   },
//   opacity: 0,
//   filter: "blur(10px)",
// });

// // pin MainFilters
// ScrollTrigger.create({
//   trigger: '#challengeContent',
//   start: 'top 160',
//   endTrigger: 'footer',
//   end: 'top bottom',
//   pin: '#MainFilters',
// });

// fade away hero image on scroll
// gsap.fromTo(
//   "#heroImage",
//   {opacity: 1, // Initial opacity (from value)
//   },
//   {
//     immediateRender: false,
//     opacity: 0, // Target opacity (to value)
//     duration: 3,
//     scrollTrigger: {
//       trigger: "#invisibleScrollerTarget",
//       start: "top -400",
//       toggleActions: "play none none reverse",
//       scrub: false,
//     },
//   }
// );

// pin hero quote
// ScrollTrigger.create({
//   trigger: '#invisibleScrollerTarget',
//   start: 'top top',
//   end: "+=1000",
//   pin: '#heroQuote',
//   markers: true
// });



//fade up the intro text
// gsap.to('#introText', {
//   scrollTrigger: {
//       trigger: "#initialQuote",
//       start: "bottom center",
//       end: "bottom top",
//       toggleActions: "play pause reverse reset",
//       markers: false,
//       scrub: false,
//   },
//   opacity: 1,
//   duration: 1,
// });

//pin introText for a while
// ScrollTrigger.create({
//   trigger: "#initialQuote",
//   start: "top top",
//   end: "+=1200",
//   pin: '#introText',
//   pinSpacing: false,
// });



// Select all resultCard elements
// const resultCards = document.querySelectorAll('.resultCard');

// Group resultCard elements by rows
// const rows = [];
// resultCards.forEach((card, index) => {
//     const rowIndex = Math.floor(index / 3);
//     if (!rows[rowIndex]) {
//         rows[rowIndex] = [];
//     }
//     rows[rowIndex].push(card);
// });

// Create the staggered fade-in animation for each row
// rows.forEach((row, rowIndex) => {
//     gsap.to(row, {
//         opacity: 1,
//         duration: 1,
//         stagger: {
//             each: 0.2, // Delay between each item in the row
//             from: 'start' // Start the animation from the first item in the row
//         },
//         scrollTrigger: {
//             trigger: row[0], // Use the first item in the row as the trigger
//             start: 'top 60%', // Start the animation when the row is 80% from the top of the viewport
//             end: 'bottom 50%', // End the animation when the row is 20% from the bottom of the viewport
//             scrub: true // Smoothly animate the items as the user scrolls
//         }
//     });
// });

// ScrollTrigger.create({
//   trigger: "#allContent",
//   start: "top 220",
//   end: "bottom bottom",
//   pin: '#pinnedFilters',
// });



// fade awway hero-area on scroll
// gsap.fromTo(
//   "#hero-area",
//   {opacity: 1, // Initial opacity (from value)
//   },
//   {
//     opacity: 0, // Target opacity (to value)
//     duration: .5,
//     scrollTrigger: {
//       trigger: "#introText",
//       start: "top top",
//       end: "bottom center",
//       toggleActions: "play none reverse reverse",
//       markers: false,
//       scrub: false,
//     },
//   }
// );

// // Pin breadcrumb
// ScrollTrigger.create({
//   trigger: "main",
//   start: "top top",
//   end: "bottom top",
//   markers: false,
//   pin: '#breadcrumb',
//   pinSpacing: false,
// });

// // Pin breadcrumb
// ScrollTrigger.create({
//   trigger: "main",
//   start: "top top",
//   end: "bottom top",
//   markers: false,
//   pin: '#breadcrumb',
//   pinSpacing: false,
// });

// gsap.to("#breadcrumb", {
//   scrollTrigger: {
//     trigger: "#allContent",
//     start: "top top", // Adjust based on when you want the animation to start
//     toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
//   },
//   y: 140, // Example animation property
//   duration: .75,
//   ease: "power2.inOut"
// });



// // // Pin filterssheet
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


// gsap.registerPlugin(Flip);

// const filterbar = document.querySelector("#filtersheet");

// function doFlip() {
//   // Get the initial state
//   const state = Flip.getState(filterbar);
//   filterbar.style.height = "100vh";
//   return Flip.from(state, {duration: 1, ease: "power1.inOut"});
// }

// var revealFilters = gsap.timeline({paused: true})
//       .to('#filterButton', {
//         backgroundColor: '#141852',
//         color: 'white'
//       }
//       )
//       .add(doFlip(), "-=50%")
//       .fromTo('.labelcontainer', 
//         { 
//         autoAlpha: 0,
//         left: 60
//         },
//         {
//           autoAlpha: 1,
//           duration: 1,
//           ease: "power3.out",
//           left: 0,
//           stagger: 0.1
//         }, "-=30%"
//       )
//       .fromTo('#filterButtons', {
//         y: 90,
//         autoAlpha: 0,
//       },
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 1,
//         ease: 'power1.out',
//       }, "-=130%")
//       ;

// document.getElementById("filterButton").onclick = () => revealFilters.play();
// const filterButtons = document.getElementsByClassName("form-checkbox");
// for (let i = 0; i < filterButtons.length; i++) {
//   filterButtons[i].onclick = () => {
//     gsap.to(window, { duration: 2, scrollTo: { y: "#challengeContent", offsetY: 150 } });
//     // revealFilters.reverse();
//   };
// }




  
//   // re-pin hero area
// ScrollTrigger.create({
//   Trigger: '#hero-area',
//   start: '+=1500',
//   end: '+=19500',
//   pin: '#hero-area',
// });

  






// fade/show title text on challenge.show


  