var bar = document.querySelector('.fa-bars');
var menu = document.querySelector('.menu');
bar.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// slider
let counter = 1

setInterval(()=>{
    document.querySelector('.img.show').classList.remove('show')
    const img = document.querySelector(`.img-${counter}`)
    img.classList.add('show')
    counter++

    if(counter > 4){
        counter = 1
    }

},3000)



 var countDownDate = new Date("Nov 12, 2022 16:37:52").getTime();

 // Run myfunc every second
 var myfunc = setInterval(function() {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
      
  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  // Result is output to the specific element
  document.getElementById("days").innerHTML = days +  "<br>days "
  document.getElementById("hours").innerHTML = hours + "<br>hours " 
  document.getElementById("mins").innerHTML = minutes + "<br>mins " 
  document.getElementById("secs").innerHTML = seconds + "<br>secs " 
      
  // Display the message when countdown is over
  if (timeleft < 0) {
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = ""
      document.getElementById("hours").innerHTML = "" 
      document.getElementById("mins").innerHTML = ""
      document.getElementById("secs").innerHTML = ""
      document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);



function scrolltop(){
  window.scrollTo(0, 0)
}


//copy text
document.querySelectorAll(".code").forEach(copyLinkContainer => {
  const inputField = copyLinkContainer.querySelector("input");
  const copyButton = copyLinkContainer.querySelector(".copy");

  inputField.addEventListener("focus", () => inputField.select());

  copyButton.addEventListener("click", () => {
    const text = inputField.value;

    inputField.select();
    navigator.clipboard.writeText(text);

    inputField.value = "Copied!";
    setTimeout(() => inputField.value = text, 2000);
  })
});


//gallery
document.querySelectorAll(".gal img").forEach(image =>{
  image.onclick = () =>{
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute('src');
  }
});
document.querySelector(".popup-image span").onclick =() =>{
  document.querySelector(".popup-image").style.display = "none";
}
