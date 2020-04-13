//1
function capital(str) {
    newstr = "";
    for (i in str) {
        if (i == 0 || str[i-1] == " ") {
            newstr += str[i].toUpperCase();
        }
        else {
            newstr += str[i];
        }
    }
    return newstr;
}

console.log(capital("new words all listed"))
console.log(capital("hello"))

//2
function get_largest(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    }
    else if (n2 > n3) {
        return n2;
    }
    else {
        return n3;
    }
}

console.log(get_largest(1,2,3));
console.log(get_largest(3,2,1));
console.log(get_largest(1,3,2));

//3
function right(str) {
    newstr = str;
    if (str.length >= 3) {
        newstr = "";
        for (i=str.length - 3; i < str.length; i++) {
            newstr += str[i];
        }
        for (i=0; i < str.length - 3; i++) {
            newstr += str[i];
        }
    }
    return newstr;
}

console.log(right("Javascript"));
console.log(right("Python"));
console.log(right("hi"));

//4
function angle_Type(angle) {
    res = "angle";
    if (angle >= 0 && angle < 90) {
        res = "Acute " + res;
    }
    else if (angle == 90) {
        res = "Right " + res;
    }
    else if (angle < 180) {
        res = "Obtuse " + res;
    }
    else if (angle == 180) {
        res = "Straight " + res;
    }
    return res;
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

//5
function array_max_sum(arr, num) {
    largest = 0;
    for (i = 0; i <= arr.length - num; i++) {
        sum = 0;
        for (j = 0; j < num; j++) {
            sum += arr[i + j];
        }
        if (sum > largest) {
            largest = sum;
        }
    }
    return largest;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
