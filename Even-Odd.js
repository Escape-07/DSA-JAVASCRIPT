function SepratedEvenOdd(n) {
    const even = [];
    const odd = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }

    return { even, odd };
}

const result = SepratedEvenOdd(10);


console.log("Even numbers:", result.even);


console.log("Odd numbers:", result.odd);
