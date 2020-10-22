//declare variable

var s=0;


setInterval("slideShow()" ,3000);
setInterval("timer()" ,1000);



function timer() {
    
    s++;
    document.getElementById("secs").innerHTML=s%60;
    document.getElementById("mins").innerHTML=Math.floor(s/60)%60;
    document.getElementById("hrs").innerHTML=Math.floor(s/60/60);
}
