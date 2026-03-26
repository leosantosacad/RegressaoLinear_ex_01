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

let somaX = 0;
let somaY = 0;
let somaXY = 0;
let somaX2 = 0;

for (let i = 0; i < n; i++) {
  somaX += x[i];
  somaY += y[i];
  somaXY += x[i] * y[i];
  somaX2 += x[i] * x[i];
}

let a = (n * somaXY - somaX * somaY) / (n * somaX2 - somaX * somaX);
let b = (somaY - a * somaX) / n;

let mediaY = somaY / n;

let sqTotal = 0;
let sqRes = 0;

for (let i = 0; i < n; i++) {
  let yEstimado = a * x[i] + b;

  sqTotal += Math.pow(y[i] - mediaY, 2);
  sqRes += Math.pow(y[i] - yEstimado, 2);
}

let r2 = 1 - sqRes / sqTotal;

console.log("Equação da reta: y = " + a.toFixed(2) + "x + " + b.toFixed(2));
console.log("R² = " + r2.toFixed(4));
