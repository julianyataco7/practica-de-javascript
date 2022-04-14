//var array = [1,7,7,3];
function moda (array){
var lista = {};
array.map(function(elemento){
    if(lista[elemento]){
        lista[elemento] +=1
    }
    else{
        lista[elemento] = 1
    }  
})
var lista2 = Object.entries(lista);
var lista3 = lista2.sort(function(a,b){return a[1]-b[1]});
var i = lista3.length -1;
return lista3[i];
}
