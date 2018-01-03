function destroyer(arr) {

    var arr1 = arguments;
    for (var i = 0; i < arr1.length; i++) {
        arr = arr.filter(function (val) {
            return arr1[i] !== val;
        });
    }
    return arr;
}
console.log(destroyer([1, 2, 3, 1, 2, 9], 2, 3));