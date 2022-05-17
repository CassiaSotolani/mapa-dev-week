const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', function() {

        // pegando o valor do id de cada personagem
        const idPersonagemSelecionado = personagem.attributes.id.value;

        if (idPersonagemSelecionado === 'ultron') {
            return;
        }

        // pegando personagem que já tem a classe selecionado
        const personagemSelecionado = document.querySelector('.selecionado');
        // removendo classe selecionado do personagem selecionado
        personagemSelecionado.classList.remove('selecionado');
        // adicionando classe selecionado no personagem que o mouse passar
        personagem.classList.add('selecionado');

        // pegando imagem do jogador-1
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        // substituindo a imagem, trocando o caminho da imagem do jogador-1
        imagemJogador1.src = `./src/imagens/${idPersonagemSelecionado}.png`;

        // pegando nome antigo do personagem
        const nomePersonagem = document.getElementById('nome-personagem');
        // pegando nome atual do personagem
        const nomeSelecionado = personagem.getAttribute('data-name');
        // trocando nome antigo pelo novo
        nomePersonagem.textContent = nomeSelecionado;

    });
});