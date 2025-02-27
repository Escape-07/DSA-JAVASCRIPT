function printFibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    for (let i = 1; i < n; i++) {
        console.log(b);
        let next = a + b;
        a = b;
        b = next;
    }
}

printFibonacci(10);




