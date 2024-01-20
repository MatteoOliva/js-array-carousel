const slidesContainerElement = document.getElementById('slides');



const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];


let currentImage = 0;

for( let i = 0; i < slides.length; i++) {
    
    if(i == currentImage)
    {
      slidesContainerElement.innerHTML += `<img src="img/${slides[i]}" alt="" class="slide active"></img>`
    }
    else{
        slidesContainerElement.innerHTML += `<img src="img/${slides[i]}" alt="" class="slide"></img>`
    }
}


