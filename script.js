const progressBar = document.getElementById('progress-bar');
const windowHeight = window.innerHeight;
const fullHeight = document.body.clientHeight - windowHeight;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const progressHeight = (scrollTop / fullHeight) * 100;
    progressBar.style.width = `${progressHeight}%`;
});
