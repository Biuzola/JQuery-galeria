$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#cancel').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault(); 
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        if (enderecoDaNovaImagem.trim() === "") {
            alert("Por favor, insira um endereço de imagem válido.");
            return;
        }
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" alt="Imagem adicionada">`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });
});
