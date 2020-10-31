'use strict';

// フィボナッチ数列
// F0 = 0
// F1 = 1
// Fn+2 = Fn + Fn+1 (n >= 0)

function fib(n) {  
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
    // return null;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
