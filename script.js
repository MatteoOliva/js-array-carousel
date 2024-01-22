const slidesContainerElement = document.getElementById('slides');
const buttonUP = document.getElementById('up');
const buttonDown = document.getElementById('down');


const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];


let currentImage = 0;

for( let i = 0; i < slides.length; i++) {

    // if(i == currentImage)
    // {
    //   slidesContainerElement.innerHTML += `<img src="img/${slides[i]}" alt="" class="slide active"></img>`
    // }
    // else{
    //     slidesContainerElement.innerHTML += `<img src="img/${slides[i]}" alt="" class="slide"></img>`
    // }
    
    

   let active = i == currentImage ? 'active' : ''

    slidesContainerElement.innerHTML += `<img src="img/${slides[i]}" alt="" class="slide ${active} "></img>`

}
const slidesElements = document.getElementsByClassName('slide');

buttonDown.addEventListener('click', function()
{
    slidesElements[currentImage].classList.remove('active');
    if (currentImage == slidesElements.length - 1) {
        currentImage = -1;
    }
    currentImage++
    slidesElements[currentImage].classList.add('active');
    
    console.log(currentImage)


})

buttonUP.addEventListener('click', function()
{
    slidesElements[currentImage].classList.remove('active');
    if (currentImage == 0) {
        currentImage = slidesElements.length;
    }
    currentImage--
    slidesElements[currentImage].classList.add('active');
    
    console.log(currentImage)
})

// MILESTONE 1

let clock = setInterval(slideInterval, 1000);
function slideInterval() {
    slidesElements[currentImage].classList.remove('active');
    if (currentImage == slidesElements.length -1) {
        currentImage = -1;
    }
    currentImage++
    slidesElements[currentImage].classList.add('active');
    
    console.log(currentImage)
}

// BONUS 2


slidesContainerElement.addEventListener("mouseover", function()
    { 
        clearInterval(clock);
    })
    
slidesContainerElement.addEventListener("mouseout", function()
{ 
    clock = setInterval(slideInterval, 1000);
    
})