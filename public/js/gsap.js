//introduce the main image and hero text
var tl = gsap.timeline({});

tl.to('#hero-area',{
    duration: 2, opacity: 1,
});
tl.to('#counting',{
    duration: 1, delay: 0, opacity: 1,
},
);
tl.to('#itstime',{
    duration: 3, delay: 3, opacity: 1,
},
    "-=1.75"
);


//fade out the hero text on scroll
gsap.to('#herotext', {
    scrollTrigger: {
    trigger: "#intro",
    start: "top bottom",
    end: "top center",
    toggleActions: "restart none reverse reset",
    scrub: true,
    // markers: true,
    },
    duration: 3,
    opacity: 0
});
gsap.to('#earth', {
    scrollTrigger: {
    trigger: "#invisibleScrollController",
    start: "top top",
    end: "bottom top",
    toggleActions: "restart none reverse reset",
    scrub: true,
    // markers: true,
    },
    duration: 2,
    opacity: 0.3
});

// fade up intro text
gsap.to('#introprose', {
    scrollTrigger: {
    trigger: "#intro",
    start: "150",
    scrub: true,
    // markers: true,
    },
    duration: 2,
    opacity: 1
});

//fade in the themes text
gsap.to('.themetext', {
    scrollTrigger: {
        trigger: ".themetext",
        start: "top center",
        scrub: false,
    },
    duration: 4,
    opacity: 1
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
  
  