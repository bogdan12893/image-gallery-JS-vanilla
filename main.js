const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

//set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    //reset op
    imgs.forEach(img => (img.style.opacity = 1));

    //cgange curr img to src of clicked img
    current.src = e.target.src;

    //add fade
    current.classList.add("fade-in");

    //remove fade class after 0.5 sec

    setTimeout(() => {
        current.classList.remove("fade-in");
    }, 500);

    //change the op to op var
    e.target.style.opacity = opacity;
}
