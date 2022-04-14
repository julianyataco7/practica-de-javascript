//var array = [20, 40, 50];
function media_(array){
var promedio = array.reduce(
function (sumatoria = 0, elemento){
    return sumatoria + elemento
}
);
var media = promedio/array.length;
return media
};