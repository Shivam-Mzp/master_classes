function runProgram(input) {
    var input = input.split("\n");
    var newInput = input[1].trim().split(" ").map(Number);
    var Input2 = Number(input[0]);
    if (Input2 == 6) {
        var sum = 1;
        var sum2 = 1;
        var sum3 = 1;
        for (var i = 0; i < newInput.length; i++) {
            if (i == 0 || i == 1) {
                sum *= newInput[i]
            } else if (i == 2 || i == 3) {
                sum2 *= newInput[i]
            } else if (i == 4 || i == 5) {
                sum3 *= newInput[i]
            }
        }
        console.log(sum + sum2 + sum3);
    } else if (Input2 === 10) {
        var sum = 1;
        var sum2 = 1;
        var sum3 = 1;
        var sum4 = 1;
        var sum5 = 1;
        for (var i = 0; i < newInput.length; i++) {
            if (i == 0 || i == 1) {
                sum *= newInput[i]
            } else if (i == 2 || i == 3) {
                sum2 *= newInput[i]
            } else if (i == 4 || i == 5) {
                sum3 *= newInput[i]
            } else if (i == 6 || i == 7) {
                sum4 *= newInput[i]
            } else if (i == 8 || i == 9) {
                sum5 *= newInput[i]
            }
        }
        console.log(sum + sum2 + sum3 + sum4 + sum5);
    } else if (Input2 === 8) {
        var sum = 1;
        var sum2 = 1;
        var sum3 = 1;
        var sum4 = 1;
        for (var i = 0; i < newInput.length; i++) {
            if (i == 0 || i == 1) {
                sum *= newInput[i]
            } else if (i == 2 || i == 3) {
                sum2 *= newInput[i]
            } else if (i == 4 || i == 5) {
                sum3 *= newInput[i]
            } else if (i == 6 || i == 7) {
                sum4 *= newInput[i]
            }
        }
        console.log(sum + sum2 + sum3 + sum4);
    } else {
        var sum = 1;
        var sum2 = 1;
        for (var i = 0; i < newInput.length; i++) {
            if (i == 0 || i == 1) {
                sum *= newInput[i]
            } else if (i == 2 || i == 3) {
                sum2 *= newInput[i]
            }
        }
        console.log(sum + sum2);
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
5 2 4 5`);
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