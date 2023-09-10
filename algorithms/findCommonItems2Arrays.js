const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
//return false

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
//return true

function hasCommonItems(arr1, arr2){

    // Naive Solution / 
    // for(let i=0; i<arr1.length; i++){
    //     for(let j=0; j<arr1.length; j++){
    //         if(arr1[i] === arr2[j]) return true
    //     }
    // }

    let items = new Set();
    let i;

    for(i=0; i<arr1.length; i++){
        items.add(arr1[i])
    }

    for(i=0; i<arr2.length; i++){
        if(items.has(arr2[i])) {
            return true
        }
    }

    return false
}

console.log(hasCommonItems(array1, array2))