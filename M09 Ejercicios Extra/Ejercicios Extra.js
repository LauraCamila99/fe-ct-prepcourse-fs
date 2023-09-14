/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
 
   let arregloPadre=[]; //Aqui se crea el arreglo grande 
   
   for (let clave in objeto){
      let arregloHijo=[]; //Se debe crear en cada iteración un arreglo nuevo el cual se añadira al grande
      arregloHijo.push(clave); //Sacamos ell valor de la propiedad
      arregloHijo.push(objeto[clave]); //Sacamos lo que habia en la proiedad
      arregloPadre.push(arregloHijo);   //Añasdimos al objeto grande
   };
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto ={};

   for (let letra of string){
      if (objeto.hasOwnProperty(letra)){
         objeto[letra]+=1;
         }
      else{
         objeto[letra]=1;
      }  
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let letra ="";
   let letraMayuscula="";
   var arregloMayus=[];
   var arregloMinus=[];
   var arregloTotal=[];
   let palabraNueva="";
   for (i=0; i<string.length;i++){
      letra=string[i];
      letraMayuscula=letra.toUpperCase();
      
      if(letra===letraMayuscula){
         arregloMayus.push(letra);
      }
      else{
         arregloMinus.push(letra);
      }

   }
   arregloTotal= arregloMayus.concat(arregloMinus);
   palabraNueva=arregloTotal.join("");
   return palabraNueva;   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es quelet frase cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:,
   let nuevafrase=frase.split(' ');
   let fraseFinal=[];
   for( palabra of nuevafrase){
      let palabraAlReves=palabra.split('').reverse().join('');
       fraseFinal.push(palabraAlReves);
   }

   return fraseFinal.join(' ');

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroAlreves="";
   let numero_="";
   numero_=numero.toString();
   
   numeroAlreves=numero_.split('').reverse().join('');
   
   if(numero_===numeroAlreves){
      return('Es capicua');
   } 
   else{
      return('No es capicua')
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let palabra=string.split('');
   let palabraFinal=[];
   for(let letra of palabra){
      if( letra !== 'a' && letra !== 'b' && letra !== 'c'){
         palabraFinal.push(letra);
      }
   }
   palabraFinal=palabraFinal.join('');
   return palabraFinal;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a,b){
      return a.length - b.length;
   })
   return arrayOfStrings;
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: 0los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arregloComun= [];
   arregloComun=array1.filter(Element=> array2.includes(Element));
   return arregloComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
