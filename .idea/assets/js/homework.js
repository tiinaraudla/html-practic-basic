var i;
var fib = [0, 1];

for (i = 2; i <= 12; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}
function fibonacci(num) {
    var x = 0;
    var y = 1;
    var z;
    var i = 0;
    for (i = 2; i < num; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return y;
}
var num = 10;
answer = fibonacci(num);

console.log("The 10th term of the Fibonacci series is: ", answer);