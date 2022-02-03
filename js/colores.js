$(document).ready(evt => {

    let name = undefined;

    let colores = {
        "text-color-1": "black",
        "text-color-2": "white",
        "fondo-p": "white",
        "fondo-1": "gray",
        "fondo-2": "white",
        "fondo-3": "white",
        "fondo-4": "gray",
        "fondo-5": "gray"
    };

    const quitar = nombre => {
        if (nombre) {
            let elements = $(`[name=${nombre}]`);
            for (let i = 0; i < elements.length; i++) {
                elements[i].className = elements[i].className.replace(" cambio", "");
            }
        }
    };

    const seleccion = () => {
        let elements = $(`[name=${name}]`);
        for (let i = 0; i < elements.length; i++) {
            elements[i].className += " cambio";
        }
    };

    $("#reset").click(() => {
        quitar(name);
        name = undefined;
        Object.keys(colores).forEach(key => {
            let elements = $(`[name=${key}]`);
            for (let i = 0; i < elements.length; i++) {
                sessionStorage.setItem(key, colores[key]);
                if (key.includes('fondo')) {
                    elements[i].style.backgroundColor = colores[key];
                } else {
                    elements[i].style.color = colores[key];
                }
            }
        })
    });

    $("#guardar").click(() => {
        quitar(name);
        name = undefined;
        Object.keys(colores).forEach(key => {
            if (key.includes('fondo')) {
                sessionStorage.setItem(key, $(`[name=${key}]`)[0].style.backgroundColor || colores[key]);
            } else {
                sessionStorage.setItem(key, $(`[name=${key}]`)[0].style.color || colores[key]);
            }
        });
    });

    $("#aplicar").click(evt => {
        if (name) {
            let elements = $(`[name=${name}]`);
            for (let i = 0; i < elements.length; i++) {
                if (name.includes('fondo')) {
                    elements[i].style.backgroundColor = $("#libre")[0].value;
                } else {
                    elements[i].style.color = $("#libre")[0].value;
                }
            }
        }
    });

    $("[name='color']").click(evt => {
        let elements = $(`[name=${name}]`);
        for (let i = 0; i < elements.length; i++) {
            if (name.includes('fondo')) {
                elements[i].style.backgroundColor = evt.target.style.backgroundColor;
            } else {
                elements[i].style.color = evt.target.style.backgroundColor;
            }
        }
    });

    $("[name='text-color-1']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'text-color-1') {
            quitar(name);
            name = "text-color-1";
            seleccion();
        }
    });

    $("[name='text-color-2']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'text-color-2') {
            quitar(name);
            name = "text-color-2";
            seleccion();
        }
    });

    $("[name='fondo-p']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'fondo-p') {
            quitar(name);
            name = "fondo-p";
            seleccion();
        }
    });

    $("[name='fondo-1']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'fondo-1') {
            quitar(name);
            name = "fondo-1";
            seleccion();
        }
    });

    $("[name='fondo-2']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'fondo-2') {
            quitar(name);
            name = "fondo-2";
            seleccion();
        }
    });

    $("[name='fondo-3']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'fondo-3') {
            quitar(name);
            name = "fondo-3";
            seleccion();
        }
    });

    $("[name='fondo-4']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'fondo-4') {
            quitar(name);
            name = "fondo-4";
            seleccion();
        }
    });

    $("[name='fondo-5']").click(evt => {
        if (evt.target.attributes.name && evt.target.attributes.name.value == 'fondo-5') {
            quitar(name);
            name = "fondo-5";
            seleccion();
        }
    });

});