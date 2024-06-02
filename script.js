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





    document.addEventListener('DOMContentLoaded', () => {
        const section = document.querySelector('.circles');
        const detailBox = document.querySelector('.detail-box');
        const defaultDetail = "어피스오브팜은 도시에 사는 청년 1인가구가 파밍(farming)과 친환경 먹거리를 즐길 수 있도록 시작되었습니다. 마우스를 올려 확인해보세요!";
        const details = [
            "어피스오브팜은 건강한 먹거리를 직접 재배하고, 사람들과 공유할 수 있는 커뮤니티 공간이 됩니다. 봄과 가을에 모인 도시 농부들은 한 시즌동안 원하는 농작물을 심고 가꾸며 소통합니다. 직접 기른 농작물로 만든 요리와 함께 파밍에 대한 이야기가 오가는 곳. 이 텃밭 조각들은 함께 모여 도시에 그린 스페이스를 만듭니다.",
            "어피스오브팜은 집에서 벗어난 자연의 쉼터를 원하는 사람들에게 독립된 야외 공간을 제공합니다. 주어진 텃밭 조각을 원하는 대로 채워나가보세요. 반복되는 도시 라이프에서 벗어나 파밍이 주는 새로운 설렘을 즐길 수 있습니다.",
            "어피스오브팜은 매 시즌이 끝날 무렵 건강하게 자란 농작물을 사고 팔 수 있는 팜 마켓을 진행합니다. 건강하고 소소한 행복이 준비된 팜 마켓을 찾아주세요. 당근 하나도 괜찮아요. 누구든 환영이랍니다."
        ];
    
        const elements = document.querySelectorAll('.element');
        const detail = document.querySelector('.detail');
        detail.textContent = defaultDetail;
    // 아무 요소에 호버할 때 detail-box가 나타나도록 합니다.
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            detailBox.classList.add('show');
        });
    });
        // 각 element에 마우스를 호버할 때 detail-box의 텍스트를 변경합니다.
        elements.forEach((element, index) => {
            element.addEventListener('mouseover', () => {
                detail.textContent = details[index];
                detail.classList.add('show');
    
            });
        });
    });
    