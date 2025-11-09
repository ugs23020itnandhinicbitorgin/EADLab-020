function fibonacci(n) {
    let a = 0, b = 1;
    let series = [];
    for (let i = 0; i < n; i++) {
        series.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return series;
}

console.log(fibonacci(5));
