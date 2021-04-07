$(function() {
    var controller = new ScrollMagic.Controller();

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i],
            triggerHook: 'onLeave'
        })
        .setPin(slides[i], {pushFollowers: false})
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }

    var scene = new ScrollMagic.Scene({
        triggerElement: '#triangle',
        duration: '400%'
    })
    .setPin('#triangle', {pushFollowers: false})
    .setTween("#triangle", {rotation: 360, borderBottom: "172px solid #2F3E46"})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // triangle = new ScrollMagic.Scene({
    //     triggerElement: '#triangle'
    // })
    // .setPin('#triangle')
    // .addTo(controller);
});