// Questão 1
let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Questão 1 - Valor da variável SOMA:", SOMA);

// Questão 2
function pertenceFibonacci(numero) {
  let a = 0, b = 1, temp;

  while (b <= numero) {
    if (b === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }

    temp = a + b;
    a = b;
    b = temp;
  }

  return `${numero} não pertence à sequência de Fibonacci.`;
}

console.log("Questão 2 -", pertenceFibonacci(21));

// Questão 3
let a1 = 1, razaoA = 2, proximoA = a1 + razaoA;
console.log("Questão 3a - Próximo elemento:", proximoA);

let b1 = 2, razaoB = 2, proximoB = b1 * razaoB;
console.log("Questão 3b - Próximo elemento:", proximoB);

let c1 = 0, razaoC = 1, proximoC = c1 + 2 * razaoC;
console.log("Questão 3c - Próximo elemento:", proximoC);

let d1 = 4, razaoD = 4, proximoD = d1 + razaoD;
console.log("Questão 3d - Próximo elemento:", proximoD);

let e1 = 1, razaoE = 0, proximoE = e1 + razaoE + 1;
console.log("Questão 3e - Próximo elemento:", proximoE);

let f1 = 2, razaoF = 8, proximoF = f1 + razaoF;
console.log("Questão 3f - Próximo elemento:", proximoF);

// Questão 4
console.log("Questão 4 - Descubra os interruptores manualmente.");

// Questão 5
function inverterString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

let minhaString = "Olá, mundo!";
let stringInvertida = inverterString(minhaString);
console.log("Questão 5 - String invertida:", stringInvertida);