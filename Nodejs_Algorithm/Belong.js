function where(arr, num) {

    arr.push(num);
    arr.sort(function (x, y) {
        return x - y;
    });

    return arr.indexOf(num);
}
console.log(where([0.5, 1, 2, 3, 4], 1.5));
//console.log(arr1);

var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports);
console.log(total);