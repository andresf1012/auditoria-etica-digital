// Configuración del Observador de Scroll
const options = {
    threshold: 0.5 // Se activa cuando vemos la mitad de la sección
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
            const scene = entry.target.getAttribute('data-scene');
            handleVisualChange(scene);
        }
    });
}, options);

// Activamos el observador para cada sección
document.querySelectorAll('.step').forEach(s => observer.observe(s));

// Función para cambiar el "ambiente" de la página
function handleVisualChange(scene) {
    const node = document.getElementById('visual-node');
    
    switch(scene) {
        case 'intro':
            node.style.backgroundColor = '#00f2ea'; // Cian TikTok
            node.style.transform = 'scale(1) rotate(0deg)';
            node.style.borderRadius = '50%';
            break;
        case 'audit':
            node.style.backgroundColor = '#ff0050'; // Magenta Alerta
            node.style.transform = 'scale(1.8) rotate(45deg)';
            node.style.borderRadius = '20%'; // Se vuelve más rígido
            break;
        case 'surveillance':
            node.style.backgroundColor = '#ffcc00'; // Amarillo Vigilancia
            node.style.transform = 'scale(0.5)';
            node.style.filter = 'blur(20px)';
            break;
        case 'ethics':
            node.style.backgroundColor = '#ffffff'; // Blanco Claridad
            node.style.transform = 'scale(2)';
            node.style.filter = 'blur(120px)';
            break;
    }
}
