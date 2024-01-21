function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // criei um img com id foto, é como se eu fosse no html e colocase <img id='foto'>//
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotocrianca-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'fotojovem-m.png')
            } else if (idade <50){
                img.setAttribute('src', 'fotoadulto-m.png')
            } else {
                img.setAttribute('src', 'fotoidoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'fotocrianca-f.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'fotojovem-f.png')
            }else if (idade <50) {
                img.setAttribute('src', 'fotoadulto-f.png')
            }else {
                img.setAttribute('src', 'fotoidoso-f.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//para fazer a imagem aparecer//
    }
}

/* fano é o formulário ano de nascimento  */
/* o [0] e o [1] são masc e fem */