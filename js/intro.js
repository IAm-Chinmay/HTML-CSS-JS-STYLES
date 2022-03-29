const tl = gsap.timeline({default : {  ease : "power1.out"}});

tl.to('.text',{y:"0%",duration:1 , stagger: "0.25"});
tl.to('.slider',{x:"-100%",duration:1 , delay:"1"})
tl.to('.intro',{y:"-100%",duration:0.5} , "-=1")
tl.fromto('h1',{opacity:0},{opacity:100,duration:1})
