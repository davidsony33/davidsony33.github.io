// Include save last active element
// var lastFocus;
//
// function modalShow () {
//   lastFocus = document.activeElement;
// }
//
// function modalClose () {
//   lastFocus.focus(); // place focus on the saved element
// }

// Dismissing modals
function modalClose ( e ) {
  if ( !e.keyCode || e.keyCode === 27 ) {
    // code to close modal goes here
  }
}

document.addEventListener('keydown', modalClose);
