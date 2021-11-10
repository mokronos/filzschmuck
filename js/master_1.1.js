
var pos = "0";

function navbar(){
    /*var x=document.documentElement.scrollTop || document.body.scrollTop;
    if (x<pos){
        document.getElementById("myTopnav").style.animationPlayState="running";
    }
    pos=x;*/

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
    resize();
}


function bigimg(a) {
    if (document.getElementById("blur2").style.display == "none") {

        if (a=="img2"|| a=="img3"){
            document.getElementById("bigimg1").style.height="70%";
            document.getElementById("bigimg1").style.width="auto";
        }
        else{
            document.getElementById("bigimg1").style.height="auto";
            document.getElementById("bigimg1").style.width="70%";
        }

        document.getElementById("blur2").style.display = "block";
        document.getElementById("bigimg1").src=document.getElementById(a).dataset.src;
    }
    else{
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


function resize() {

    var w=window.innerWidth;
    var hges=0;
    if (w>=1300){
        w=w/2;
        var hges= ((((w*0.4)*1.5)+((w*0.4)/1.5))/0.8)+"px";
    }
    else {
        var hges= ((((w*0.4)*1.5)+((w*0.4)/1.5))/0.8)+"px";
    }



    document.getElementById("cont2").style.height=(hges);

}

function getAge(dob) { 
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms); 
    
      return Math.abs(age_dt.getUTCFullYear() - 1970);
}
