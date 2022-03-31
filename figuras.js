
// Cuadrado
console.group("cuadrado");
function perimetroCuadrado(lado_cuadrado){
    var resultado = 4 * lado_cuadrado;
    return resultado
};
console .log( "el perimetro del cuadrado es " + perimetroCuadrado(6) + " cm");

function areaCuadrado(lado_cuadrado){
    var resultado = lado_cuadrado * lado_cuadrado;
    return resultado;
};
console .log( "el área del cuadrado es " + areaCuadrado(6) + " cm'2");
console.groupEnd();

// circulo
console.group("circulo");
var pi = Math.PI;
function perimetroCirculo(radio){
    var resultado = (2 * radio) * pi;
    return resultado;  
};
console .log( "el perímetro del círculo  es " + perimetroCirculo(3) + " cm");

function areaCirculo(radio){
    var resultado = (radio * radio) * pi;
    return resultado;
};
console .log( "el área del círculo es " + areaCirculo(8) + " cm'2");
console.groupEnd();

// Triangulo
console.group("triángulo");
function perimetroTriangulo(a,b,c){
    var resultado = a + b + c;
    return resultado;
};
console .log( "el perímetro del triángulo  es " + perimetroTriangulo(3,4,5) + " cm");

function areaTriangulo(base,altura){
    var resultado = (base * altura) / 2;
    return resultado;
}
console .log( "el área del triángulo es " + areaTriangulo(4,5) + " cm'2");
console.groupEnd();

// rectangulo
console.group("rectangulo");
const perimetroRectangulo  = (a,b) => (2*a)+(2*b);
console .log( "el perímetro del triángulo  es " + perimetroRectangulo(2,3) + " cm");

const areaRectangulo = (a,b) => (a*b)/2;
console .log( "el área del rectángulo es " + areaRectangulo(6,5) + " cm'2");
console.groupEnd();

// funcion cuadrado con alerta
function cuadradoPerimetro(){
    const input_d = document.getElementById("inputcuadrado");
    const valor = input_d.value;
    const resultado = perimetroCuadrado(valor);
    document.write(resultado);
};
function cuadradoArea(){
    const input_d = document.getElementById("inputcuadrado");
    const valor = input_d.value;
    const resultado = areaCuadrado(valor);
    document.write(resultado);
}

// triangulo Isosceles
function triangulo_isosceles(){
    const caja = document.getElementById("input1");
    const caja_2 = document.getElementById("input2");
    const valor = caja.value;
    const valor2 = caja_2.value;
    const resultado= Math.sqrt((valor*valor)-((valor2*valor2)/4));
    alert(resultado);
}