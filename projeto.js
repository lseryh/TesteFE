// Mostrar telefone ao clicar
function verTelefone(id) {
    document.getElementById(id).textContent = "(21) 99927-6614";
}

// Enviar mensagem e exibir alerta
function enviarMensagem() {
    alert('Mensagem enviada com sucesso!');
}

// Calcular regra de 3
function calcularRegra3() {
    let valor1 = parseFloat(document.getElementById('input1').value);
    let valor2 = parseFloat(document.getElementById('input2').value);
    let valor3 = parseFloat(document.getElementById('input3').value);

    if (valor1 && valor2 && valor3) {
        let resultado = (valor3 * valor2) / valor1;
        document.getElementById('resultado').textContent = resultado.toFixed(2);
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

// Abrir modal
function abrirModal() {
    document.getElementById('modal').style.display = "block";
}

// Fechar modal
function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

// Baixar imagem
function baixarImagem() {
    html2canvas(document.querySelector(".section-5")).then(canvas => {
        let link = document.createElement("a");
        link.download = "imovel-guide.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Adicionar máscara de CPF e Telefone
document.getElementById('cpf').addEventListener('input', function(e) {
    let cpf = e.target.value.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = cpf;
});

document.getElementById('telefone').addEventListener('input', function(e) {
    let telefone = e.target.value.replace(/\D/g, "");
    telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
    telefone = telefone.replace(/(\d{4})(\d)/, "$1-$2");
    e.target.value = telefone;
});
