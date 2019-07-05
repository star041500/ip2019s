/*

*/
function update(){
    var x=document.getElementById('ch').value;
    var ele=document.getElementById('ch2');
    var y='';
    for (var i = 0;i< x.length; i++){
      y+=x.charAt(i)
      y+=' U+ ';
      y+=x.charCodeAt(i).toString(16).toUpperCase();
      y+='<br>';
    } 
    ele.innerHTML=y ;
    document.getElementById('ch1').innerHTML=
    document.getElementById('ch').value.replace('貓','娘')
}

function start(e) {
    document.getElementById('ch').addEventListener("input", update);
    update();
}
/*
++www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
