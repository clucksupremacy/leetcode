const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let y = x % 10;
    let a = x;

    while (a >= 10) {
        a = Math.floor(a / 10);
        let remainder = a % 10;
        y = y * 10 + remainder;
    }

    return (y === x);
};