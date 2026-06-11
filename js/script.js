document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Evita o envio padrão do formulário imediatamente
    event.preventDefault();

    // Captura dos dados digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const nascimento = document.getElementById('nascimento').value;
    const origem = document.getElementById('origem').value;
    const mensagem = document.getElementById('mensagem').value;
    const novidades = document.getElementById('novidades').checked ? "Sim" : "Não";

    // Formata a data para o padrão brasileiro (DD/MM/AAAA)
    const dataFormatada = nascimento.split('-').reverse().join('/');

    // Monta o HTML com os dados capturados para exibição
    const containerDados = document.getElementById('dadosInseridos');
    containerDados.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Data de Nascimento:</strong> ${dataFormatada}</p>
        <p><strong>Onde nos conheceu:</strong> ${origem}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
        <p><strong>Deseja receber novidades?</strong> ${novidades}</p>
    `;

    // Remove a classe 'hidden' para tornar a seção de confirmação visível
    const secaoConfirmacao = document.getElementById('confirmacaoSection');
    secaoConfirmacao.classList.remove('hidden');

    // Rola a página suavemente até a seção de confirmação
    secaoConfirmacao.scrollIntoView({ behavior: 'smooth' });
});

// Ação do botão final de Confirmar
document.getElementById('btnConfirmar').addEventListener('click', function() {
    // Aqui você faria o envio real dos dados (ex: via fetch/API)
    alert('Formulário enviado com sucesso! Obrigado pelo contato.');
    
    // Opcional: Reseta o formulário e esconde a área de confirmação após o envio
    document.getElementById('contactForm').reset();
    document.getElementById('confirmacaoSection').classList.add('hidden');
});