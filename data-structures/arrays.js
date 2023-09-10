
Array.prototype.customPush = function(x) {
    return this.push(x)
}

let array = ["a", "b", "c", "d"];

array.customPush("e") //O(1)

array.splice(2, 0, "b2") //O(n)

array.splice(3, 1, "c2") //O(n)

console.log(array)