//descuento
function loQueSePaga(precio,descuento3){
    var a = 100 - descuento3;
    var b = (precio * a)/100;
    return b;
};
function descuento(){
    var caja = document.getElementById("input1");
    var valor = caja.value;
    var caja2 = document.getElementById("input2");
    var valor2 = caja2.value;
    
    var descuento_ = loQueSePaga(valor,valor2)
    var parrafo = document.getElementById("parrafo1");
    parrafo.innerText= "Esto es lo que tendria que pagar $" + descuento_;
};

//cupon
//function cupon(){
    var caja = document.getElementById("input1");
    var valor = caja.value;
    var caja2 = document.getElementById("input2");
    var valor2 = caja2.value;
    
    var descuento_ = loQueSePaga(valor,valor2)
    
    var select_ =  document.getElementById("select1")
    var select_1 = parseInt(select_.value);
    var bombo = document.getElementById("option1");
    var cuponElegido = Number(bombo.value);
    var bombo2 = document.getElementById("option2");
    var cuponElegido2 = Number(bombo2.value);
    var bombo3 = document.getElementById("option3");
    var cuponElegido3 = Number(bombo3.value);
    
    if (select_1 == cuponElegido){
        var d = 100 - 25;
        var d1 = (descuento_ * d)/100
        var parrafo2 = document.getElementById("parrafo2");
        parrafo2.innerText = "el nuevo precio a pagar ahora es $" + d1;

    }
    else if (select_1 == cuponElegido2){
        var d = 100 - 50;
        var d1 = (descuento_ * d)/100
        var parrafo2 = document.getElementById("parrafo2");
        parrafo2.innerText = "el nuevo precio a pagar ahora es $" + d1;
    }
    else if (select_1 == cuponElegido3){
        var d = 100 - 70;
        var d1 = (descuento_ * d)/100
        var parrafo2 = document.getElementById("parrafo2");
        parrafo2.innerText = "el nuevo precio a pagar ahora es $" + d1
    }
    
//}

//cupon otra forma
function cupon(){
    var caja = document.getElementById("input1");
    var valor = caja.value;
    var caja2 = document.getElementById("input2");
    var valor2 = caja2.value;
    
    var descuento_ = loQueSePaga(valor,valor2)
    
    var cupones = [25,50,75]
    var select_ =  document.getElementById("select1")
    var select_1 = parseInt(select_.value);
    
    if (select_1 == cupones[0]){
        var d = 100 - 25;
        var d1 = (descuento_ * d)/100
        var parrafo2 = document.getElementById("parrafo2");
        parrafo2.innerText = "el nuevo precio a pagar ahora es $" + d1;

    }
    else if (select_1 == cupones[1]){
        var d = 100 - 50;
        var d1 = (descuento_ * d)/100
        var parrafo2 = document.getElementById("parrafo2");
        parrafo2.innerText = "el nuevo precio a pagar ahora es $" + d1;
    }
    else if (select_1 == cupones[2]){
        var d = 100 - 70;
        var d1 = (descuento_ * d)/100
        var parrafo2 = document.getElementById("parrafo2");
        parrafo2.innerText = "el nuevo precio a pagar ahora es $" + d1
    }
    
}