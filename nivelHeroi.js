/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de vitoria (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}** */

/*------------------------------Primeiro desafio--------------------------------------*/

// let heroi = ['SpiderMan', 8000]
// let [nome,vitoria]= heroi
// let nivel;
// console.log(vitoria);

// if (vitoria <= 1000) nivel = 'Ferro';
// if (vitoria >=1001 && vitoria <= 2000) nivel = 'Bronze';
// if (vitoria >= 2001 && vitoria <= 5000) nivel = 'Prata';
// if (vitoria >=5001 && vitoria <= 7000) nivel = 'Ouro';
// if (vitoria >=7001 && vitoria <= 8000) nivel = 'Platina';
// if (vitoria >=8001 && vitoria <= 9000) nivel = 'Ascendente';
// if (vitoria >=9001 && vitoria <= 10000) nivel = 'Épico';
// if (vitoria > 10000) nivel = 'Radiante';

// console.log(`O Herói de nome ${nome}, está no nível de ${nivel}`);

/*----------------------------------------------------------------------------------- */

/*Segundo desafio */

let heroi = ['SpiderMan', 8000]
let [nome_heroi,numero_vitorias]= heroi
let nivel_heroi;

function numeroVitorias(nome,vitoria,nivel) {
    
    if (vitoria <= 10) nivel = 'Ferro';
    if (vitoria >=1001 && vitoria <= 20) nivel = 'Bronze';
    if (vitoria >= 2001 && vitoria <= 50) nivel = 'Prata';
    if (vitoria >=5001 && vitoria <= 70) nivel = 'Ouro';
    if (vitoria >=7001 && vitoria <= 80) nivel = 'Platina';
    if (vitoria >=8001 && vitoria <= 90) nivel = 'Ascendente';
    if (vitoria >=9001 && vitoria <= 100) nivel = 'Épico';
    if (vitoria > 250) nivel = 'Radiante';
    
    console.log(msgVitoria(nome,vitoria,nivel))

}

function msgVitoria(nome,vitoria,nivel){
    return (`O Herói de nome ${nome} tem ${vitoria} vitórias e está no nível ${nivel}`);
}

numeroVitorias(nome_heroi,numero_vitorias, nivel_heroi);

