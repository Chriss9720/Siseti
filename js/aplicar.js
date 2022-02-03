$(document).ready(evt => {

    ["text-color-1", "text-color-2", "fondo-p", "fondo-1", "fondo-2", "fondo-3", "fondo-4", "fondo-5"]
    .forEach(key => {
        if (sessionStorage.getItem(key)) {
            let elements = $(`[name=${key}]`);
            for (let i = 0; i < elements.length; i++) {
                if (key.includes('fondo')) {
                    elements[i].style.backgroundColor = sessionStorage.getItem(key);
                } else {
                    elements[i].style.color = sessionStorage.getItem(key);
                }
            }
        }
    });

});