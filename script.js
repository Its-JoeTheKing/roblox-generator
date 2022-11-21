const firstStep = () => {
    document.getElementById("con1").style = "display: none;";
    document.getElementById("con2").style = "display: block;";
}
const secondStep = () => {
    document.getElementById("con2").style = "display: none;";
    document.getElementById("loading").style = "display: block;";
    setTimeout(()=>{
        document.getElementById("loading").style = "display: none;"
        CPABuildLock();
    },5000)
}