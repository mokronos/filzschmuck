var pos = "0";

function navbar(){
    document.getElementById("myTopnav").style.animationPlayState="running";
}

function impr() {

    if (document.getElementById("blur").style.display == "none") {
        document.getElementById("impr").style.display = "block";
        document.getElementById("blur").style.display = "block";
}
else {
        document.getElementById("blur").style.display = "none";
        document.getElementById("impr").style.display = "none";
    }
}

function ini() {
    document.getElementById("blur").style.display = "none";
    document.getElementById("blur2").style.display = "none";
    document.getElementById("age").innerHTML = getAge(new Date(1967,12,16));
}


function bigimg(a) {
    if (document.getElementById("blur2").style.display == "none") {

        var w = document.getElementById(a).width;
        var h = document.getElementById(a).height;

        if (w>h) {
            document.getElementById("bigimg1").style.width="70%";
            document.getElementById("bigimg1").style.height="auto";
        } else {
            document.getElementById("bigimg1").style.height="70%";
            document.getElementById("bigimg1").style.width="auto";
        }
        document.getElementById("bigimg1").src=document.getElementById(a).dataset.src;
        document.getElementById("blur2").style.display = "block";
    }
    else {
        document.getElementById("blur2").style.display = "none";
    }
}


function navsmall(y) {

    y.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function navb() {
    document.getElementById("myTopnav").className="topnav";
    document.getElementById("navbut").className="container";
}


function getAge(dob) { 
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms); 
    
      return Math.abs(age_dt.getUTCFullYear() - 1970);
}
