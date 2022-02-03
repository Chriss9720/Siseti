$(document).ready(() => {

    let datos = {
        titulo: "Depresión",
        total: 22,
        pregunta: "¿Cuál de estas opciones se relaciona con mi calidad de sueño en las últimas semanas?",
        respuestas: [
            'Duermo como un bebé',
            'Me cuesta dormirme y tengo interrupciones frecuentes del sueño',
            'No tengo la misma calidad de sueño que antes, pero aún no es algo que me preocupe'
        ]
    };

    $("#examen")[0].innerHTML = datos.titulo;

    for (let i = 0; i < $('span[name="preguntas"]').length; i++)
        $('span[name="preguntas"]')[i].innerHTML = datos.total;

    $("#actual")[0].innerHTML = "1";

    $("#pregunta")[0].innerHTML = datos.pregunta;

    $("#respuestas")[0].innerHTML = "";
    for (let i = 0; i < datos.respuestas.length; i++) {
        $("#respuestas")[0].innerHTML += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="respuesta" value="option${i}" id="respuesta_${i}">
                <label class="form-check-label" for="respuesta_${i}">
                    ${datos.respuestas[i]}
                </label>
            </div>
        `;
    }

});