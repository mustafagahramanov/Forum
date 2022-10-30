const password = document.getElementById("password");
const eye = document.getElementById("eye");

var visible = false;

function show() {
    if(visible) {
        password.type = 'password';
        visible = false
        eye.style.color = "#8d8585"
    } else {
        password.type = 'text'
        visible = true;
        eye.style.color = "black"
    }
}

function check() { 
    var passVall = document.getElementById("password").value;
    passVall = passVall.trim();
    document.getElementById("password").value = passVall;
    document.getElementById("count").innerHTML = "Length: " + passVall.length;
    if(passVall.length>8){
        document.getElementById("check1").style.color = "green";
    } else {
        document.getElementById("check1").style.color = "#ff314d";
    }
    if(passVall.length<20){
        document.getElementById("check2").style.color = "green";
    } else {
        document.getElementById("check2").style.color = "#ff314d";
    }
    if(passVall.match(/[0-9]/g)){
        document.getElementById("check3").style.color = "green";
    } else {
        document.getElementById("check3").style.color = "#ff314d";
    }
    if(passVall.match(/[!@#$%^&*_=+-]/g)){
        document.getElementById("check4").style.color = "green";
    } else {
        document.getElementById("check4").style.color = "#ff314d";
    }
    if(passVall.match(" ")){
        document.getElementById("check5").style.color = "#ff314d";
    } else {
        document.getElementById("check5").style.color = "green";
    }
    if(passVall.match(/[A-Z]/g)){
        document.getElementById("check6").style.color = "green";
    } else {
        document.getElementById("check6").style.color = "#ff314d";
    }
}