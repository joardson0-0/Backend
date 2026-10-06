function imprime(texto) {
    console.log("alguma mensagem");
    console.log(texto);

}

imprime("texto teste");

function soma(n1, n2) {
    let res = n1 + n2;
    console.log("soma = " + res);


}
soma(5, 3);

function mult(n1, n2) {
    let res = n1 * n2;
    console.log("multiplicação = " + res);
    return res;
}
mult(5, 3);

let resultado = mult(5, 3);

imprime(resultado);

function calcularIRPF(salario) {
    let novosalario = salario - (salario * 0.08);
    return novosalario;

}
function calcularINSS(salario) {
    let novosalario = salario - (salario * 0.11);
    return novosalario;
}
function calcularPS(salario, consulta) {
    let descConsulta = consulta * 10;
    let descPS = salario * 0.02;
    let novosalario = salario - (descConsulta + descPS);
    return novosalario;

}
let salario = 25000;

salario = calcularIRPF(salario);
salario = calcularINSS(salario);
salario = calcularPS(salario, 3);

console.log("salario com descontos = " + salario);