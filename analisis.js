var salariosColombia = colombia.map(function(salario){
    return salario.salary;
    }
)
var salariosColombiaOrdenado = salariosColombia.sort(function(a,b){
    return a-b;
});

// mediana de colombia
var mediana;
function mediana(salarios){
    var numero = salarios.length%2; 
    var division = salarios.length/2; 
if(numero == 1){
     mediana = salarios[division];
    console.log (mediana)
}
else{
   mediana = (salarios[division] + salarios[division - 1])/2;
    console.log(mediana)
};
}
mediana(salariosColombiaOrdenado);

