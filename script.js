const pos_1 = "-300%";
const pos_2 = "-100%";
const pos_3 = "7.5%" ;
const pos_4 = "300%" ;
const pos_5 = "500%" ;    


function gotoPage2(){
    const con1 = document.querySelector("#con1");
    const con2 = document.querySelector("#con2");
    const con3 = document.querySelector("#con3");
    const bar = document.querySelector("#progress");
    con1.style.left = pos_4
    con2.style.left = pos_3
    con3.style.left = pos_2
    bar.style.width = "66%";
}

function gotoPage1(){
    const bar = document.querySelector("#progress");
    con1.style.left = pos_3 ;
    con2.style.left = pos_2 ;
    con3.style.left = pos_1 ;
    bar.style.width = "33%";
}

function gotoPage3(){
    const bar = document.querySelector("#progress");
    con1.style.left = pos_5 ;
    con2.style.left = pos_4 ;
    con3.style.left = pos_3 ;
    bar.style.width = "100%";
}

function submit(){
    alert("Submit button pressed!")
}


