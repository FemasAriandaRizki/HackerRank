"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Initialize scores
    let aliceScore = 0;
    let bobScore = 0;

    // Loop through the triplets
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
        // No action if a[i] === b[i]
    }

    // Return scores as an array
    return [aliceScore, bobScore];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((aTemp) => parseInt(aTemp, 10));

    const b = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((bTemp) => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
