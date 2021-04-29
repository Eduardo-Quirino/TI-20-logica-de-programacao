/*estrutura de repetição: enquanto (Portugol) ---> while (JS)
sintaxe:
while (condição)
{
    instruções que serão repetidas
    
}
let i=0
while (i<100)
{
    console.log(i);
    i++;    //a falta causa o looping
}

0
0
0

programa em looping = não encontra a saída.  ******
*/
let i = 1;
while (i <= 100) {
    console.log(i + " - TI20");
    i++;
}
console.log("valor da variavel i após a saída do laço while: "+i);