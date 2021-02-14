var wrp = document.getElementById('wr');
var countInput = document.getElementById('count');
var plus = document.getElementById('plus');
var units = countInput.value.replace(/\d/g, '');
plus.onclick = function() {
    countInput.value = parseInt(countInput.value)+1+units;
};
