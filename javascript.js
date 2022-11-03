// split

let text = "Hola buenos días a todos"
let text_arr = text.split("")

console.log(text_arr)
console.log(text)

// reverse
text_arr.reverse()
console.log(text_arr)

// join
let joined = text_arr.join("")
console.log(joined)

const reverserArr = (string)=>{

    // 1. Se convierte el string en array
    let split = string.split("")

    // 2. Damos la vuelta al array
    split.reverse()

    // 3. Unir el array
    let joined = split.join("")

    return joined
}

console.log(reverserArr("Illita es el mejor"))

let texto_example = "Mi mama puta me mima"
let banned = texto_example.split("puta")
let joined_banned = banned.join("")

console.log(joined_banned)

// unshift / push

let amigos = ["Nati sosa", "Angelino", "Aitorito", "Rico"]
// push añade al final
amigos.push("Toño")
// unshift añade al principio
amigos.unshift("Borja")
console.log(amigos)

// pop elimina el ultimo
amigos.pop()
// shift elimina el primero
amigos.shift()
console.log(amigos)


// find 
let number = [2, 66, 4, 32, 7, 91]

let result = number.find(element => element > 67)
console.log(result)

// 1. Haz una función que reciba como parámetro un string y devuelva ese string al revés


// 2. Haz una función que reciba dos parámetros, el primero será un string y el segundo otro string con lo que hay que eliminar del string.


// 3. Haz una función que reciba tres parámetros, el primero un array, el segundo un elemento a incluir dentro del array y el tercero será un string "pre" si el elemento se añade al principio y "post si se añade al final".


// 4. Haz una función que reciba dos parámetros, un array y un string, "pre" si se quiere eliminar un elemento al principio y "post" si se quiere eliminar al final.


// 5. Haz una función que reciba un array como parámetro, este será un array de numeros y se debe devolver el primero que sea impar.



