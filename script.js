const slidesContainerElement = document.getElementById('slides');
const buttonUP = document.getElementById('up');
const buttonDown = document.getElementById('down');


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

const slidesElements = document.getElementsByClassName('slide');
buttonDown.addEventListener('click', function()
{
    slidesElements[currentImage].classList.remove('active');
    if (currentImage == 4) {
        currentImage = -1;
    }

    slidesElements[currentImage + 1].classList.add('active');
    currentImage++
    console.log(currentImage)


})

buttonUP.addEventListener('click', function()
{
    slidesElements[currentImage].classList.remove('active');
    if (currentImage == 0) {
        currentImage = slidesElements.length;
    }
    slidesElements[currentImage - 1].classList.add('active');
    currentImage--
    console.log(currentImage)
})

