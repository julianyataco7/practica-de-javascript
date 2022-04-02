// Precios y Descuentos
function descuentos(precio,descuento){
    var precio_descuento = 100 - descuento;
    var total_a_pagar = (precio * precio_descuento)/100;
    return total_a_pagar
};
console.log(descuentos(140,16));

function descuento_p(){
    var precio_a = document.getElementById("precio");
    var descuento_a = document.getElementById("descuento");
    var precio_b= precio_a.value;
    var descuento_b = descuento_a.value;
    var resultado = descuentos(precio_b,descuento_b);
    const parrafo = document.getElementById("parrafo");
    parrafo.innerText="este es el precio con el descuento $" + resultado
}