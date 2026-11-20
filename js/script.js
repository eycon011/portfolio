/* ==========================================================================
   1. SELEÇÃO DE ELEMENTOS DO DOM
   ========================================================================== */
const botoesFiltro = document.querySelectorAll('.filter-btn');
const cardsProjetos = document.querySelectorAll('.project-card');

/* ==========================================================================
   2. FILTRO INTERATIVO DE PROJETOS (JAVA, PYTHON, WEB)
   ========================================================================== */
botoesFiltro.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e adiciona apenas no clicado
        botoesFiltro.forEach((btn) => btn.classList.remove('active'));
        botao.classList.add('active');

        // Captura o valor do atributo data-filter do botão clicado
        const tecnologiaSelecionada = botao.dataset.filter;

        // Percorre todos os cards de projeto para decidir qual mostrar ou esconder
        cardsProjetos.forEach((card) => {
            const techDoCard = card.dataset.tech;

            /* --------------------------------------------------------------
               SEU TREINO DE LÓGICA:
               Complete a condição abaixo:
               SE tecnologiaSelecionada for igual a 'todos' OU 
               tecnologiaSelecionada for igual a techDoCard -> remova 'hidden'
               SENÃO -> adicione 'hidden' usando card.classList.add('hidden')
               -------------------------------------------------------------- */
            if (tecnologiaSelecionada === 'todos' || tecnologiaSelecionada === techDoCard) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});