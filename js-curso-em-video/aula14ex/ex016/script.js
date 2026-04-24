function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando:' //se tiver tudo certinho ele vai mudar de "Preparando a contagem" para "Contando"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449} `
            }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
/*c de contador;
               o contador vai começar no início e enquanto o contador for menor igual ao fim ele vai recerber ele mesmo mais o passo;
               esse só com o for(sem o if) só funciona quando o de cima for maior*/

/* para fazer emojis use o site  https://www.unicode.org/emoji/charts/full-emoji-list.html*/