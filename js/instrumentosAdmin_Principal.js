$(document).ready(() => {

    const cargarLista = data => {
        let cont = `<div class="row">`;
        for (let i = 0; i < data.length; i++) {
            cont += `
            <div class="col-3 carta-ins mt-3">
                <div class="h-0">
                    <div class="d-flex justify-content-end flex-column align-items-end">
                        <img src="img/basura.png" class="img-fluid icono m-n-icono">
                        <img src="img/editar.png" class="img-fluid icono mt-1">
                    </div>
                </div>
                <div class="borde-instrumento h-100">
                    <div class="ins-70 w-100">
                        <div class="h-100 text-center">
                            <h1>${data[i].codigo}</h1>
                            <h3>${data[i].tema}</h3>
                            <h5>${data[i].subtema}</h5>
                        </div>
                    </div>
                    <div class="ins-30 d-flex justify-content-center align-items-center bg-gray click">
                        <h3 class="text-white">Capturar Datos</h3>
                    </div>
                </div>
            </div>`;
        }
        cont += `</div>`;
        $("#contenido")[0].innerHTML = cont;
    };

    cargarLista(datos);

});