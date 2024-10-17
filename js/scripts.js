

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll('.project-item');

    function showItemsOnScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        projectItems.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', showItemsOnScroll);
    showItemsOnScroll();
});

// Seleciona elementos do modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeModal = document.getElementsByClassName("close")[0];

// Função para abrir a imagem no modal
document.querySelectorAll(".project-item img").forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
});

// Função para fechar o modal ao clicar no 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Fecha o modal ao clicar fora da imagem
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll('.project-item');

    function showItemsOnScroll() {
        const triggerBottom = window.innerHeight / 5 * 4; // Ponto de gatilho para exibir itens

        projectItems.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                item.classList.add('show'); // Adiciona a classe show
            } else {
                item.classList.remove('show'); // Remove a classe show
            }
        });
    }

    window.addEventListener('scroll', showItemsOnScroll);
    showItemsOnScroll(); // Chama a função ao carregar a página
});

