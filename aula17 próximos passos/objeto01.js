 Ex1.:

 let amigo = {}
console.log(typeof amigo) 

/* Se eu colocar o [] em vez de {} você acha que vai dar arrey, mas dá objeto também.
Em js o arrey é um objeto e o obejto é um objeto. São estruturas da mesma classe, são estruturas que vieram da mesma origem */

Ex2.:

let amigo = {nome:'José',
sexo: 'M',
peso:'85.4',
engordar(p){

}}
console.log(amigo)/* se eu quiser mostrar só o nome coloco (amigo.nome) que é o atributo */

Ex3.:
 
let amigo = {nome:'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
