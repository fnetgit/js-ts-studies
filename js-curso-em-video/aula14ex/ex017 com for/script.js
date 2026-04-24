function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert("Digite um número!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //continuo sem entender isso
            tab.appendChild(item) //
        }
    }
}
