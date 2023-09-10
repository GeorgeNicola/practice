// Find the pair that is equal to sum

const numbers = [1, 2, 3, 9, 5];
// const numbers = [1, 2, 4, 4];
const sum = 8;


function hasPairEqualToSum(numbers, sum){
    let pairs = {}

    for(let i=0; i<numbers.length; i++){
        if(pairs.hasOwnProperty(numbers[i]) && numbers[i] != i) {
            return [numbers[i], sum-numbers[i]]
        }

        pairs[sum-numbers[i]] = i;
    }

    return []
}

console.log(hasPairEqualToSum(numbers, sum))
