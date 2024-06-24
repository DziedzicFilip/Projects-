document.addEventListener('DOMContentLoaded', function () {

    var images = [
        '../../Img/img-hotel/pokoj1.jpg',
        '../../Img/img-hotel/pokoj2.jpg',
        '../../Img/img-hotel/pokoj3.jpg',
        '../../Img/img-hotel/posciel.jpg',
        '../../Img/img-hotel/lazienka.jpg'
    ];

    var currentSlideIndex = 0;
    var sliderContainer = document.getElementById('slider-container');

    function changeBackgroundImage() {
      
        sliderContainer.style.backgroundImage = 'url(' + images[currentSlideIndex] + ')';

    
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 3500);
});