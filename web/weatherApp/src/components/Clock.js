import React from "react";
// часы
class Clock extends React.Component{
  render() {
    setInterval(()=>{
      // HTML элементы
      var hour = document.querySelector("#hour");
      var minutes = document.querySelector("#minutes");
      var seconds = document.querySelector("#seconds");
      var ampm = document.querySelector("#ampm");
      
      // часы минуты и секунды
      var h = new Date().getHours();
      var m = new Date().getMinutes();
      var s = new Date().getSeconds();

      // часы минуты и секунды
      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;


      var am = "AM";
      var pm = "PM";



      hour.innerHTML = h + " :";
      minutes.innerHTML = m + " :";
      seconds.innerHTML = s + " ";
      ampm.innerHTML = pm;

      if(h > 24){
        h = h - 24;
      }
      if (h < 12) {
        ampm.innerHTML = am;

      }
    });
    return(
      <div className="digitalClock">
    		<div id="hour"></div>
    		<div id="minutes"></div>
    		<div id="seconds"></div>
    		<div id="ampm"></div>
      </div>
    );
  }
}

export default Clock;
