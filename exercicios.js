// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const altTri =Number (prompt ("Digite aqui a altura do triangulo"))
const larTri =Number (prompt ("Digite aqui a largura do triangulo"))
console.log(larTri*altTri)
}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual =Number (prompt ("Digite aqui o ano em que estamos"))
const anoNasUsua =Number (prompt ("Digite aqui o ano do seu nascimento"))
console.log(anoAtual-anoNasUsua)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imcUsu = peso / (altura*altura)
return imcUsu
}
calculaIMC(peso, altura)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nomUsu =prompt("Escreve aqui seu nome")
const idaUsu =prompt("Escreve aqui sua idade")
const emaUsu =prompt("Escreve aqui seu email")
console.log(`Meu nome é ${nomUsu}, tenho ${idaUsu} anos, e o meu email é ${emaUsu}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const corUsu1 =String ( prompt("Escreve aqui sua 1ª cor favorita"))
const corUsu2 =String (prompt("Escreve aqui sua 2ª cor favorita"))
const corUsu3 =String (prompt("Escreve aqui sua 3ª cor favorita"))
const arrCor = [corUsu1, corUsu2, corUsu3]
console.log(arrCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
const strMai = string.toUpperCase()
console.log(strMai)
return strMai
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const ingVen = custo / valorIngresso
return ingVen
}
calculaIngressosEspetaculo(custo, valorIngresso)
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
return string1.length === string2.length
}
checaStringsMesmoTamanho(uva, banana)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
// implemente sua lógica aqui
return array[0]
}
retornaPrimeiroElemento(array)

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
return array[array.length-1]
}
retornaUltimoElemento(array)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const ultimoAtual = array[array.length-1]
const primeiroAtual = array[0]
array[0] = ultimoAtual
array[array.length-1] = primeiroAtual
return array
}
trocaPrimeiroEUltimo(array)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
const anoEstamos =Number (prompt ("Em que ano estamos?"))
const anoNascimento =Number (prompt ("Ano do seu Nascimento?"))
const anoEmissao =Number (prompt ("Ano emissão seu RG?"))

const idadeCidadao = (anoEstamos-anoNascimento)
const validadeRg = (anoEstamos-anoEmissao)

const renova1 = (idadeCidadao <= 20) && (validadeRg >= 5)
const renova2 = (idadeCidadao > 20) && (idadeCidadao <= 50) && (validadeRg >= 10) 
const renova3 = (idadeCidadao > 50) && (validadeRg >= 15)
console.log(renova1 || renova2 || renova3) 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
const var1 = (ano%400===0)
const var2 = (ano%4==0) && (ano%100!==0)
  
 return var1||var2
}
checaAnoBissexto(ano)


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
const maioridade = prompt ("Você tem mais 18? Ok para sim.")
const ensinoMedio = prompt ("Você tem ensino medio completo? Ok para sim")
const disponibilidade = prompt ("Você tem disponibilidade exclusiva durante os horarios do curso?")

const respMaioridade = maioridade === "sim"
const respEnsino = ensinoMedio === "sim"
const respDisponibilidade = disponibilidade === "sim"

const aptoInscricao = respMaioridade && respEnsino && respDisponibilidade

console.log(aptoInscricao)
}