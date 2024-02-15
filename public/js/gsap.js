//introduce the hero text
var tl = gsap.timeline({});

gsap.to('#hero-area',{
    duration: 5, opacity: 1,
});
tl.to('#counting',{
    duration: 5, delay: 2, opacity: 1,
},
);
gsap.to('#itstime',{
    duration: 5, opacity: 1,
},
    "-=2.75"
);
// tl.from('header',{
//     duration: 3.5, opacity: 0,
// },
// );
// tl.from('#initiatives',{
//     duration: 3.5, opacity: 0,
// },
// );

//fade out the hero text on scroll
gsap.to('#herotext', {
    scrollTrigger: {
    trigger: "#invisibleScrollController",
    start: "top top",
    end: "bottom top",
    toggleActions: "restart none reverse reset",
    scrub: false,
    // markers: true,
    },
    opacity: 0
});
gsap.to('#earth', {
    scrollTrigger: {
    trigger: "#invisibleScrollController",
    start: "top top",
    end: "bottom top",
    toggleActions: "restart none reverse reset",
    scrub: false,
    // markers: true,
    },
    opacity: 0.3
});
gsap.to('#initiatives', {
    scrollTrigger: {
    trigger: "#invisibleScrollController",
    start: "top -40%",
    end: "bottom -50%",
    toggleActions: "restart reset reverse reset",
    scrub: false,
    // markers: true,
    },
    opacity: 1
});
gsap.to('#initiatives', {
    scrollTrigger: {
    trigger: "#invisibleScrollController",
    start: "bottom -10%",
    end: "bottom -20%",
    toggleActions: "restart reset reverse reset",
    scrub: false,
    // markers: true,
    },
    opacity: 0
});


// //pin and unpin the donateBanner
// gsap.to("#donateBanner", {
//     scrollTrigger: {
//       trigger: "#donate",
//       start: "bottom bottom",
//       end: "top top",
//       pin: true,
//       pinSpacing: false,
//       scrub: true
//     }
//   });
  
  