const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


document.getElementById('toggle-team').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById('team-info').style.display = 'block'; // Mostra a seção da equipe
    this.style.display = 'none'; // Esconde o botão "Saiba Mais"
});

document.getElementById('close-team').addEventListener('click', function() {
    document.getElementById('team-info').style.display = 'none'; // Esconde a seção da equipe
    document.getElementById('toggle-team').style.display = 'block'; // Mostra o botão "Saiba Mais" novamente
});
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active'); // Remove a classe 'active' de todos
        if (index === currentIndex) {
            item.classList.add('active'); // Adiciona a classe 'active' ao item atual
        }
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

// Inicializa o carrossel
updateCarousel();


