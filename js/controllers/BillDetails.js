//"use strict";
var myApp = angular.module('myBill');


var testdata = checkBillData('bill_total');
console.log('test json data passed: ' + testdata);

var bill_total = document.getElementById('bill_total');
var Totbill = JSON.parse(bill_total.innerHTML);



myApp.controller('SubsDetails', function ($scope, ChartService) {
    this.service = ChartService;
    var onpageIn , onPageOut;
    var  partToOpen = {} ;
    partToOpen.status = false;
    var partsOne;
    var icont;
    /* --to do --*/
    var msgBoxVisited;


    $scope.loaddatachart = function () {
        ChartService.loadChart();
    }
    /*$scope.subs = get_list(Totbill);*/
    $scope.billlist = Totbill.bill;
    $scope.getdetails = function (index) {
        var obj = Totbill.bill[index];
        $scope.parts = obj.bill_parts;
        $scope.services = obj.services;
        $scope.msgbox = obj.msgbox;
        //$scope.billitem = obj;
        $scope.$billselected = Totbill.bill[index];
        $scope.usageAll = obj.service_usageALL;
        $scope.usage = obj.service_usage;
        msgBoxVisited = false;

        $scope.indUseIn = 1;
        $scope.indUseOUT = 0;

        ChartService.loadChart();
      //  console.log('before serv');
        countBox();

    }

    $scope.showIn = function (value) {
        $scope.useFilter = value;
       // this.onpage = false;
        console.log('this.showIn  begin');
        console.log('useFilter ' + $scope.useFilter);

        console.log('this.onpageIn ' + onpageIn);
        console.log('this.onPageOut ' + onPageOut);

        if (value == 'in'){
            document.getElementById("usein").classList.add('slt-btn');
            document.getElementById("useout").classList.remove('slt-btn');
            //   //loadChart();
          //  this.onpage = !this.onpage;
            if (!onpageIn){
                console.log('load chart');
                ChartService.loadChart();
                onPageOut = !onPageOut;
                onpageIn = !onpageIn;
            }

           // onPageOut = !onPageOut;
            console.log('onpageIn ' + onpageIn);

        }
        if (value == 'out'){
            document.getElementById("useout").classList.add('slt-btn');
            document.getElementById("usein").classList.remove('slt-btn');
            //  ChartService.loadChart();//    loadChart();
            if (!onPageOut){
                console.log('load chart');
                ChartService.loadChart();
                onpageIn = !onpageIn;
                onPageOut = !onPageOut;
            }

           // onpageIn = !onpageIn;

        }
        console.log('this.onpageIn end ');
        console.log('this.onpageIn ' + onpageIn);
        console.log('this.onPageOut ' + onPageOut);


/*
        console.log('this.onpageIn ' + onpageIn);
        console.log('this.onpageIn ' + onPageOut);

 */
    }

    $scope.showData = function (index) {
        console.log('services index: ' + index);
        var indexElem = document.getElementById("$index");
        console.log('indexElem: ' + indexElem);
        partToOpen.index = index;
    }

    $scope.toggleDisplay = function(index) {
        console.log('toggleDisplay index: ' + index);
        $scope.part = index;
       // $scope.show = ! $scope.show;
       // var divs =  document.getElementsByClassName("lineChart");

        if ( $scope.showp2  === index ){
            $scope.showp2  = -index ;
            console.log('showp2: ' +  $scope.showp2);
        }
        else {
            $scope.showp2 = index ;
            console.log('showp2: ' +  $scope.showp2);
        }
        $scope.part2 = function(param){
            var to_return;

            partToOpen.index = param;
         //   partToOpen.status = !partToOpen.status;
            console.log('partToOpen part2 before check ' + partToOpen.index);
            console.log('partToOpen part2 before check' + partToOpen.status);

            if($scope.part === partToOpen.index){
                to_return = !partToOpen.status;

                console.log('to_return in check' + to_return);

            }else {
                return to_return = false;
            }
            partToOpen.status = to_return;
            console.log('to_return after check' + to_return);
            return to_return;
        }

        //$scope.isOpen = ! $scope.isOpen;
        $scope.showP2 = function(index, part, status) {
            console.log('index: ' + index + ' part= ' + part + ' status=' + status);
            var to_return;
            partToOpen.status = true;
            if (partToOpen.index === part && partToOpen.status === true){
                partToOpen.status = !partToOpen.status;
                $scope.status = 1;
             //  to_return = true;
                return true;

            }
            if (index !== part ){
                $scope.status = 0;
                to_return = false;

            }else {
                to_return = false;
                partToOpen.status = !partToOpen.status;

            }
            //return $scope.isOpen;
            console.log('to_return: ' + to_return);
            return to_return;
        }

        partsOne =  document.getElementsByClassName("part1");
        var singlePart = partsOne[index];
        var idiv = singlePart.getElementsByTagName('iplus');
        var isCurrState = idiv[0].classList[0];

        var partsTwo, singlePartTwo, secdev;


        if (isCurrState === 'plus') {
            idiv[0].classList.remove("plus");
            idiv[0].classList.toggle("minus");
            partsTwo =  document.getElementsByClassName("part2");
            singlePartTwo = partsTwo[index];
            console.log('singlePartTwo ' +  singlePartTwo.classList[1]);
            secdev = singlePartTwo.getElementsByTagName('secdev');
            singlePartTwo.classList.remove("hide");
        }
        if (isCurrState === 'minus') {
            idiv[0].classList.remove("minus");
            idiv[0].classList.toggle("plus");
            console.log('idiv ' +  idiv[0].classList[0]);
            partsTwo =  document.getElementsByClassName("part2");
            singlePartTwo = partsTwo[index];
            console.log('singlePartTwo ' +  singlePartTwo.classList[1]);
            secdev = singlePartTwo.getElementsByTagName('secdev');
            singlePartTwo.classList.toggle("hide");
        }

      //  secdev[0].classList.add("minus");

    };

    $scope.start = function() {
        console.log('in initial');
        $scope.billselected = Totbill.bill[0];
        $scope.useFilter = 'in';
        onpageIn = true;
        onPageOut = false;
      //  ChartService.loadChart();
        partToOpen.index = 0;
        //partToOpen_status = false;
        $scope.showp2 = -1;
        $scope.getdetails(0);

        var checkBox = document.getElementById("collapsible");
        checkBox.checked = false;

        var payment = document.getElementById('payment');
        payment.style.display = 'flex';

     /*   partsOne =  document.getElementsByClassName("payline");

        var singlePart = partsOne[0];*/
        icont = new Array();

    };

    $scope.showI = function(index) {
        partsOne =  document.getElementsByClassName("payline");
        console.log('msg showI index= ' +  index);

       /// console.log('partsOne= ' +  partsOne[0].innerHTML);

        var singlePart = partsOne[index];
        icont = new Array(singlePart.length);
        var idiv = singlePart.getElementsByTagName('idiv');

      /**  console.log('idiv[0].className = ' +  idiv[0].innerHTML);*/
       // $scope.parts[index];
      var info = singlePart.getElementsByTagName('ispan');
       /* console.log('info[0].innerHTML = ' +  info[0].innerHTML);*/
        var popupMSG = $scope.parts[index].submsg;

        var iInfo =  singlePart.getElementsByTagName("info");
        info[0].innerHTML = $scope.parts[index].submsg;
        var isCurrState = idiv[0].classList[1];
        console.log('isCurrState = ' +  isCurrState);

        icont[index] = true;
       if (isCurrState === 'ng-hide' ){
           /*
           idiv[0].classList.remove("hide");

           idiv[0].classList.toggle("show");
*/
          /* iInfo[0].classList.remove("active"); */
          // iInfo[0].classList.toggle("disactive");
           icont[index] = true;
       }
        if (isCurrState === 'show' ||  isCurrState === undefined){
            /*
            idiv[0].classList.remove("show");

            idiv[0].classList.toggle("hide");


            iInfo[0].classList.remove("disactive");
            iInfo[0].classList.toggle("active");
            */
            icont[index] = false;
        }

        $scope.iValue = icont;
/*
        var body = document.body;
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';

 */
    }

    $scope.disactive = function () {
      /*  console.log('disactive = ');*/

        for( var i = 0; i < icont.length; i++) {
            icont[i] = false;
        }
    }
    $scope.showMSGbox = function () {
        //msgbox-wrpD
        var divobject =  document.getElementsByClassName("msgbox-wrpD")[0];
        console.log('divobject = ' +  divobject.innerHTML);

        var divmsgbox = divobject.getElementsByTagName('msgdiv')[0];
        console.log('divmsgbox = ' +  divmsgbox.innerHTML);

        var msgbox1 = divmsgbox.getElementsByTagName('msgbox')[0];

        var msgbox = $scope.msgbox;

        console.log('msgbox = ' +  $scope.msgbox[0].msg);

        var boxStart = '<div class="msgBox-cont">' +
            '<a class="box-close" onclick="closeBox()">&times;</a>' +
            '<div class="box-ttl">תיבת ההודעות שלך</div>'+
            '<div class="box-cnt">' ;
        var boxEnd = '</div></div>';

        var dateStart = '<div class="msgBox-ttl col-3-2">';
        var dateEnd = '</div>';
        var msgStart = '<div class="msgBox-msg col-3-2">';
        var msgEnd = '</div>';
        var rowStart = '<div class="msgBox-cont-row">';
        var rowEnd = '</div>';

        var data;

        data = boxStart;

        for( var i=0; i < msgbox.length; i++) {
            data+= rowStart;
            data+= dateStart;
            data+= msgbox[i].title;
            data+= dateEnd;

            data+= msgStart;
            data+= msgbox[i].msg;
            data+= msgEnd;
            data+= rowEnd;
        }
       // data.append(boxEnd);


        data+= boxEnd;
        divmsgbox.innerHTML = data;

        divobject.style.visibility = 'visible';
        divobject.style.opacity = '1';

        var body = document.body;
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';

    }

    /* --to do --*/
    function countBox() {
        var divobjectCount =  document.getElementsByClassName("count")[0];
        if(!msgBoxVisited){
            msgBoxVisited = true;
          /*  divobjectCount.classList.toggle("hide");*/
        }
        else {
            divobjectCount.classList.remove("hide");
        }
    }

/*
    self.onpointerdown = function() {
      /*  var test = self.event.target;
        console.log('test self = ' + test);
        $scope.disactive();
    }
    */

    $scope.testDir = function (){
        console.log('test directiva working');
    }

    $scope.testDir2 = function (){
        console.log('test directiva2 working');
    }

    $scope.onClick = function(evt) {
        console.debug("Hello click event: %o ",evt);
    }
});



myApp.controller('CustomerDetails', function ($scope) {

    $scope.detail = {
        cust_id: Totbill.bill[0].subsciber,
        total: Totbill.bill[0].total
    }
});

/*
function get_list(bill) {
    var list = new Array();

    for (var sub of bill.bill) {
        if (sub.subsciber !== undefined) {
            /*console.log('subcriber: ' + sub.subsciber);
            list.push(sub.subsciber);
        }
    }
    return list;
}
*/
function checkBillData(elementID) {

    var data = document.getElementById(elementID);

    var result = data.innerHTML.replace(/ /g, "").replace(/\n/g, "").replace(/\t/g, "");

       var data = document.getElementById(elementID);
    
    var result = data.innerHTML.replace(/ /g, "").replace(/\n/g, "");

   // alert('before parse ' + (result));
    try {
        //JSON.parse(data.innerHTML);
        JSON.parse((result));
    } catch (err) {
        console.log('invalid: wrong data - ' + err);
        alert('smt was wrong// please try later error is' + err);
        return false;
    }
    return true;
}

function closeBox() {
    var divobject =  document.getElementsByClassName("msgbox-wrpD")[0];
    divobject.style.visibility = 'hidden';
    divobject.style.opacity = '0';

    var body = document.body;
    var scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
