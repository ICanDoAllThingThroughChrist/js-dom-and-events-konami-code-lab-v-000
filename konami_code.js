const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// //You'll want to attach an event listener to document.body and
// //keep track of index outside of the event handler
//
// let index = 0;
// function onKeyDownHandler(e) {//https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
//When you're testing the code out in the browser,
//be sure to call init() to attach the event listener and set everything up!
function init() {
  // Write your JavaScript code inside the init() function
  //
  //
  let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("EASTER EGG!!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  document.addEventListener('keydown', onKeyDownHandler);

}
