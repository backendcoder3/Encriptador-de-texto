// Variables
const inputTexto = document.querySelector('.main-input-text');
const sectionResultado = document.querySelector('.main-section-desencriptador');
const inputHandler = () => inputTexto.value = inputTexto.value.toLowerCase();

// Transformación de texto a minúsculas en tiempo real
document.querySelectorAll('.main-input-text').forEach(input => input.addEventListener('input', inputHandler));

// Función general para encriptar/desencriptar
function transformarTexto(tipo) {
    const textoOriginal = inputTexto.value;

    if (!textoOriginal) {
        alert("Por favor, ingresa un texto para transformar.");
        return;
    }

    const reglas = {
        encriptar: [
            [/e/g, "enter"],
            [/i/g, "imes"],
            [/a/g, "ai"],
            [/o/g, "ober"],
            [/u/g, "ufat"]
        ],
        desencriptar: [
            [/enter/g, "e"],
            [/imes/g, "i"],
            [/ai/g, "a"],
            [/ober/g, "o"],
            [/ufat/g, "u"]
        ]
    };

    let textoTransformado = textoOriginal;
    reglas[tipo].forEach(([regex, replacement]) => {
        textoTransformado = textoTransformado.replace(regex, replacement);
    });

    sectionResultado.innerHTML = `
        <div class="main-section-desencriptador-dev">
            <p class="main-section-desencriptador-dev-text">${textoTransformado}</p>
            <button class="main-section-desencriptador-boton-copiar" onclick="copiarTexto()">COPIAR</button>
        </div>
    `;
}

// Botones de encriptar y desencriptar
function botonEncriptar() {
    transformarTexto('encriptar');
}

function botonDesencriptar() {
    transformarTexto('desencriptar');
}

// Función para copiar al portapapeles
function copiarTexto() {
    const textoResultado = document.querySelector('.main-section-desencriptador-dev-text').innerText;

    navigator.clipboard.writeText(textoResultado)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(() => alert("Hubo un error al copiar el texto."));
}