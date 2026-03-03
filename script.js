const observerOptions = {
    threshold: 0.6 // Se activa cuando el 60% de la sección es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
            const scene = entry.target.getAttribute('data-scene');
            updateBackground(scene);
        } else {
            entry.target.classList.remove('is-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.step').forEach(section => {
    observer.observe(section);
});

function updateBackground(scene) {
    const visual = document.getElementById('visual-element');
    const container = document.getElementById('background-container');

    if (scene === 'intro') {
        visual.style.backgroundColor = '#58a6ff';
        container.style.backgroundColor = '#0d1117';
    } else if (scene === 'data') {
        visual.style.backgroundColor = '#f85149'; // Rojo alerta
        visual.style.transform = 'scale(1.5)';
    } else if (scene === 'dilemma') {
        visual.style.backgroundColor = '#d2a8ff'; // Morado
        visual.style.borderRadius = '0%'; // Cambia de forma
    }
}
