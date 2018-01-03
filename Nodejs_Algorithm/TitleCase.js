function titleCase(str) {
    var arr1 = str.toLowerCase().split(" ");
    var arr2 = arr1.map(function (x) {
        return x.replace(x.charAt(0), x.charAt(0).toUpperCase());
    });

    return arr2.join(' ');
}
console.log(titleCase("I'm a little tea pot! HERE IS MY HANDLE HERE IS MY SPOUT"));
