gsap.timeline()
    .to("#dimmer", {delay: 1, opacity:1, duration:5, ease:"expo.inOut"})
    .fromTo("#initialQuote", {opacity: 0}, {opacity: 1, duration:1, ease:"expo.inOut"}, "-=225%")
    .from("#openNav", {opacity:0, duration:3, ease:"expo.inOut"}, "-=50%")
    ;

    