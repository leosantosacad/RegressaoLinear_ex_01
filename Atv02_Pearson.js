// Dados
let x = [
  23.5,
  23.5,
  22.5,
  20.5,
  18.5,
  17.0,
  17.0,
  17.5,
  19.0,
  20.0,
  20.5,
  22.5
];
let y = [
  28.5,
  27.5,
  24.5,
  21.5,
  19.5,
  17.0,
  18.4,
  17.5,
  18.0,
  22.0,
  20.5,
  22.5
];

let n = x.length;

// Somatórios
let somaX = 0;
let somaY = 0;
let somaXY = 0;
let somaX2 = 0;
let somaY2 = 0;

for (let i = 0; i < n; i++) {
  somaX += x[i];
  somaY += y[i];
  somaXY += x[i] * y[i];
  somaX2 += x[i] * x[i];
  somaY2 += y[i] * y[i];
}

// Fórmula de Pearson
let numerador = n * somaXY - somaX * somaY;
let denominador = Math.sqrt(
  (n * somaX2 - somaX * somaX) * (n * somaY2 - somaY * somaY)
);

let r = numerador / denominador;

// Classificação de Cohen
let classificacao = "";
let absR = Math.abs(r);

if (absR < 0.1) {
  classificacao = "Desprezível";
} else if (absR < 0.3) {
  classificacao = "Pequena";
} else if (absR < 0.5) {
  classificacao = "Média";
} else {
  classificacao = "Grande";
}

// Resultado
console.log("Correlação de Pearson (r): " + r.toFixed(4));
console.log("Classificação (Cohen): " + classificacao);
