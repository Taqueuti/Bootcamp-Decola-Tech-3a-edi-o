function number(num1, num2){
    if(!num1 || !num2){
        return 'Defina dois números!';
    }
  const primeiraFrase = criarPrimeiraFrase(num1, num2);
  const segundaFrase = criarSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criarPrimeiraFrase(num1, num2) {
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1 === num2){
        simNao = '';
    }

    return `${primeiraFrase} ${simNao} são iguais.`
}

function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let comparaDez = "menor";
    let comparaVinte = "menor"

    if (soma > 10){
        comparaDez = 'maior';
    }
    if (soma > 20){
        comparaVinte = 'maior'
    }
    if (soma === 20){
        comparaVinte = 'Igual'
    }
    if (soma === 10){
        comparaDez = 'Igual'
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20,
    `;
}

console.log(number(10, 10));