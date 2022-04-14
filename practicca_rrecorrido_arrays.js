var carta = [
    { plato_principal:"seco de pollo", postre: "leche asada", costo : 40 },
    { plato_principal: "aji de gallina", postre: "crema volteada", costo : 60},
    { plato_principal: "pachamanca", postre: "helado", costo : 20}
];
var cartaPlatoPrincipal = carta.map (function(platosPrincipales){
    return platosPrincipales.plato_principal
});
var postres = [];
for (i = 0; i < carta.length; i++){
    postres.push(carta[i].postre)
};
var cartaTotal = carta.map(function(platos){
    return platos.costo ;
})
var cartaTotal_ = carta.filter(function(platos){
    return platos.costo ;
})
console.group("carta");
console.log (cartaPlatoPrincipal);
console.log(postres);
console.log(cartaTotal);
console.log(cartaTotal_)
console.groupEnd();

var array2 = [1,2,3,4,5]

for (i=0; i<array2.length; i++){
    console.log (array2[i])
}
var numeros = array2.filter(function(numero){
    return numero > 2
})
console.log(numeros);