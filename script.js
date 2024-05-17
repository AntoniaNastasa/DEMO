// script.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const videoContainers = document.querySelectorAll('.video-container');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');

            videoContainers.forEach(videoContainer => {
                if (videoContainer.id === videoId) {
                    videoContainer.classList.remove('hidden');
                } else {
                    videoContainer.classList.add('hidden');
                }
            });

            // Scroll to the video section
            document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
