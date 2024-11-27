// let btn =document.querySelector("#btn");
// let content = document.querySelector(".content");
// btn.addEventListener("click",saveUser);

// function saveUser() {
//     content.textContent = "Success! You have saved your data";
//     setTimeout(
//         () => {
//           content.textContent = "";
// },2000);
// }

var btn =document.querySelector("#btn");
var clock =document.querySelector("#clock");

btn.addEventListener("click", displayTime);

function displayTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var time = hours +":" + minutes +":" + seconds;
  clock.textContent = time;
  setInterval(displayTime,1000);
}

