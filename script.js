// ** Snowing ** //
for(let i = 0; i < 50; i++) {
    let snow = document.createElement('div');
    let po = Math.floor(Math.random()*100);
    let d = Math.floor(Math.random()*10000);
    let snowBlur = Math.floor(Math.random()* 15);
  
    snow.id = 'snow';
    snow.style.left = po + '%';
    snow.style.animationDuration = d + 'ms';
    snow.style.filter = `blur(${snowBlur +2}px)`;
  
    document.body.appendChild(snow);
  }


  

// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

document.getElementById("notToday").src="./img/grinch-yes-no.gif";


// var d = new Date();
// var todaysDate = d.getDate();


  
  //  * Array Appending from folder

  // * Versjon 1
  // const imgCont = document.querySelector(".imageContainer");
  
  // for (let i = 1; i < 25; i++){
  //   const img = document.createElement("img");
  //   img.src = `/baubels/b${i}.png`;
    
  //   imgCont.append(img);
  
  // }
  // * Versjon 2
  
// const imgCont = document.querySelector(".imageContainer");

// imgArray = [
//   "img1.png",
//   "img1.png",
//   "img1.png",
//   "img1.png",
//   "img1.png",
//   "img1.png",
//   "img1.png",
// ];

// imgArray.forEach((e) => {
//   const img = document.createElement("img");
//   img.src = `./images/${e}`;
//   imgCont.append(img);
// });

// console.log(imgCont);

