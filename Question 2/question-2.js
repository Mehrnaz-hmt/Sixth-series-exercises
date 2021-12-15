let a = [-1, 150, 190, 170, -1, -1, 160, 180];
let b = [-1, 150, 160, 170, -1, -1, 180, 190]

function sortTallPeople (arr) {
    if (Array.isArray(arr)) {
        let sortedArray = arr.sort()
        console.log(sortedArray)
    }
} 
console.log(sortTallPeople(a))