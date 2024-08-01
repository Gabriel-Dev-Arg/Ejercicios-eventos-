let notas = [
    { id: 1, titulo: 'Nota 1', texto: 'Texto de la nota 1', realizada: false },
    { id: 2, titulo: 'Nota 2', texto: 'Texto de la nota 2', realizada: true },
    { id: 3, titulo: 'Nota 3', texto: 'Texto de la nota 1', realizada: false },
    { id: 4, titulo: 'Nota 4', texto: 'Texto de la nota 2', realizada: true },
    { id: 5, titulo: 'Nota 5', texto: 'Texto de la nota 1', realizada: false },
    { id: 6, titulo: 'Nota 6', texto: 'Texto de la nota 2', realizada: true }
];
let idGlobal = 6;

const contenedorNotas = document.getElementById('contenedorNotas');
const filtroTexto = document.getElementById('filtroTexto');
const flexSwitchCheckDefault = document.getElementById('flexSwitchCheckDefault');

function pintarNotas(filtro = '') {
    contenedorNotas.innerHTML = '';

    const notasFiltradas = filtrarNotas(notas, filtroTexto.value, filtro);

    if (notasFiltradas.length === 0) {
        contenedorNotas.innerHTML = '<p class="text-center">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notasFiltradas.forEach(nota => {
        const notaCard = document.createElement('div');
        notaCard.classList.add('col-md-4'); // columna
        notaCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                <div class="d-flex gap-1">
                <input type="checkbox" ${nota.realizada ? 'checked' : ''} onClick="marcarRealizada(${nota.id})">
                    <h5 class="card-title">${nota.titulo}</h5></div>
                    <p class="card-text">${nota.texto}</p>
                    <button class="btn btn-danger mt-2" onClick="borrarNota(${nota.id})">Borrar nota</button>
                </div>
            </div>
        `;
        contenedorNotas.appendChild(notaCard);
    });
}

function agregarNota() {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

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
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
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

alternarRealizadas();  // Inicializar mostrando las notas según el estado inicial del switch
