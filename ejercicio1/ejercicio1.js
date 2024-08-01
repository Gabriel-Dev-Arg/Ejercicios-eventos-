document.addEventListener('DOMContentLoaded', function() {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        calcularIMC();
    });
});

function calcularIMC() {
    let estatura = document.getElementById('estatura').value;
    let peso = document.getElementById('peso').value;
    
    if(estatura === '' || peso === '') {
        alert('Por favor, introduce todos los valores');
        return;
    }

    estatura = parseFloat(estatura) / 100; // Convertir cm a metros
    peso = parseFloat(peso);

    let imc = peso / (estatura * estatura);
    imc = imc.toFixed(2); // Redondear a 2 decimales

    document.getElementById('valor-imc').textContent = imc;
    document.getElementById('resultado').style.display = 'block';
}