document.addEventListener("DOMContentLoaded", function() {
    const clickableDivs = document.querySelectorAll('.name');

    clickableDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            window.location.href = './index.html'; // 클릭했을 때 이동할 링크
        });
    });
});