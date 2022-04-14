//var datos = [10, 20, 40, 80];
//var suma = 0;
//var i = 0;
//while(i<datos.length){
    //suma = suma + datos[i];
    //i++;
//};
//var media = suma/datos.length;
//console.log (media)

function Promedio(datos){
    var suma = 0;
    var i = 0;
    while(i<datos.length){
        suma = suma + datos[i];
        i++;
    };
    var media = suma/datos.length;
    return media;
};