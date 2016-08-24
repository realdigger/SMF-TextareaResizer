// textareaResizer.js
// The script dynamically changes height of a textarea (actually any HTML element)
// (c) 2008 Leonid Shevtsov <leonid@shevtsov.me> (http://leonid.shevtsov.me)
// Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported License

var minH=50;// Minimal height of the field
var startH=0;
var startY=0;
var textarea=null;
var oldMouseMove=null;
var oldMouseUp=null;

function textareaResizer(e){
    if (e == null) { e = window.event }
    if (e.preventDefault) {
        e.preventDefault();
    }; 
    resizer = (e.target != null) ? e.target : e.srcElement;
    textarea = document.getElementById(
      resizer.id.substr(0,resizer.id.length-8)
    );
    startY=e.clientY;
    startH=textarea.offsetHeight;
    oldMouseMove=document.onmousemove; 
    oldMouseUp=document.onmouseup;
    document.onmousemove=textareaResizer_moveHandler;
    document.onmouseup=textareaResizer_cleanup;
    return false;
}

function textareaResizer_moveHandler(e){
  if (e == null) { e = window.event } 
  if (e.button<=1){
     curH=(startH+(e.clientY-startY));
     if (curH<minH) curH=minH;
     textarea.style.height=curH+'px';
     return false;
  }i
}

function textareaResizer_cleanup(e) {
  document.onmousemove=oldMouseMove;
  document.onmouseup=oldMouseUp;
}
