
function mediana(array){
    var i;
    var resto = array.length%2;
    var lulu = array.sort(
        function diferencia(a,b){
            return a-b
        }
    );
    if(resto != 0){
        var x = array.length/2;
        var i = parseInt(x)
        console.log (array[i])
    }
    else if(resto == 0){
        var y = array.length/2
        var i = y - 1;
        var promedio= (array[y] + array[i])/2
        console.log(promedio);
    }
    };