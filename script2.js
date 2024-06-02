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
      threshold: 0.2 // 50% visible
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




document.addEventListener('DOMContentLoaded', () => {
    const section2 = document.querySelector('#section2');
    const grad = document.querySelector('.grad');
    const options = {
        root: null, // viewport
        threshold: 0.6// 10% visible
    };

    const originalGradient = 'linear-gradient(to bottom, white, transparent)';
    const originalBackgroundColor = document.body.style.backgroundColor;

    const section2Color = '#007578'; // new color for section3
    const section2Gradient = 'linear-gradient(to bottom, #007578, transparent)';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target.id === 'section2' && entry.isIntersecting) {
                document.body.style.backgroundColor = section2Color;
                grad.style.background = section2Gradient;
            } else {
                document.body.style.backgroundColor = originalBackgroundColor;
                grad.style.background = originalGradient;
            }
        });
    }, options);

    observer.observe(section2);

    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1000) {
            options.threshold = 0.8; // 윈도우 너비가 768px 이하일 때 threshold 값을 0.4로 변경
        } else {
            options.threshold = 0.6; // 윈도우 너비가 768px 초과일 때 threshold 값을 0.6으로 변경
        }
        // IntersectionObserver를 재시작하여 새로운 threshold 값을 적용합니다.
        observer.disconnect();
        observer.observe(section2);
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const section4 = document.querySelector('#section4');
    const grad = document.querySelector('.grad');
    const options = {
        root: null, // viewport
        threshold: 0.6// 10% visible
    };

    const originalGradient = 'linear-gradient(to bottom, white, transparent)';
    const originalBackgroundColor = document.body.style.backgroundColor;

    const section4Color = '#007578'; // new color for section3
    const section4Gradient = 'linear-gradient(to bottom, #007578, transparent)';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target.id === 'section4' && entry.isIntersecting) {
                document.body.style.backgroundColor = section4Color;
                grad.style.background = section4Gradient;
            } else {
                document.body.style.backgroundColor = originalBackgroundColor;
                grad.style.background = originalGradient;
            }
        });
    }, options);

    observer.observe(section4);

});
