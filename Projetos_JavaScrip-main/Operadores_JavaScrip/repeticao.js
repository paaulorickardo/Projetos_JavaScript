

/*var tabuada = 7;

for (var i = 0; i <= 10; i++) {
    console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i);

}*/

/*for (var i = 0; i < 100; i++) {
    if (numeroSorteado === i) {
        console.log('seu numero foi encontrado')
        break
    }
}*/

/*var achou = false;

var nuemroSorteado = 10;
var possivelValor = 0;


while (!achou) {
    possivelValor += 1;
    if(nuemroSorteado === possivelValor){
        achou = true
    } else {
        console.log('Possivel valor não corresponde ao numero sorteado' + possivelValor
        );
    }
}*/

function soma(operadorA, operadorB){
    var resultadoC = operadorA + operadorB
    return resultadoC;
}

function olaGama(nome){
    console.log('Olá Gama! Você é o ' + nome); 
 }

var resultadoDaSoma = soma(1, 2);
var resultadoNovoDaSoma = soma(10,66)

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma)

olaGama('Paulo');
