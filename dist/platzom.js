"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = platzom;

function platzom(str) {
  //lo asignamos a otra variable para que se modifica por que es un string
  var translation = str; //Si la palabra termina en ar se le quitan esos dos caracteres

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  } // si la palabra inicia con Z, se le añade "pe" al final


  if (str.toLowerCase().startsWith('z')) {
    translation += "pe"; //translation = translation + "pe";
  } //si la palabra traduccida tiene 10 o mas letras debe unir con -


  var length = translation.length;

  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var seconHalft = translation.slice(Math.round(length / 2));
    translation = "".concat(firstHalf, "-").concat(seconHalft);
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var tamano = str.length;
    var stringnuevo = '';
    var capitalize = true;

    for (var i = 0; i < tamano; i++) {
      console.log(capitalize);

      var _char = str.charAt(i);

      stringnuevo += capitalize ? _char.toUpperCase() : _char.toLowerCase();
      capitalize = !capitalize;
      console.log(capitalize);
    }

    return stringnuevo;
  } // si la palbra original es un palidromo se devuelve la misma palabra intercalando mayusculas y minusculas


  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}