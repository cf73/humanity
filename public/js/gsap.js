gsap.registerPlugin(ScrollTrigger);

//introduce the main image and hero text
// var tl = gsap.timeline({});

// tl.to('#hero-area',{
//     duration: 1, opacity: 1,
// });
// tl.to('#counting',{
//     duration: .4, delay: 0, opacity: 1,
// },

// );
// tl.to('#itstime',{
//     duration: .4, delay: .8, opacity: 1,
// },

// );


//fade out the hero text on scroll
tl.to('#herotext', {
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
        trigger: ".theme",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
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
  
gsap.to('.take-action-now', {
    scrollTrigger: {
        trigger: ".related-partner-initiatives",
        start: "30",
        toggleActions: "restart none reverse reset",
        scrub: true,
    },
    opacity: 1,
    duration: 1,
    translateY: -40,
});

gsap.to('.actionExcerpt', {
    scrollTrigger: {
        trigger: ".related-partner-initiatives",
        start: "top center",
        end: "top top",
        toggleActions: "restart none reverse reset",
        scrub: true,
    },
    delay: 100,
    opacity: 1,
    translateY: -40,
});