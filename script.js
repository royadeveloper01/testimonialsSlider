let slides  = document.getElementsByClassName("showSlides");
let left = document.getElementsByClassName("left");
let right = document.getElementsByClassName("right");

const displaySlides = (n) => {
    var i;
    if(n > slides.length){
        slide_index = 1
    }
    if(n < 1){
        slide_index = slides.length
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slide_index -1].style.display = 'block';
}

var slide_index = 1;
displaySlides(slide_index);

const nextSlide = (n) => {
    displaySlides(slide_index += n);
} 

left.addEventListener("click", nextSlide());
console.log(click)