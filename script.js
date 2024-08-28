function encriptarTexto() {
    const inputTexto = document.getElementById("input-text").value;
    const textoEncriptado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoEncriptado;
    mostrarResultado();
}

function desencriptarTexto() {
    const inputTexto = document.getElementById("input-text").value;
    const textoDesencriptado = inputTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDesencriptado;
    mostrarResultado();
}

function copiarTexto() {
    const texto = document.getElementById("output-text");
    texto.select();
    texto.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}

function toggleContent() {
    const inputTexto = document.getElementById("input-text").value;
    if (inputTexto.trim() === "") {
        document.getElementById("image-container").classList.remove("hidden");
        document.getElementById("result-container").classList.add("hidden");
    } else {
        document.getElementById("image-container").classList.add("hidden");
        document.getElementById("result-container").classList.remove("hidden");
    }
}

function mostrarResultado() {
    document.getElementById("image-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
}