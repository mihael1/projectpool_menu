let menu = document.querySelector("#topitem");
let triangles = document.querySelector("#navbar")
//let javaScript = document.querySelector("#javascript")
let arrow = document.querySelector ("#arrow")
let bars = document.querySelector("#bars");
menu.addEventListener('click', menuUnfolds);

function menuUnfolds() {
    //javaScript.classList.add("js");
    arrow.classList.toggle("appear");
    bars.classList.toggle("change");
    console.log("clicked")
    let javaScript = document.querySelector('#js');
    javaScript.classList.toggle("moveFirst");
    let Css = document.querySelector('#css');
    Css.classList.toggle("moveCss");
    let htMl = document.querySelector('#html');
    htMl.classList.toggle("moveHtml");
    let know = document.querySelector('#git');
    know.classList.toggle("moveKnow");
    let pipePiper = document.querySelector('#pp');
    pipePiper.classList.toggle("movePipe");

}


/*
function swapBars(){
    console.log("bars");
if (state == 'bar'){
    myBar.setAttribute("#bars", "")
}
*/
