document.addEventListener('DOMContentLoaded', function() {
    const clientGroups = document.querySelector('.client-groups');
    const clientGroupItems = clientGroups.querySelectorAll('.client-group');
    const clientGroupWidth = clientGroupItems[0].offsetWidth;
    let index = 0;

    function goToSlide(slideIndex) {
        index = slideIndex;
        clientGroups.style.transform = `translateX(-${index * clientGroupWidth}px)`;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    document.querySelector('.prev-button').addEventListener('click', function() {
        index = (index === 0) ? clientGroupItems.length - 1 : index - 1;
        goToSlide(index);
    });

    document.querySelector('.next-button').addEventListener('click', function() {
        index = (index === clientGroupItems.length - 1) ? 0 : index + 1;
        goToSlide(index);
    });

    const dotsContainer = document.querySelector('.dots-container');
    clientGroupItems.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const aboutListItems = document.querySelectorAll('.about-list li');

    aboutListItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, (index + 1) * 500); // Appliquer un délai progressif
    });
});
        