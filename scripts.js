document.addEventListener('DOMContentLoaded', () => {
    const digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
        digit.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
    });
});
