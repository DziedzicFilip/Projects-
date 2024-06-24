




window.onload=initLinks;
var obrazki =  ["IMGO/Nowy jork.png","IMGO/Seul.png","IMGO/Tokio.png","IMGO/Meksyk/baner .png","IMGO/Szanghaj/Szanghaj_baner .png"];

var thisimg=0;




function initLinks(){
    document.getElementById("button1").onclick =processPrevious;
    document.getElementById("button2").onclick = processNext;
    
}

    
function     processPrevious (){
    
    if(thisimg==0)
            thisimg=obrazki.length;
    thisimg--;
     
    document.getElementById("banerek").src=obrazki[thisimg];
    
}
    
function   processNext(){
     thisimg++;
    if(thisimg==obrazki.length)
        thisimg=0;
   
     document.getElementById("banerek").src=obrazki[thisimg];
     
    
}



