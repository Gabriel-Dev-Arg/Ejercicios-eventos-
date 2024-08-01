
//ejercicio de calculadora 
document.addEventListener('DOMContentLoaded', function() {
    const cantidad1 = document.getElementById('cantidad1');
    const cantidad2 = document.getElementById('cantidad2');
    const tasaCambio = 1500; // 1 USD = 1500 PesosArs

    // Función para convertir de USD a Pesos
    function convertirUsdAPesos() {
        const valorUsd = parseFloat(cantidad1.value);
        cantidad2.value = (valorUsd * tasaCambio).toFixed(2);
    }

    // Función para convertir de Pesos a USD
    function convertirPesosAUsd() {
        const valorPesos = parseFloat(cantidad2.value);
        cantidad1.value = (valorPesos / tasaCambio).toFixed(2);
    }

    // Agregar eventos para los inputs
    cantidad1.addEventListener('input', convertirUsdAPesos);
    cantidad2.addEventListener('input', convertirPesosAUsd);

    // Inicializar la conversión
    convertirUsdAPesos();
});