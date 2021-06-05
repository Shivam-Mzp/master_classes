
function divByM(arr, M) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % M == 0) {
            res += -1 + " "
        } else {
            res += arr[i] + " "
        }
    }
    return res;
}

function runProgram(input) {

    var Input = input.split("\n");
    var InputTimes = Number(Input[0]);

    for (var i = 1; i <= InputTimes; i++) {

        var ByM = Input[i * 2 -1].split(" ").map(Number);
        var newInp = Input[i * 2].split(" ").map(Number);

        var ans = divByM(newInp, ByM[1]);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3 3
1 3 2
5 3
3 3 2 9 7`);
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
