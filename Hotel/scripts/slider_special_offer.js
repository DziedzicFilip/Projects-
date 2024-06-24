document.addEventListener('DOMContentLoaded', function () {

    var images = [
        '../../Img/img-hotel/pokoj3.jpg',
        '../../Img/img-hotel/posciel.jpg',
        '../../Img/img-hotel/lazienka.jpg'
    ];

    var currentSlideIndex = 0;
    var sliderImage = document.getElementById('slider-image');

    function changeImage() {
        sliderImage.src = images[currentSlideIndex];
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

   
    setInterval(changeImage, 3500);
});