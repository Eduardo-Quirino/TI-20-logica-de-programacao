/*imprimir todos os números pares a partir do 2 até o número 100
2 4 6  8 +2 10 +2 12  -->incremento: 2
i++ não pode
i+=2
i=i+2
*/
for (let i = 2; i <= 100; i = i + 2) {
    console.log(i);
}

//imprimir os números anteriores na ordem inversa
// 100 98 96 94 ....2

console.log("----------------------------------------");
for (let i = 100; i >= 2; i -= 2) {
    console.log(i);}