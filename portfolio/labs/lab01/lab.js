/*

*/


function start(e) {
     var name=[
     {
        char: '劉',
        big5: 'BC12',
        cns: '1-6C2C',
        unicode: '5289'
     },
     {
        char: '冠',
        big5: 'AB61',
        cns: '1-5025',
        unicode: '51A0'
     },
     {
        char: '宏',
        big5: 'A7BB',
        cns: '1-497B',
        unicode: '5B8F'
     }
     ];
     var skr=document.getElementById("SKR");

     for(var i=0; i<3; i++){
        skr.innerHTML+=name[i].char;
        skr.innerHTML+=' big5= ';
        skr.innerHTML+=name[i].big5;
        skr.innerHTML+=' cns= ';
        skr.innerHTML+=name[i].cns;
        skr.innerHTML+=' unicode= ';
        skr.innerHTML+=name[i].unicode;
        skr.innerHTML+='<br>';
     }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
