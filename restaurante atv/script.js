//  pegamos os elementos do ID

const formulario = document.getElementById('formulario');

//adicionando o evento ao formulário
// o evento acontece quando o usuário clica no botão 
formulario.addEventListener('submit', function (event) {

    //impedir que pagina seja recarregada
    event.preventDefault();

    //pegando os valores digitados pelo usuário
    const nome = document.getElementById('nome').value;

    //pegando o preço do lanche selecionado pelo usuário
    // o value padrão o option é um string
    // termos que converter para number
    const preco = Number(document.getElementById('preco').value);

    // pegando a quantidade de lanches selecionados pelo usuário
    const quantidade = Number(document.getElementById('quantidade').value);

    //pegando o preço da bebida 
    const bebida = Number(document.getElementById('bebida').value);

    //calculando o valor total do pedido
    const totalanche = preco * quantidade;

    //calculando o valor total do pedido com a bebida
    const subtotal = totalanche + bebida;

    let desconto = 0;

    //verificando se tem desconto
    // iniciando o desconto com 0 
    if (subtotal > 50) {
        desconto = subtotal * 0.10;
    }

    //subtraindo o desconto do subtotal para calcular o total final
    const total = subtotal - desconto;

    //mostrando o resultado na tela
    const resultado = document.getElementById('resultado');

    // colocando informações na DIV
    resultado.innerHTML = `
        <h2>Resumo do Pedido</h2>

        <p><strong>Nome do Cliente:</strong> ${nome}</p>

        <p><strong>quantidade de lanches:</strong> ${subtotal.toFixed(2)}</p>

        <p><strong>Desconto:</strong> R$ ${desconto.toFixed(2)}</p>

        <h3>Total: R$ ${total.toFixed(2)}</h3>
    
    `;



    });
