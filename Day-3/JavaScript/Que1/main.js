// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

function compareObj(obj1, obj2) {
    for (let key in obj2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

let obj1 = {
    name: "Harsh",
    age: 20,
    city: "Ahmedabad"
}

let obj2 = {
    name: "Harsh",
    age: 20
}

console.log(compareObj(obj1, obj2));
console.log(compareObj(obj2, obj1));
