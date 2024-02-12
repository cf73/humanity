//introduce the hero text
var tl = gsap.timeline({});

tl.from('#earth',{
    duration: 10, opacity: 0,
});
tl.from('#counting',{
    duration: 5, opacity: 0,
},
    "-=6.5"
);
tl.from('#itstime',{
    duration: 3.5, opacity: 0,
},
    "-=3.5"
);
tl.from('header',{
    duration: 3.5, opacity: 0,
},
);
tl.from('#initiatives',{
    duration: 3.5, opacity: 0,
},
);

//pin and unpin the donateBanner
gsap.to("#donateBanner", {
    scrollTrigger: {
      trigger: "#donate",
      start: "bottom bottom",
      end: "top top",
      pin: true,
      pinSpacing: false,
      scrub: true
    }
  });
  
  