document.addEventListener('DOMContentLoaded', function() {
    // paso 1 : llamamos al documento con la propiedad eventListener, para que el condetenedor sea escuchado,
    //paso 2:

    let app = document.getElementById('formulario');
    app.innerHTML = `
    <h1 class="text-center text-light">App calculadora de peso</h1>
        <p class="text-center text-light">Bienvenido a tu aplicación de calculadora. Usa el menú de navegación para acceder a diferentes secciones.</p>
        <div class="container d-flex col-12 col-lg-8 justify-content-center mt-5 h-40">
            <div class="card col-10 col-lg-6 justify-content-around">
                <h3 class="card-title text-center">Calculadora de IMC</h3>
                <form id="formulario">
                    <div class="form-group">
                        <label for="estatura">Estatura (cm)</label>
                        <input type="number" class="form-control" id="estatura" placeholder="Introduce tu estatura en centímetros">
                    </div>
                    <div class="form-group">
                        <label for="peso">Peso (kg)</label>
                        <input type="number" class="form-control" id="peso" placeholder="Introduce tu peso en kilogramos">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Calcular IMC</button>
                </form>
                <label class="mt-4 col-4 ms-auto" id="resultado" style="display: none;">
                    <label class="text-center ">Tu IMC es: <span id="valor-imc"></span></label>
                </label>
            </div>
        </div>
    `;

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

    estatura = parseFloat(estatura) / 100; 
    peso = parseFloat(peso);

    let imc = peso / (estatura * estatura);
    imc = imc.toFixed(2); 

    document.getElementById('valor-imc').textContent = imc;
    document.getElementById('resultado').style.display = 'block';
}
