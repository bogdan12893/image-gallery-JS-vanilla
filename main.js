const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;
let i = 0;
let j = 0;

//set first img opacity
imgs[0].style.opacity = opacity;

//change image auto every 5 sec
function changeImg(){
    imgFade();
    current.src = imgs[i].src;
    if(i + 1 === imgs.length) {
  	  i=1;
    } else {
	    i++;
    }
}
setInterval(changeImg, 2000);

function activeImg(){

    imgs[j].style.opacity = opacity;

    if(j + 1 === imgs.length) {
  	  j=0;
    } else {
	    j++;
    }
}
setInterval(activeImg, 2000);

imgs.forEach((img) => {img.addEventListener('click', imgClick)});

//image change on click
function imgClick(e){
    imgFade();
    //reset opacity
    imgs.forEach(img => (img.style.opacity = 1));
    //change curr img to src of clicked img
    current.src = e.target.src;
    //change the opaicity to opaicity var
    e.target.style.opacity = opacity;
}
//img change transition smooth
function imgFade(){
    //add fade
    current.classList.add("fade-in");
    //remove fade class after 0.5 sec
    setTimeout(() => {
        current.classList.remove("fade-in");
    }, 500);
}
