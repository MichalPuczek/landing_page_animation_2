/* Gsap 3 animation tool : */
/* 1. Creating a timeline that alouds to chain together multiply animations */
/* -- defaults = precise how long each animation shoud last */
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

/* 2. Selecting elements from html in order to animate them */
/* -- First argument = element to be animated */
/* -- Second argument = specifies the type of animation, duration, stagger, delay */
tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
