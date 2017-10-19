let menu = document.querySelector("#topitem");
let triangles = document.querySelector("#navbar")
//let javaScript = document.querySelector("#javascript")
menu.addEventListener('click', menuUnfolds);

function menuUnfolds() {
    //javaScript.classList.add("js");
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
