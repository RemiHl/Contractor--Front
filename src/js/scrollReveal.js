export const scrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
};

export const initScrollReveal = () => {
    window.addEventListener('scroll', scrollReveal);

    scrollReveal();
};