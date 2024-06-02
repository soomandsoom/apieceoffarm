fetch('logo-group.svg')
    .then(response => response.text())
    .then(data => {
        document.getElementById('svg-container').innerHTML = data;
    });


    
document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('.intro');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
                else {
                    entry.target.classList.remove('visible');
                }
            });
        });
    
        sections.forEach(section => {
            observer.observe(section);
        });
    });



    
// 스크롤 막기 함수
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// 스크롤 허용 함수
function enableScroll() {
    document.body.style.overflow = '';
}

    document.addEventListener('DOMContentLoaded', (event) => {
        const clickableDiv = document.querySelector('.mobile-menu');
        const hiddenDiv = document.querySelector('.menu-box');
        const bg = document.querySelector('.mobile-background');
        const closebutton = document.querySelector('.close');

        clickableDiv.addEventListener('click', () => {
            clickableDiv.classList.toggle('tilted');
            hiddenDiv.classList.add('visible');
            hiddenDiv.classList.remove('hidden');

            bg.classList.add('visible');

            disableScroll();
        });

        closebutton.addEventListener('click', () => {
            hiddenDiv.classList.remove('visible');
            hiddenDiv.classList.add('hidden');
            clickableDiv.classList.remove('tilted');
            bg.classList.remove('visible');

            enableScroll();
        });

        bg.addEventListener('click', () => {
            hiddenDiv.classList.remove('visible');
            hiddenDiv.classList.add('hidden');
            clickableDiv.classList.remove('tilted');
            bg.classList.remove('visible');

            enableScroll();
        });
    });




    document.addEventListener("DOMContentLoaded", function() {
        const targetSection = document.getElementById('text');
        const animatedElement = document.getElementById('drawing');
    
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // 섹션이 50% 보이면 트리거
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatedElement.classList.add('visible');
                } else {
                    animatedElement.classList.remove('visible');
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        observer.observe(targetSection);
    });

    document.addEventListener("DOMContentLoaded", function() {
        const targetSection = document.getElementById('text2');
        const animatedElement = document.getElementById('drawing2');
    
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // 섹션이 50% 보이면 트리거
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatedElement.classList.add('visible');
                } else {
                    animatedElement.classList.remove('visible');
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        observer.observe(targetSection);
    });


    document.addEventListener("DOMContentLoaded", function() {
        const targetSection = document.getElementById('set');
    
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    targetSection.classList.add('rotate');
                } else {
                    targetSection.classList.remove('rotate');
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        observer.observe(targetSection);
    });

    document.addEventListener("DOMContentLoaded", function() {
        const targetSection = document.getElementById('set2');
    
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    targetSection.classList.add('rotate');
                } else {
                    targetSection.classList.remove('rotate');
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        observer.observe(targetSection);
    });





    document.addEventListener("DOMContentLoaded", function() {
        const targetSection = document.getElementById('sec2');
    
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    targetSection.classList.add('visible');
                } else {
                    targetSection.classList.remove('visible');
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        observer.observe(targetSection);
    });





















