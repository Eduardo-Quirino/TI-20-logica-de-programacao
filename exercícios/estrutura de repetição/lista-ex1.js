/*Some os números de 1 a 100 e imprima o valor. */
// for ou while
// 0 + 1 =1   1+2=3  
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma = soma + i;

}
console.log("Total com for: " + soma);
console.log("--------------------------------");

soma = 0;
let i = 1;
//o mesmo exercício com while
while (i <= 100) {
    soma = soma + i;
    i++;
}
console.log("Total com while: " + soma);