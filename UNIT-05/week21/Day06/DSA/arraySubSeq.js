
//  GENRATING ALL SUBSEQUANCES

/*

function findIncregingSubSeq(arr, idx, subSeq) {

    if (idx == arr.length) {
        console.log(subSeq);
        return;
    }

    // adding element into subSeq array
    subSeq.push(arr[idx]);
    findIncregingSubSeq(arr, idx + 1, subSeq);


    // removing element into subSeq array
    subSeq.pop();
    findIncregingSubSeq(arr, idx + 1, subSeq);

}

let arr = [2, 6, 8];
let idx = 0;
let subSeq = [];
// let res =
findIncregingSubSeq(arr, idx, subSeq);
// console.log('res:', res)

*/


//  GENRATE INCRIGING SUBSEQUANCES LENGTH

// FIXME:   looking some weong fix it

function findMaxLength(arr, dpArr) {

    for (let j = 1; j < arr.length; j++) {
        for (let i = 0; i < j; i++) {
            if (arr[i] < arr[j]) {
                dpArr[j] = Math.max(dpArr[j], dpArr[j] + 1);
            }
        }
    }
    return Math.max(...dpArr);
}

let arr = [2, 5, 8, 9, 5, 7, 10];
let dpArr = Array(arr.length).fill(0).map(() => 1);
let res = findMaxLength(arr, dpArr);
console.log('res:', res)

