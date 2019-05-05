console.log(
  "%c--Pairwise, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

const pairwise = (array, arg) =>
    /*
    Primeiro laço (reduce) com os numeros recebidos no array
    Inicio o reduce com um array contendo 2 posições,
    um número inteiro que vai armazenar as somas dos indices e
    um objeto que vai armazenar os indices já usados no processo
    */
   array.reduce((accumulator, currentValue, indexR, array) => {
        /*
        Segundo laço (forEach) para testar o valor recebido do reduce com cada valor do
        array com a finalidade de satisfazer a condição do desafio
        */
       array.forEach((currentValue2, indexF) => {
            /*
            Se a condição for satisfeita, os indices são somados e armazenados na primeira posição do acumulador do reduce
            Os indices já utilizados, são inseridos no objeto, presente na segunda posição
            do acumulador do reduce, pois serão fundamentais na validação da condição
            */
            if (currentValue + currentValue2 === arg && indexR !== indexF && !accumulator[1][indexR] && !accumulator[1][indexF]) {
              accumulator[0] += (indexR + indexF)
              accumulator[1][indexR] = true
              accumulator[1][indexF] = true
            }
        })
        // Retorno o acumulador para a proxima interação
        return accumulator
    }, [0, {}])[0]

console.log(pairwise([7, 9, 11, 13, 15], 20)) // 6
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)) // 10
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)) // 11
console.log(pairwise([1, 3, 2, 4], 4)) // 1
console.log(pairwise([1, 1, 1], 2)) // 1
console.log(pairwise([], 100)) // 0