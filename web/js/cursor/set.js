(function() {
  var cursor = document.querySelector('.cursor');
  var editCursor = function editCursor(event){
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  }
  window.addEventListener('mousemove', editCursor);
})();