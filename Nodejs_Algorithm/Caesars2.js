function rot13(str) {
    return str.replace(/[A-Z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt() % 26 + 65);
    })
    return str;
}
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));