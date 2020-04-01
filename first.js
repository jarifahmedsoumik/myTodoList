var listedItem=document.getElementsByTagName("LI");
var i;
for(i=0;i<listedItem.length;i++){
    var span= document.createElement("SPAN");
    var txt= document.createTextNode("\u2212"); //unicode 
    span.className= "close";
    span.appendChild(txt);
    listedItem[i].appendChild(span);
}


//closeButton closing
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

 //creating new datas

 function newElement(){
     var li=document.createElement("li");
     var inputData = document.getElementById("data").value;
     var t=document.createTextNode(inputData);
     li.appendChild(t);
     if(inputData===''){
         alert("Write Something");
     }
     else{
         document.getElementById("listed").appendChild(li);
     }
     document.getElementById("data").value="";
     var span= document.createElement("SPAN");
    var txt= document.createTextNode("\u2212"); //unicode 
    span.className= "close";
    span.appendChild(txt);
    li.appendChild(span);
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}