const formulario = document.getElementById('formulario');
const massaInput = document.getElementById('massa');
const velocidadeInput = document.getElementById('velocidade');
const energiaCineticaSpan = document.getElementById('energia-cinetica');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const massa = parseFloat(massaInput.value);
    const velocidade = parseFloat(velocidadeInput.value);

    if (isNaN(massa) || isNaN(velocidade)) {
        alert('Digite valores válidos para massa e velocidade.');
        return;
    }

    const energiaCalculada = calcularEnergiaCalibre(massa, velocidade);
    const energiaArredondada = arredondarResultado(energiaCalculada);

    energiaCineticaSpan.textContent = energiaArredondada;
});

function calcularEnergiaCalibre(massa, velocidade) {
    const energia = (massa * velocidade * velocidade) / 30860;
    return energia;
}

function arredondarResultado(energia) {
    return Math.round(energia);
}
