function rot13(str) {
    var str1 = "";
    for (var i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            str1 += String.fromCharCode(str[i].charCodeAt() % 26 + 65);
        } else {
            str1 += str[i];
        }
    }
    return str1;
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK!!!"));