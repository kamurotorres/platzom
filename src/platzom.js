export default function platzom(str){
    //lo asignamos a otra variable para que se modifica por que es un string
    let translation = str

    //Si la palabra termina en ar se le quitan esos dos caracteres

    if(str.toLowerCase().endsWith('ar')) {

        translation = str.slice(0,-2)
    }
    // si la palabra inicia con Z, se le añade "pe" al final

    if(str.toLowerCase().startsWith('z')){
        translation += "pe"
        //translation = translation + "pe";
    }
    //si la palabra traduccida tiene 10 o mas letras debe unir con -
    const length = translation.length;
    if(length >=10){
        const firstHalf = translation.slice(0,Math.round(length/2));
        const seconHalft = translation.slice(Math.round(length/2));
        translation = `${firstHalf}-${seconHalft}`;
    }
    const reverse = (str) => str.split('').reverse().join('')
    function minMay(str){
        const tamano = str.length
        let stringnuevo = ''
        let capitalize = true

        for (let i=0;i < tamano ; i++){
            console.log(capitalize);
            const char = str.charAt(i)
            stringnuevo += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
            console.log(capitalize);
        }
        return stringnuevo
    }
    // si la palbra original es un palidromo se devuelve la misma palabra intercalando mayusculas y minusculas
    if(str == reverse(str))    {
        return minMay(str)
    }
    return translation;
}
