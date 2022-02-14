$(document).ready(() => {

    const preguntaIdenp = () => {
        $("#queOpcionEs")[0].innerHTML = `
            <div class="form-inline">
                <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho">Sigla:</label>
                <input type="text" class="form-control font-weight-bold info">
            </div>
            <div class="form-inline mt-3    ">
                <label class="font-weight-bold mr-2 align-self-start justify-content-end ancho">Nombre:</label>
                <textarea name="nombre" id="nombre"></textarea>
            </div>
            <div class="form-inline mt-3">
                <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho">Tipo de respuesta:</label>
                <div>
                    <input type="button" value="Única" class="info btn rounded-pill ancho">
                    <input type="button" value="Múltiple" class="info btn rounded-pill ancho">
                    <input type="button" value="Abierta" class="info btn rounded-pill ancho">
                </div>
            </div>
            <div class="d-flex mt-3">
                <input type="button" value="Guardar" class="btn btn-dark rounded-pill mx-auto">
            </div>
        `;
        CKEDITOR.replace('nombre');
    };

    const grupoPreg = () => {
        $("#queOpcionEs")[0].innerHTML = `
            <div class="form-inline">
                <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho_2">Cantidad de preguntas:</label>
                <input type="Number" class="form-control font-weight-bold info">
            </div>
            <div class="form-inline mt-3">
                <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho_2">Tipo de respuesta:</label>
                <div>
                    <input type="button" value="Única" class="info btn rounded-pill ancho">
                    <input type="button" value="Múltiple" class="info btn rounded-pill ancho">
                    <input type="button" value="Abierta" class="info btn rounded-pill ancho">
                </div>
            </div>
            <div class="form-inline mt-3">
                <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho_2">Cantidad de opciones:</label>
                <input type="Number" class="form-control font-weight-bold info">
            </div>
            <div class="d-flex mt-3">
                <input type="button" value="Captura" class="btn btn-dark rounded-pill mx-auto">
            </div>
        `;
    };

    const dimension = () => {
        $("#queOpcionEs")[0].innerHTML = `
        <div class="form-inline">
            <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho_2">Nombre:</label>
            <input type="text" class="form-control font-weight-bold info">
        </div>
        <div class="form-inline mt-3">
            <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho_2">Siglas:</label>
            <input type="text" class="form-control font-weight-bold info">
        </div>
        <div class="form-inline mt-3">
            <label class="font-weight-bold mr-2 align-self-center justify-content-end ancho_2">Tipo:</label>
            <div>
                <input type="button" value="Suma" class="info btn rounded-pill ancho">
                <input type="button" value="Promedio" class="info btn rounded-pill ancho">
            </div>
        </div>
        <div class="d-flex mt-3">
            <input type="button" value="Crear" class="btn btn-dark rounded-pill mx-auto">
        </div>
        `;
    };

    $("#preguntaIdenp").click(() => preguntaIdenp());

    $("#grupoPre").click(() => grupoPreg());

    $("#dimension").click(() => dimension());

    preguntaIdenp();

    const ListaPreguntas = [{
        "sigla": "Siglas",
        "nombre": "Unica",
        "tipoDato": "independiente",
        "tipoResp": "unica",
        "respeuesta": [{
            "valor": 1,
            "nombre": "pregunta 1"
        }, {
            "valor": 1,
            "nombre": "pregunta 2"
        }]
    }, {
        "sigla": "Siglas",
        "nombre": "multiple",
        "tipoDato": "independiente",
        "tipoResp": "multiple",
        "respeuesta": [{
            "valor": 1,
            "nombre": "pregunta 1"
        }, {
            "valor": 1,
            "nombre": "pregunta 2"
        }]
    }, {
        "sigla": "Siglas",
        "nombre": "abierta",
        "tipoDato": "independiente",
        "tipoResp": "abierta",
        "respeuesta": [{
            "valor": 1,
            "nombre": "pregunta 1"
        }]
    }];

    const respuestas = pregunta => {
        let r = "";
        let resp = pregunta.respeuesta;
        if (pregunta.tipoResp == "unica") {
            for (let i = 0; i < resp.length; i++) {
                r += `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="${resp[i].valor}" value="option1">
                        <label class="form-check-label" for="${resp[i].valor}">
                            ${resp[i].nombre}
                            <img src="img/editar.png" class="img-fluid icono-sm mr-1">
                            <img src="img/basura.png" class="img-fluid icono-sm">
                        </label>
                    </div>
                `;
            }
        } else if (pregunta.tipoResp == "multiple") {
            for (let i = 0; i < resp.length; i++) {
                r += `
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="option1">
                        <label class="form-check-label" for="${resp[i].valor}">
                            ${resp[i].nombre}
                            <img src="img/editar.png" class="img-fluid icono-sm mr-1">
                            <img src="img/basura.png" class="img-fluid icono-sm">
                        </label>
                    </div>`;
            }
        } else if (pregunta.tipoResp == "abierta") {
            for (let i = 0; i < resp.length; i++) {
                r += `
                    <div class="form-inline">
                        <input class="form-control blanco ml-1 mr-1" type="text" placeholder="${resp[i].nombre}">
                            <img src="img/editar.png" class="img-fluid icono-sm mr-1">
                            <img src="img/basura.png" class="img-fluid icono-sm">
                        </label>
                    </div>`;
            }

        }
        return r;
    };

    const listaUnicas = ListaPreguntas => {
        let cont = "";
        for (let i = 0; i < ListaPreguntas.length; i++) {
            cont += `
                <div class="col-3 mt-3">
                    <div class="h-0">
                        <div class="d-flex justify-content-end flex-column align-items-end">
                            <img src="img/basura.png" class="img-fluid icono m-n-icono">
                            <img src="img/editar.png" class="img-fluid icono mt-1">
                        </div>
                    </div>
                    <div class="borde-instrumento info h-100">
                        <div class="h-100 text-center d-flex flex-column justify-content-center">
                            <h1>${ListaPreguntas[i]["sigla"]}</h1>
                            <h3>${ListaPreguntas[i]["nombre"]}</h3>
                            ${respuestas(ListaPreguntas[i])}
                            <input type="button" class="btn bg-dark text-white mb-2 align-self-center mt-2" value="Agregar opción">
                        </div>
                    </div>
                </div>`;
        }
        return cont;
    };

    if (true) {
        $("#listaPre")[0].innerHTML = `
            <div class="linea mt-5"></div>
            <div class="container text-linea">
                <label class="bg-white h4">
                    Lista de preguntas
                </label>
            </div>
            <div class="container">
                <div class="row">
                    ${listaUnicas(ListaPreguntas)}
                </div>
            </div>`;
    }

    const listaDimensiones = [{
        "nombre": "nombre",
        "siglas": "siglas",
        "tipo": "suma"
    }, {
        "nombre": "nombre",
        "siglas": "siglas",
        "tipo": "promedio"
    }];

    const dimensiones = listaDimensiones => {
        let cont = "";
        for (let i = 0; i < listaDimensiones.length; i++) {
            cont += `
                <div class="col-3 mt-3">
                    <div class="h-0">
                        <div class="d-flex justify-content-end flex-column align-items-end">
                            <img src="img/basura.png" class="img-fluid icono m-n-icono">
                            <img src="img/editar.png" class="img-fluid icono mt-1">
                            <img src="img/editar.png" class="img-fluid icono mt-1">
                        </div>
                    </div>
                    <div class="borde-instrumento info h-100">
                        <div class="h-100 text-center d-flex flex-column justify-content-center">
                            <h1>${listaDimensiones[i].siglas}</h1>
                            <h3>${listaDimensiones[i].nombre}</h3>
                            <h5>${listaDimensiones[i].tipo}</h5>
                            <label>${listaDimensiones[i].tipo} de preguntas:</label>
                            <label>Minimo: 0</label>
                            <label>Maximo: 0</label>
                            <input type="button" class="btn bg-dark text-white mb-2 align-self-center mt-2" value="Agregar opción">
                        </div>
                    </div>
                </div>`;
        }
        return cont;
    }

    if (true) {
        $("#listaDim")[0].innerHTML = `
        <div class="linea mt-5"></div>
        <div class="container text-linea">
            <label class="bg-white h4">
                Listas de Dimensiones y su Retroalimentación
            </label>
        </div>
        <div class="container">
            <div class="row">
                ${dimensiones(listaDimensiones)}
            </div>
        </div>`;
    }

});