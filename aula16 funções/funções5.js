/*Recursividade
•é um mecanismo de programação no qual uma função ou outro objeto se refere a si mesmo em sua própria definição.
•essa é uma função recursiva porque eu estou criando a função fatorial e dentro dela ela possui uma chamda pra ela mesma. eu tenho fatorial que chama fatorial*/

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/
