// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//     inputString = inputString.split("\n");

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    const sockCounts = new Map();
    let pairs = 0;

    for (let sock of ar) {
        if (sockCounts.has(sock)) {
            sockCounts.set(sock, sockCounts.get(sock) + 1);
        } else {
            sockCounts.set(sock, 1);
        }
    }

    for (let count of sockCounts.values()) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
}

function main() {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Masukkan jumlah kaos kaki (n): ", (nInput) => {
        const n = parseInt(nInput.trim(), 10);

        rl.question("Masukkan warna kaos kaki (array ar): ", (arInput) => {
            const ar = arInput
                .trim()
                .split(" ")
                .map((arTemp) => parseInt(arTemp, 10));

            const result = sockMerchant(n, ar);

            console.log(`Jumlah pasangan kaos kaki: ${result}`);
            rl.close();
        });
    });
}

main();
