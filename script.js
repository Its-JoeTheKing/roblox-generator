const firstStep = () => {
    var val = document.getElementById("user").value
    if (val.length === 0) {
        alert("Enter A Usearname PLease");
    } else {
        document.getElementById("con1").style = "display: none;";
        document.getElementById("con2").style = "display: block;";
        document.getElementsByTagName("h1")[0].innerText = "Generating Robux To Your Account ("+val+") ...";
    }
}
const secondStep = () => {
    document.getElementById("con2").style = "display: none;";
    document.getElementById("loading").style = "display: block;";
    setTimeout(()=>{
        document.getElementById("loading").style = "display: none;"
        CPABuildLock();
    },5000)
}
