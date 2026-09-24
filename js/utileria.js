export const estaVacio = (texto) =>{

    //Primer validación de la función: comprobar que la cadena que le llegue no esté vacía
    return texto.trim() === "";
}

//=======================================VALIDACIÓN DE CORREO=============================================
export const validarCorreo = (correo) =>{

    //Primer validación de la función: comprobar que la cadena que le llegue no esté vacía
    //De hecho no es necesaria debido a que en la estructura se obliga a que exista contenido

    //if(correo === "") return false;

    /*
    Para este punto se implementan expresiones regulares para validar la estructura del correo,
    la expresión se pensó para que solo se pudiera usar el dominio de correo del tec
    (se me hizo un detalle con el que podía practicar) además de solo minusculas,
    numeros y simbolos sin espacio siempre y cuando sea antes del "@" como en los correos reales   
    */
    const estructura = /^[0-9]+@itoaxaca\.edu\.mx$/;

    //se compara el correo con la extructura admitida por la expresion regular, si no se cumple retorna false
    if(estructura.test(correo)==false)return false;

    //si las condiciones anteriores no se cumplen retornamos un true indicando que el correo es valido
    return true;
}


//======================================VALIDACIÓN DE SOLO LETRAS============================================
export const soloLetras = (texto) => {
    /*El metodo verifica que un texto tenga solo Mayusculas, minusculas y vocales con acentos,
    está pensado para que valide algún parrafo entonces pareció buena idea quitar los espacios
    entre palabras para validar la estructura, para eso se verifica que sea de tipo String:*/
    if (typeof texto !== "string") return false;


    //Despues creamos una variable que guarde el texto sin espacios, tabs o saltos de línea usando un fragmento de expresion Regular
    const sinEspacios = texto.replace(/\s/g, "");


    /* La estructura principal que se verifica es la siguiente, donde solo se admiten mayúsculas, 
    minúsculas, vocales acentuadas, ü y ñ*/
    const estructura = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+$/;

    //Ahora se retorna el valor que resulta de evaluar el texto sin espacios con la estructura principal
    return estructura.test(sinEspacios);
};


//====================================VALIDACIÓN DE LONGITUD DE NUMEROS=====================================
export const validarLongitud= (numero, maxLongitud) => {
    /*Para no desperdiciar espacio creando variables que contengan las longitudes el metodo usará el valor del tamaño
    máximo que llega desde el argumento (maxLongitud) y además se transformará el argumento "numero" a String para poder comparar
    la longitud de ambos valores*/

    if (numero.toString().length!=maxLongitud) return false;

    return true;
};


//====================================VALIDACIÓN DE CONTRASEÑA=====================================
/*
En vez de usar expresiones regulares como en los casos anteriores pensé en un metodo que fuera más entendible
pero que siguiera los requisitos para la contraseña, las comparaciones que se hicieron fueron con base en
el codigo ASCII de cada numero, si el caracter de la posicion i (que hace referencia a una posicion de la
contraseña dentro del for) equivale a un caracter de los que se piden, entonces su variable que registra 
la existencia de ese caracter cambia a true dando a entender que si forma parte del password.
*/

export const validarPassword = (password) => {
    if (typeof password !== "string") return false;
    if (password.length < 8) return false;

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;

    for (let i = 0; i < password.length; i++) {
        const posicion = password[i];   // el carácter en la posición i

        if (posicion >= "A" && posicion <= "Z") {
            tieneMayuscula = true;
        } else if (posicion >= "a" && posicion <= "z") {
            tieneMinuscula = true;
        } else if (posicion >= "0" && posicion <= "9") {
            tieneNumero = true;
        } else if (posicion === " ") {
            return false;             
        } else {
            tieneEspecial = true;    
        }
    }

    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
};
    