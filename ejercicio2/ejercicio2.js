document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('divisa');
    const tasaCambio = 1500; 
    app.className="d-flex flex-column gap-2"
    app.innerHTML = `
        <h1 class="text-center text-light">Convertidor de divisas</h1>
        <p class="text-center text-light">Bienvenido a tu aplicación de convertidor de divisas. Usa el menú de navegación para acceder a diferentes secciones.</p>
        <div class="container d-flex col-10 col-lg-8 justify-content-center mt-3 h-40 ">
            <div class="card col-12 col-lg-6 justify-content-center">
                <h3 class="card-title text-center">Convertidor de Divisas</h3>
                <form id="convertidor">
                    <div class="form-group fs-5">
                        <label for="cantidad1">Cantidad en USD</label>
                        <input type="number" class="form-control" id="cantidad1" value="1">
                    </div>
                    <div class="form-group fs-5">
                        <label for="cantidad2">Cantidad en Pesos</label>
                        <input type="number" class="form-control" id="cantidad2" value="1500">
                    </div>
                </form>
            </div>
        </div>
    `;

    const cantidad1 = document.getElementById('cantidad1');
    const cantidad2 = document.getElementById('cantidad2');


    function convertirUsdAPesos() {
        const valorUsd = parseFloat(cantidad1.value);
        cantidad2.value = (valorUsd * tasaCambio).toFixed(2);
    }


    function convertirPesosAUsd() {
        const valorPesos = parseFloat(cantidad2.value);
        cantidad1.value = (valorPesos / tasaCambio).toFixed(2);
    }


    cantidad1.addEventListener('input', convertirUsdAPesos);
    cantidad2.addEventListener('input', convertirPesosAUsd);


    convertirUsdAPesos();
});
