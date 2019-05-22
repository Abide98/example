
document.getElementById("check").onclick = function(){
    var guessNumber = document.getElementById("guess").value;
    var x = 6;
    if (guessNumber == x) {
        alert("correct");
    } else {
        alert("incorrect");
    }
}