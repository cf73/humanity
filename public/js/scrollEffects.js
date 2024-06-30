gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    effects: true
})
}