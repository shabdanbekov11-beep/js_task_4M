const stringT = 'GeeksOshEdu';
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    } else {
        return str;
    }
}
console.log(truncateString(stringT, 8));
