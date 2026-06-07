document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    if (window.scrollY>100){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});

const btns = document.querySelectorAll('.primary-cta-btn, .sticky-cta-btn, .pricing-cta-btn, .final-cta-btn1, .mobile-sticky-cta');
    btns.forEach(btn => btn.addEventListener('click', () => {
    window.open('https://calendly.com/sj-radzdesigns/30min', '_blank');
}));

document.querySelector('.final-cta-btn2').
    addEventListener('click', () => {
    window.open('mailto:hello@radzdesigns.com', '_blank');
});
document.querySelector('.work-link-cta-btn1').
    addEventListener('click', () => {
    window.open('https://vista-sable-nine.vercel.app', '_blank');
});
document.querySelector('.work-link-cta-btn2').addEventListener('click', () => {
    window.open('https://mark-wayne.vercel.app', '_blank');
});

document.querySelector('.work-link-cta-btn3').addEventListener('click', () => {
    window.open('https://jessica-parker.vercel.app', '_blank');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.2, rootMargin: '0px 0px -50px 0px'});

const section = document.querySelectorAll('section');
    section.forEach(el=> observer.observe(el));