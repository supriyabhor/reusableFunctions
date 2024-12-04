//---------------------PART 1---------------------------------------
// Take an array of numbers and return the sum.
let sum = 0;
let numArray = [1, 2, 3, 4];
numArray.forEach((num) => {
    sum+=num;
})
console.log(`Sum of number = ${sum}`);
console.log('--------------------------------------------------');

// Take an array of numbers and return the average:

function average (array) {
    let avg =0;
    for (let i=0; i<array.length; i++) {
        avg+=array[i];
    // avg = sum / arrayrray.length;
    }
    avg/=array.length;
    return avg;
}
console.log(average(numArray));
console.log('--------------------------------------------------');

// Take an array of strings and return the longest string.
let stringArray = ["dog", "kitten", "horse", "cow", "to", "12"];
function longestString(stAr) {
    let string= "";
    let lMax=0;
    for (let i=0; i<stAr.length; i++) {
        let l=stAr[i].length;
        if (l>lMax) {
            lMax =l;
            string = stAr[i];
        }
    }
    return string;
}
console.log(longestString(stringArray));
console.log('--------------------------------------------------');



// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function longerThanNumber (array, num) {
    let string= "";
    let strArray = [];
    // let lMax=0;
    for (let i=0; i<array.length; i++) {
        let l=array[i].length;
        if (l>num) {
            string = array[i];
            strArray.push(string);
        }
    }
    return strArray;
}
console.log(longerThanNumber(stringArray,3));
console.log('--------------------------------------------------');

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let n=0;
function number(n){
    if(n<1)
    {
        return n;
    }
    number(n-1);
    console.log(n);

}
number(5);
console.log('--------------------------------------------------');

