$(document).ready(() => {

    let opciones = `<div class="row">`;
    for (let i = 0; i < 8; i++) {
        opciones += `
            <div class="col-md-12 col-xl-6 mt-3">
                <div class="sombra info p-3">
                    <h3>Opción ${(i+1)}</h3>
                    <input type="text" class="form-control blanco" placeholder="texto de la opción">
                    <input type="text" class="form-control blanco mt-3" placeholder="Valor de la opción">
                </div>
            </div>
        `;
    }
    opciones += '</div>';
    $("#opciones")[0].innerHTML = opciones;

    let preguntas = `<div class="row">`;
    for (let i = 0; i < 8; i++) {
        preguntas += `
            <div class="col-md-12 col-xl-6 mt-3">
                <div class="sombra info p-3">
                    <h3>Pregunta ${(i+1)}</h3>
                    <input type="text" class="form-control blanco" placeholder="texto de la opción">
                    <input type="text" class="form-control blanco mt-3" placeholder="Valor de la opción">
                </div>
            </div>
        `;
    }
    preguntas += '</div>';
    $("#preguntas")[0].innerHTML = preguntas;

});