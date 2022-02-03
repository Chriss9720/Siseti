$(document).ready(() => {

    const armar = data => `
        <div class="col-sm-6 col-md-6 col-lg-3 mt-2 carta">
            <div class="h-100 maximo click">
                <div class="text-center contenido d-lg-flex flex-column align-items-center justify-content-center" name="fondo-3">
                    <h2 name="text-color-1" class="click">${data.tema}</h2>
                    <h4 name="text-color-1" class="titulo m-0 text-center click">${data.subtema}</h4>
                    <label name="fondo-5" class="border circulo h5 p-2 click mt-2">
                        <div name="text-color-1" class="click">
                            ${data.respondidas}/${data.total}
                        </div>
                    </label>
                </div>
                <div name="fondo-4" class="pie h3 d-flex justify-content-center align-items-center click">
                    <div name="text-color-1 text-center click">
                        <label class="text-center click">
                            ${data.respondidas == data.total ? "Ver retroalimentación" : "Realizar"}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `;

    const comprobante = data => `
        <div class="col-sm-6 col-md-6 col-lg-3 mt-2 carta">
            <div class="h-100 maximo click">
                <div class="text-center contenido d-lg-flex flex-column align-items-center justify-content-center" name="fondo-3">
                    <h2 name="text-color-1" class="click">${data.tema}</h2>
                    <h4 name="text-color-1" class="titulo m-0 text-center click">${data.subtema}</h4>
                    <label name="fondo-5" class="border circulo h5 p-2 click mt-2">
                        <div name="text-color-1" class="click">
                            ${data.respondidas}/${data.total}
                        </div>
                    </label>
                </div>
                <div name="fondo-4" class="pie h3 d-flex justify-content-center align-items-center click">
                    <div name="text-color-1 text-center click">
                        <label class="text-center click">
                            ${data.respondidas == data.total ? "Generar" : "Pendiente"}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `;

    const datos = [{
        codigo: "E01",
        tema: "Ludopatía",
        subtema: "",
        respondidas: 22,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E02",
        tema: "Depresión",
        subtema: "",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E03",
        tema: "Enfoques",
        subtema: "de estudio",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E04",
        tema: "Estado",
        subtema: "de ansiedad",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E05",
        tema: "Estilo",
        subtema: "de vida",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E06",
        tema: "Rasgo",
        subtema: "de ansiedad",
        respondidas: 22,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E07",
        tema: "Sentimientos",
        subtema: "y emociones",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E09",
        tema: "Salud física",
        subtema: "",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E10",
        tema: "Alcohol",
        subtema: "",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E11",
        tema: "Drogas",
        subtema: "",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E12",
        tema: "Acoso/Bullying",
        subtema: "",
        respondidas: 0,
        total: 22,
        pendientes: json => armar(json),
    }, {
        codigo: "E12",
        tema: "Comprobante",
        subtema: "",
        respondidas: 12,
        total: 12,
        pendientes: json => comprobante(json),
    }];

    $("#examenes")[0].innerHTML = "";

    datos.forEach(item => $("#examenes")[0].innerHTML += item.pendientes(item));

});