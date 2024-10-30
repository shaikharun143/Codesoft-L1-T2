document.querySelectorAll('.project-list-container').forEach(container => {
    container.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-20px)';
    });

    container.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});



document.querySelectorAll('.Experience-bg-list').forEach(container => {
    container.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-20px)';
    });

    container.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
