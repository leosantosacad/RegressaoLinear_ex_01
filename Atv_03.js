let dados = {
    X: [1, 2, 3, 4, 5],
    Y: [2, 4, 5, 4, 5],
    Z: [5, 3, 4, 2, 1]
};

// ==========================
// FUNÇÃO: Correlação de Pearson
// ==========================
function correlacao(x, y) {
    let n = x.length;

    let somaX = 0, somaY = 0, somaXY = 0;
    let somaX2 = 0, somaY2 = 0;

    for (let i = 0; i < n; i++) {
        somaX += x[i];
        somaY += y[i];
        somaXY += x[i] * y[i];
        somaX2 += x[i] * x[i];
        somaY2 += y[i] * y[i];
    }

    let numerador = (n * somaXY) - (somaX * somaY);
    let denominador = Math.sqrt(
        (n * somaX2 - somaX * somaX) *
        (n * somaY2 - somaY * somaY)
    );

    return numerador / denominador;
}

// ==========================
// FUNÇÃO: Classificação Cohen
// ==========================
function classificar(r) {
    let absR = Math.abs(r);

    if (absR < 0.10) return "Desprezível";
    if (absR < 0.30) return "Pequena";
    if (absR < 0.50) return "Média";
    return "Grande";
}

// ==========================
// MATRIZ DE CORRELAÇÃO
// ==========================
let nomes = Object.keys(dados);

// Cabeçalho
let tabela = "     ";
for (let nome of nomes) {
    tabela += nome.padStart(10);
}
tabela += "\n";

// Linhas
for (let i = 0; i < nomes.length; i++) {
    let linha = nomes[i].padEnd(5);

    for (let j = 0; j < nomes.length; j++) {
        let r = correlacao(dados[nomes[i]], dados[nomes[j]]);
        linha += r.toFixed(2).padStart(10);
    }

    tabela += linha + "\n";
}

// ==========================
// RESULTADOS DETALHADOS
// ==========================
console.log("=== MATRIZ DE CORRELAÇÃO ===");
console.log(tabela);

console.log("=== DETALHES ===");

for (let i = 0; i < nomes.length; i++) {
    for (let j = i + 1; j < nomes.length; j++) {
        let r = correlacao(dados[nomes[i]], dados[nomes[j]]);
        let r2 = r * r;

        console.log(
            nomes[i] + " x " + nomes[j] +
            " | r = " + r.toFixed(4) +
            " | r² = " + r2.toFixed(4) +
            " | " + classificar(r)
        );
    }
}
