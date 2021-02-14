function fun1() {

 var rtl=document.getElementById('rtl');
 var rtr=document.getElementById('rtr');
 var rbr=document.getElementById('rbr');
 var rbl=document.getElementById('rbl');

 
 var ttl=document.getElementById('ttl');
 var ttr=document.getElementById('ttr');
 var tbr=document.getElementById('tbr');
 var tbl=document.getElementById('tbl');

 var block =document.getElementById('block');
 
 ttl.value=rtl.value;
 ttr.value=rtr.value;
 tbr.value=rbr.value;
 tbl.value=rbl.value;

block.style.borderRadius=rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px ";
}