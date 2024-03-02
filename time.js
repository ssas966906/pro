function time(){
  let day = new Date();
  let now = day.toLocaleTimeString();
  document.querySelector('#time').innerHTML = now;
}
setInterval(time, 1000);
