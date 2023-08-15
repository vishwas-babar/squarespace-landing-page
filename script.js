var tl=gsap.timeline();

gsap.from(" #middle-nav h3 ",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.1

})

gsap.from("#nav img",{
    x:-200,
    duration:1,
    opacity:0,
    stagger:0.1
})

tl.from(" #right-nav button, #right-nav h3",{
    x:200,
    duration:1,
    opacity:0,
    stagger:0.2
    
})


tl.from("main h1",{
    opacity:0,
    y:100,
    duration:1.5,
    stagger:0.2
})

tl.from("main>img",{
    opacity:0,
    stagger:0.3
})

tl.from("main>h4",{
    opacity:0,
    y:20,
    duration:0.5
})

tl.to("main>h4",{
    y:8,
    yoyo:true,
    repeat:-1,
    duration:1
})