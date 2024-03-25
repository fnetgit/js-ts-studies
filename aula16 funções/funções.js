/*
•Funções são ações executadas assim que são chamadas ou em decorrência de algum evento;
•Uma função pode ter uma chamada, um conjunto de parâmetros uma ação e um retorno. Nem toda função usa parâmetros. Nem
toda função tem retornos;
•Uma função pode receber parâmetros e retornar um resultado.(parâmetro são instruções específicas que você fornece a uma
função quando a chama. Os parâmetros permitem que a função aceite entrada específica).

exemplo usando uma função para saber se um número é par ou impar: 
*/

    function parimp(n) {
        if (n % 2 == 0) {
            return 'par'
        } else {
            return 'ímpar'
        }
    }
    let res = parimp(11)
    console.log(res)
//dá pra simplificar fazendo console.log(parimp(11))