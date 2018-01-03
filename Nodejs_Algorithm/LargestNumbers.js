function largestOfFour(arr) {

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i][0];
        for (var j = 0; j < arr[i].length; j++) {
            arr1 = Math.max(arr1, arr[i][j]);
        }
        newArr.push(arr1);
    }
    return newArr;
}
console.log(largestOfFour([[4, 25, 1, 3], [3, 2, 18, 6], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
