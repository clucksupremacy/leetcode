const isPalindrome = function(x) {
    let string = x.toString();

    for (i = 0; i < string.length; i++) {
        first_digit = string[i];
        last_digit = string[string.length - (i + 1)];

        if (first_digit !== last_digit) {
            return false;
        } else {

        }
    }
    return true;
};