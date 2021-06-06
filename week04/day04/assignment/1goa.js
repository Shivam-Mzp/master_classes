
var rotate = function (numsa, k) {
    var final = numsa.splice(numsa.length - k);
    for (var i = 0; i < final.length; i++) {
        numsa.splice(i, 0, final[i]);
    }
    return numsa;
}


function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[0].split(" ").map(Number);
    var newInput2 = newInput[1].split(" ").map(Number);


    var result1 = rotate(newInput2, newInput1[1]);
    console.log(result1);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`6 4
1 2 5 4 0 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });

}