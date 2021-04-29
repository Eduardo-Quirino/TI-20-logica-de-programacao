/*Calcular a média ponderada de um aluno que tem as seguintes notas e pesos

let
nota1= 10 

nota2=5

nota3=7.5

peso nota1 = 2

peso nota2 = 3

peso nota3 = 4 e exibir se o aluno foi aprovado ou reprovado. Caso a média seja >=7 o aluno será considerado aprovado, caso contrário reprovado 

media ponderada = (nota1*peso1 + nota2*peso2 + nota3*peso3)/peso1+peso2+peso3
*/
let n1 = 10.0
let n2 = 5.0
let n3 = 7.5
let pn1 = 2
let pn2 = 3
let pn3 = 4

let mp  = (n1*pn1+n2*pn2+n3*pn3)/(pn1+pn2+pn3);
if(mp>=7){
    console.log("aprovado com média "+mp)
}
else{
    console.log("Reprovado com média "+mp)
}