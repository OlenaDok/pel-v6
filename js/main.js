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
/*loadChart();
var divsMain = document.querySelectorAll('.bll-prd-select');
console.log('querySelectorAll ' + divsMain.length);
divsMain.
document.addEventListener("selectionchange1", function(){
    console.log('selectionchange');
    console.log(document.getSelection());
    loadChart();
});

document.getElementById("myBtn").addEventListener("click", function(){
    console.log('event');
   // console.log(document.getSelection());
    loadChart();});
*/
//bll-prd-select
