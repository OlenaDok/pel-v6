"use strict";
/*document.getElementById('collapsible1').rrr = function() {
    console.log('Checked state -' + this.checked);
    if (this.checked) {
        console.log('do smth');


    }
}*/

function displayData() {
    // Get the checkbox
    var checkBox = document.getElementById("collapsible");
    var x,y;
    // Get the output text
    var text = document.getElementById("cust-det-data");
    var arrow = document.getElementById("lbl-toggle-arr");

    // If the checkbox is checked, display the output text
    if (checkBox.checked === true){
        console.log('do smth');
        text.style.display = "flex";
        y = 'rotate(-90deg) translateX(-15px)';
        arrow.style.transform = y;


    } else {
        text.style.display = "none";
        x = 0;
        arrow.style.transform = 'rotate(' + x + 'deg)';
    }
}

function getData(element) {
    var activenav = document.getElementById(element);

    var navs = document.getElementsByTagName('nav');

    for(var i=0; i < navs.length; i++ ){
        if(element === navs.item(i).id){
            activenav.classList.add('active');
        }else {
            navs.item(i).classList.remove('active');
        }
    }
    var usage = document.getElementById('usage');
    var payment = document.getElementById('payment');
    var add_act = document.getElementById('add_act');

    switch (element) {
        case 'pay':
            payment.style.display = 'flex';
            usage.style.display = 'none';
            add_act.style.display = 'none';
            break;
        case 'use':
            payment.style.display = 'none';
            usage.style.display = 'block';
            add_act.style.display = 'none';
            break;
        case 'act':
            payment.style.display = 'none';
            usage.style.display = 'none';
            add_act.style.display = 'flex';
            break;
    }

}
/*
function loadChart() {
    drawLineChart();
    console.log('drawLineChart in main');
    drawDonutChart();
    console.log('drawDonutChart in main');
}
*/
document.addEventListener('DOMContentLoaded', function () {

        // loadChart()
        console.log('DOMContentLoaded')
    }
);
console.log('main');


function getBrowser() {
    var ua = navigator.userAgent;

    var msie = ua.indexOf("MSIE ");
    console.log('msie= ' + msie);

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        var ver =  parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    console.log('ver= ' + ver);

}
getBrowser();
/*
function ieNotSuported()
{$("body").prepend("<div class='overlay'></div>"),$("body").prepend("<div class='ex8msg'>אתר פלאפון נתמך בגרסת דפדפן Internet Explorer 11 ומעלה  בלבד</div>"),$("body").css("overflow","hidden"),$(".scroll-prompt").css("display","none")}
var ua=window.navigator.userAgent,msie=ua.indexOf("MSIE "),rv=-1;
if(msie>0||navigator.userAgent.match(/Trident.*rv\:11\./))
    if(isNaN(parseInt(ua.substring(msie+5,ua.indexOf(".",msie)))));
    else
        {var ex8=parseInt(ua.substring(msie+5,ua.indexOf(".",msie)));
        if("8"==ex8||"7"==ex8||"6"==ex8||"9"==ex8||"10"==ex8){
            !function(e,i,n,r,s,t,a){t=i.createElement(n),
                a=i.getElementsByTagName(n)[0],
                t.src="/digitalsite/scripts/libs/jquery-1.9.1.min.js",
                a.parentNode.insertBefore(t,a)}(window,document,"script");
var intervalId=setInterval(function(){"undefined"!=typeof $&&(clearInterval(intervalId),ieNotSuported())},50)}}

ieNotSuported();
*/
    const ipop = document.getElementsByTagName('idiv');

window.onclick = function(event) {

    console.log('mouse event');
    //alert(event.target)
    if (event.target == ipop) {
        ipop.style.display = "none";
    }
}

function closePops () {
    console.log('u want close pops');
    const ipop = document.getElementsByTagName('idiv');
    console.log('ipop = ' + ipop.length);
    for (var i = 1; i < ipop.length ; i++){
        ipop[i].classList.toggle("show");
    }
}

