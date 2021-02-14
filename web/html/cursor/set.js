(function() {
  var cursor = document.querySelector('.cursor');
  var cursorLazy = document.querySelector('.cursor-lazy');

  var editCursor = function editCursor(event){
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
    cursorLazy.style.left = event.clientX + 'px';
    cursorLazy.style.top = event.clientY + 'px';
  }

  window.addEventListener('mousemove', editCursor);
})();