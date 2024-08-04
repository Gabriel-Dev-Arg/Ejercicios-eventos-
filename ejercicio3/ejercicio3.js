let notas = [
    { id: 1, titulo: 'Nota 1', texto: 'Texto de la nota 1', realizada: false },
    { id: 2, titulo: 'Nota 2', texto: 'Texto de la nota 2', realizada: true },
    { id: 3, titulo: 'Nota 3', texto: 'Texto de la nota 1', realizada: false },
    { id: 4, titulo: 'Nota 4', texto: 'Texto de la nota 2', realizada: true },
    { id: 5, titulo: 'Nota 5', texto: 'Texto de la nota 1', realizada: false },
    { id: 6, titulo: 'Nota 6', texto: 'Texto de la nota 2', realizada: true }
];
let idGlobal = 6;

const app = document.getElementById('notas');

app.innerHTML = `
    <h1 class="text-center text-light">Aplicación de Notas</h1>
    <p class="text-center text-light">Bienvenido a tu aplicación de notas. Usa el menú de navegación para acceder a diferentes secciones.</p>
    <div class="container mt-4 d-flex flex-column align-items-center flex-wrap align-content-center justify-content-between">
        <div class="d-flex flex-column col-8 col-lg-6">
            <div class="form-group">
                <input type="text" id="filtroTexto" class="form-control" placeholder="Filtrar por texto">
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Mostrar realizadas</label>
            </div>
            <div class="form-group mt-4">
                <input type="text" id="titulo" class="form-control" placeholder="Título">
            </div>
            <div class="form-group">
                <textarea id="texto" class="form-control" placeholder="Texto"></textarea>
            </div>
            <div class="col-12 justify-content-between d-flex">
                <button class="btn btn-primary" id="guardarBtn">Guardar</button>
                <button class="btn btn-secondary" id="limpiarBtn">Limpiar</button>
            </div>
        </div>
        <div id="contenedorNotas" class="mt-4 d-flex gap-3 row justify-content-center col-10"></div>
    </div>
`;

const contenedorNotas = document.getElementById('contenedorNotas');
const filtroTexto = document.getElementById('filtroTexto');
const flexSwitchCheckDefault = document.getElementById('flexSwitchCheckDefault');
const guardarBtn = document.getElementById('guardarBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const tituloInput = document.getElementById('titulo');
const textoInput = document.getElementById('texto');

function pintarNotas(filtro = '') {
    contenedorNotas.innerHTML = '';

    const notasFiltradas = filtrarNotas(notas, filtroTexto.value, filtro);

    if (notasFiltradas.length === 0) {
        contenedorNotas.innerHTML = '<p class="text-center">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notasFiltradas.forEach(nota => {
        const notaCard = document.createElement('div');
        notaCard.classList.add('col-md-4'); 
        notaCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex gap-1">
                        <input type="checkbox" ${nota.realizada ? 'checked' : ''} onClick="marcarRealizada(${nota.id})">
                        <h5 class="card-title">${nota.titulo}</h5>
                    </div>
                    <p class="card-text">${nota.texto}</p>
                    <button class="btn btn-danger mt-2" onClick="borrarNota(${nota.id})">Borrar nota</button>
                </div>
            </div>
        `;
        contenedorNotas.appendChild(notaCard);
    });
}

function agregarNota() {
    const titulo = tituloInput.value;
    const texto = textoInput.value;

    if (!titulo || !texto) {
        alert('Por favor, completa todos los campos');
        return;
    }

    idGlobal++;
    const nuevaNota = { id: idGlobal, titulo, texto, realizada: false };
    notas.push(nuevaNota);

    pintarNotas();
    limpiarCampos();
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}

function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas();
    }
}

function limpiarCampos() {
    tituloInput.value = '';
    textoInput.value = '';
}

function filtrarNotas(notas, texto, filtro) {
    let notasFiltradas = notas;

    if (texto) {
        notasFiltradas = notasFiltradas.filter(nota => 
            nota.titulo.includes(texto) || nota.texto.includes(texto)
        );
    }

    if (filtro === 'realizadas') {
        notasFiltradas = notasFiltradas.filter(nota => nota.realizada);
    } else if (filtro === 'noRealizadas') {
        notasFiltradas = notasFiltradas.filter(nota => !nota.realizada);
    }

    return notasFiltradas;
}

function alternarRealizadas() {
    if (flexSwitchCheckDefault.checked) {
        pintarNotas('realizadas');
    } else {
        pintarNotas('noRealizadas');
    }
}

filtroTexto.addEventListener('input', () => alternarRealizadas());
guardarBtn.addEventListener('click', agregarNota);
limpiarBtn.addEventListener('click', limpiarCampos);

alternarRealizadas();  
