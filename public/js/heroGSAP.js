gsap.timeline()
    .from("#counting", {delay:2, opacity:0, duration:2, ease:"expo.inOut"})
    .from("#itstime", {opacity:0, duration:2, ease:"expo.inOut"});
