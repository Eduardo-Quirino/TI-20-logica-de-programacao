/*nós conhecemos o número de repetições-- > para (Portugol) --->for
sintaxe: 
        for (let contador=1, condição, incrementar 1 ao contador)
        {
            instruções que eu quero que repita
        }

        i++ somar +1 --> incremento 1
        i-- subtrair -1 --> decremento 1
        queremos escrever 10x ti20*/
let i = 1;  //transformei a minha variável local em global
for (i; i <= 10; i++) {
    //i existe só dentro do for - variável local
    console.log(i + " - TI20");
    console.log("Vocês são legais!!!");
}

console.log("Valor de saída da variável i: " + i);