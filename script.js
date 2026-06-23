// Função de Boas-vindas (Nível Intermediário)
function boasVindas() {
    alert("Prepare-se para entrar no mundo da velocidade máxima! 🏎️💨");
}

// Lógica do Quiz (Nível Avançado)
function verificarResposta(resposta) {
    let resultado = document.getElementById("resultado-quiz");
    
    if (resposta === "Koenigsegg") {
        resultado.innerText = "💥 Correto! O Koenigsegg Jesko busca quebrar recordes passando dos 530 km/h.";
        resultado.style.color = "#00ff00"; // Verde para acerto
    } else if (resposta === "Bugatti") {
        resultado.innerText = "Quase! O Chiron foi o primeiro a passar de 490 km/h, mas o Jesko promete ser mais rápido.";
        resultado.style.color = "#ffaa00"; // Laranja para quase
    } else {
        resultado.innerText = "Errou! Embora um Fusca mexido seja rápido, ele não é o campeão de fábrica. 😂";
        resultado.style.color = "#ff3333"; // Vermelho para erro
    }
}

// Lógica do Formulário
function enviarFormulario(event) {
    event.preventDefault(); // Impede a página de recarregar
    alert("Inscrição realizada com sucesso! Você receberá os novos roncos de motor no seu e-mail.");
    document.getElementById("form-contato").reset(); // Limpa os campos
}
