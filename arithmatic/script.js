function add(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=parseInt(a)+parseInt(b);
    document.getElementById("t3").value=c;
}
function sub(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=parseInt(a)-parseInt(b);
    document.getElementById("t3").value=c;
}
function mul(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=parseInt(a)*parseInt(b);
    document.getElementById("t3").value=c;
}
function div(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=parseInt(a)/parseInt(b);
    document.getElementById("t3").value=c;
}
function mod(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=parseInt(a)%parseInt(b);
    document.getElementById("t3").value=c;
}