function runProgram(input) {
    var input1 = Number(input);

    for (var i = 1; i <= (input1 * 2) + 1; i++) {
        var result = "";
        for (var j = 1; j <= input1; j++) {
            if (i == input1 + 1) {
                result += "**";
            } else {
                result += " ";
            }
        }
        result += "*";
        console.log(result);
    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`3`);
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