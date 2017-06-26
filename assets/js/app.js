// http://laboratoria.cuadra.co:9339/api/v1/students/

var cargarPagina = function () {
    cargarAlumnas();
   
};

var cargarAlumnas = function(){
    
     $.ajax({
        url: 'http://laboratoria.cuadra.co:9339/api/v1/students/',
        method: 'GET',
        dataType: 'jsonp',
        success: function (response) {
            console.log("respuesta ", response);
        },
        error: function (error) {
            console.log("error ", error);
        }
    });  
}

$(document).ready(cargarPagina);


