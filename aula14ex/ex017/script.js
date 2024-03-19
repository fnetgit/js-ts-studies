function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) { //Esta linha verifica se o campo de entrada chamado “num” não possui nenhum valor (ou seja, está vazio); num.value.length retorna o comprimento (número de caracteres) do valor inserido no campo “num”.
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1 //c de contador
        tab.innerHTML = ''//antes de começar a mostrar a tabuada limpa a área de tabuada
        while (c <= 10) {
            let item = document.createElement('option')//para criar o option de forma dinâmica(não precisar fazer um por um no HTML)
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //não entendi bem isso
            tab.appendChild(item)//adicionar o elemento filho item; também não entendi
            c++
        }
    }
}
//ele fez com while mas quero fazer com for