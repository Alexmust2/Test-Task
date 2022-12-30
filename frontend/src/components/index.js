const queue = {
    1: 1,
    2: 4,
    "40px": 7,
    4: 10,
    5: 13,
    "str": "string"
}

// const keylist = Object.keys(queue)

// keylist.forEach(function(element, index){
//     setTimeout(function(){
//         console.log(queue[element])
//     },index * 2000)
// })

function getkeybyvalue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}

console.log(getkeybyvalue(queue, 7))