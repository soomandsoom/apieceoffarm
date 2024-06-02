// script.js
document.addEventListener("DOMContentLoaded", function() {
    const targetSection = document.getElementById('section1');
    const animatedElement = document.getElementById('svg-container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // 섹션이 50% 보이면 트리거
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('move');
            } else {
                animatedElement.classList.remove('move');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(targetSection);
});



document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const grad = document.querySelector('.grad');
    const options = {
      root: null, // viewport
      threshold: 0.3 // 50% visible
    };

    const originalGradient = 'linear-gradient(to bottom, white, transparent)'
    const originalBackgroundColor = document.body.style.backgroundColor;

    const sectionColors = {
      section1: '#f2e3ff' // lightcoral
    };

    const gradientColors = {
        section1: 'linear-gradient(to bottom, #f2e3ff, transparent)'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.body.style.backgroundColor = sectionColors[entry.target.id];
            grad.style.background = gradientColors[entry.target.id];
        } else {
            document.body.style.backgroundColor = originalBackgroundColor;
            grad.style.background = originalGradient;
        }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});




// document.addEventListener('DOMContentLoaded', () => {
//     const section3 = document.querySelector('#section3');
//     const grad = document.querySelector('.grad');
//     const options = {
//         root: null, // viewport
//         threshold: 0.8 // 10% visible
//     };

//     const originalGradient = 'linear-gradient(to bottom, white, transparent)';
//     const originalBackgroundColor = document.body.style.backgroundColor;

//     const section3Color = '#007578'; // new color for section3
//     const section3Gradient = 'linear-gradient(to bottom, #007578, transparent)';

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.target.id === 'section3' && entry.isIntersecting) {
//                 document.body.style.backgroundColor = section3Color;
//                 grad.style.background = section3Gradient;
//             } else {
//                 document.body.style.backgroundColor = originalBackgroundColor;
//                 grad.style.background = originalGradient;
//             }
//         });
//     }, options);

//     observer.observe(section3);
// });
