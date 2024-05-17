// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const videos = document.querySelectorAll('iframe');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');

            videos.forEach(video => {
                if (video.id === videoId) {
                    video.classList.remove('hidden');
                } else {
                    video.classList.add('hidden');
                }
            });
        });
    });
});
