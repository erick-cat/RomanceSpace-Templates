// love_letter interactive script
// No user data is processed here — purely UI enhancements.

(function () {
    // Optional: add subtle entrance animation
    document.addEventListener('DOMContentLoaded', () => {
        const paper = document.querySelector('.letter-paper');
        if (paper) {
            paper.style.opacity = '0';
            paper.style.transform = 'translateY(20px)';
            paper.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    paper.style.opacity = '1';
                    paper.style.transform = 'translateY(0)';
                });
            });
        }
    });
})();
