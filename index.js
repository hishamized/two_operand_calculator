    let box1;
    let box2;
    let num1;
    let num2;
    let ans;
    let clear;
    function addition(){
       box1 = document.getElementById("display1").value;
       box2 = document.getElementById("display2").value;
       num1 = parseFloat(box1);
       num2 = parseFloat(box2);
       ans = num1 + num2;
       document.getElementById("display3").value = ans;   
    }
    function subtraction(){
        box1 = document.getElementById("display1").value;
       box2 = document.getElementById("display2").value;
       num1 = parseFloat(box1);
       num2 = parseFloat(box2);
       ans = num1 - num2;
       document.getElementById("display3").value = ans;    
    }
    function division(){
        box1 = document.getElementById("display1").value;
       box2 = document.getElementById("display2").value;
       num1 = parseFloat(box1);
       num2 = parseFloat(box2);
       ans = num1/num2;
       document.getElementById("display3").value = ans;   
    }
    function multiplication(){
        box1 = document.getElementById("display1").value;
       box2 = document.getElementById("display2").value;
       num1 = parseFloat(box1);
       num2 = parseFloat(box2);
       ans = num1*num2;
       document.getElementById("display3").value = ans;   
    }
    function exponent(){
       box1 = document.getElementById("display1").value;
       box2 = document.getElementById("display2").value;
       num1 = parseFloat(box1);
       num2 = parseFloat(box2);
       ans = Math.pow(num1, num2);
       document.getElementById("display3").value = ans;   
    }
    function clean(){
        clear = "";
        document.getElementById("display1").value = clear;
        document.getElementById("display2").value = clear;
        document.getElementById("display3").value = clear;
    }