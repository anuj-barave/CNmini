function checkNetworkValue1() {
    var c0 = document.getElementById('c0').value;
    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var c3 = document.getElementById('c3').value;
    var c4 = document.getElementById('c4').value;
    var c5 = document.getElementById('c5').value;
    var c6 = document.getElementById('c6').value;
    var c7 = document.getElementById('c7').value;
    var c8 = document.getElementById('c8').value;
    var c9 = document.getElementById('c9').value;
    var c10 = document.getElementById('c10').value;
    var c11 = document.getElementById('c11').value;
    var c12 = document.getElementById('c12').value;
    var c13 = document.getElementById('c13').value;
    var c14 = document.getElementById('c14').value;
    var c15 = document.getElementById('c15').value;
    var c16 = document.getElementById('c16').value;
    var count=0;

    if (c0 == 'Straight Wire') {
        if (c1 == c2) {
            document.getElementById('btn1').style.backgroundColor = 'Green';
            setTimeout(doSomething, 2000);

            function doSomething() {
                document.getElementById('btn2').style.backgroundColor = 'Green';
                
            }
            count=count+1;


        }
        if (c3 == c4) {
            document.getElementById('btn3').style.backgroundColor = 'Green';
            setTimeout(doSomething1, 2000);
            function doSomething1() {
            document.getElementById('btn4').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c5 == c6) {
            document.getElementById('btn5').style.backgroundColor = 'Green';
            setTimeout(doSomething2, 2000);

            function doSomething2() {
            document.getElementById('btn6').style.backgroundColor = 'Green';}
            count=count+1;

        }
        if (c7 == c8) {
            document.getElementById('btn7').style.backgroundColor = 'Green';
            setTimeout(doSomething3, 2000);

            function doSomething3() {
            document.getElementById('btn8').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c9 == c10) {
            document.getElementById('btn9').style.backgroundColor = 'Green';
            setTimeout(doSomething4, 2000);

            function doSomething4() {
            document.getElementById('btn10').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c11 == c12) {
            document.getElementById('btn11').style.backgroundColor = 'Green';
            setTimeout(doSomething5, 2000);

            function doSomething5() {
            document.getElementById('btn12').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c13 == c14) {
            document.getElementById('btn13').style.backgroundColor = 'Green';
            setTimeout(doSomething6, 2000);

            function doSomething6() {
            document.getElementById('btn14').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c15 == c16) {
            document.getElementById('btn15').style.backgroundColor = 'Green';
            setTimeout(doSomething7, 2000);

            function doSomething7() {
            document.getElementById('btn16').style.backgroundColor = 'Green';}
            count=count+1;
        }
    }
    else {
        if (c1 == 'Orange & White' && c2 == 'Green & White') {
            document.getElementById('btn1').style.backgroundColor = 'Green';
            setTimeout(doSomething11, 2000);

            function doSomething11() {
            document.getElementById('btn2').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c3 == 'Orange' && c4 == 'Green') {
            document.getElementById('btn3').style.backgroundColor = 'Green';
            setTimeout(doSomething12, 2000);

            function doSomething12() {
            document.getElementById('btn4').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c5 == 'Green & White' && c6 == 'Orange & White') {
            document.getElementById('btn5').style.backgroundColor = 'Green';
            setTimeout(doSomething13, 2000);

            function doSomething13() {
            document.getElementById('btn6').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c7 == 'Blue' && c8 == 'Blue') {
            document.getElementById('btn7').style.backgroundColor = 'Green';
            setTimeout(doSomething14, 2000);

            function doSomething14() {
            document.getElementById('btn8').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c9 == 'Blue & White' && c10 == 'Blue & White') {
            document.getElementById('btn9').style.backgroundColor = 'Green';
            setTimeout(doSomething15, 2000);
            
            function doSomething15() {
            document.getElementById('btn10').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c11 == 'Green' && c12 == 'Orange') {
            document.getElementById('btn11').style.backgroundColor = 'Green';
            setTimeout(doSomething16, 2000);

            function doSomething16() {
            document.getElementById('btn12').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c13 == 'Brown & white' && c14 == 'Brown & White') {
            document.getElementById('btn13').style.backgroundColor = 'Green';
            setTimeout(doSomething17, 2000);

            function doSomething17() {
            document.getElementById('btn14').style.backgroundColor = 'Green';}
            count=count+1;
        }
        if (c15 == 'Brown' && c16 == 'Brown') {
            document.getElementById('btn15').style.backgroundColor = 'Green';
            setTimeout(doSomething18, 2000);

            function doSomething18() {
            document.getElementById('btn16').style.backgroundColor = 'Green';}
            count=count+1;
        }
    }
    if(count==8)
    {
      
        setTimeout(doSomething19, 3000);

        function doSomething19() {
        
        alert('Success');}
    }
    else
    {
        setTimeout(doSomething19, 3000);

        function doSomething19() {
        
        alert('Failed');}
    }
   
}

