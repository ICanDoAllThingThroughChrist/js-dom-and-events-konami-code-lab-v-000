const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//You'll want to attach an event listener to document.body and
//keep track of index outside of the event handler
function init() {
let index = 0;
function onKeyDownHandler(e) {//https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
  //get value of key code from key map
  const key = parseInt(e.keycode||e.which)
  //compare e.which with code
  if(e.which === code[index]){
    //move to the next key in the code sequence
    index++;
    //if the last key is reached,
    if (index === code.length){
      //alert congratulatory
      alert('you found the code');
      index = 0;
    }
  } else {
    index = 0
  }
}
document.addEventListener('keydown', onKeyDownHandler);
  // Write your JavaScript code inside the init() function
}
//events parameters: https://www.w3schools.com/jsref/dom_obj_event.asp
//check for 'keydown' events. If the user enters this special code,
//pressing all ten of the keys in the correct order,
//alert() a congratulatory message. However,
//if they press a key out of sequence or a key that isn't part of the Konami code,
//don't alert() anything and
//simply keep listening for all ten keydowns in the correct order.

//When you're testing the code out in the browser,
//be sure to call init() to attach the event listener and set everything up!
