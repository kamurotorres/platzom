//llamaos el chai
const expect = require('chai').expect
// le decimos que requerimos la funccion platzom que se encuentra   src/platzom.js ya que mira el main
const platzom = require('..').default

describe('#platzom', function(){
   
    //son la test q se van ejecutar
    it('Si la palabra termina en ar se le quitan esos dos caracteres',function(){
        const translation =  platzom("Programar")
        expect(translation).to.equal("Program")
    })

    it('si la palabra inicia con Z, se le añade "pe" al final',function(){
        const translation = platzom("Zorro")
        expect(translation).to.equal("Zorrope")        
    })

    it('si la palabra traduccida tiene 10 o mas letras debe unir con -',function(){
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })

    it('si la palbra original es un palidromo se devuelve la misma palabra intercalando mayusculas y minusculas',function(){
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})