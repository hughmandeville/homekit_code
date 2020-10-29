
var colors = ["#00E5FF", "#00E676", "#FFAB40", "#2196F3", "#651FFF", "#EA80FC", "#E040FB", "#FF5722", "#BCAAA4"];

$(function() {
    let i = Math.floor(Math.random() * Math.floor(colors.length));
    $("html").css("background-color", colors[i]);
});