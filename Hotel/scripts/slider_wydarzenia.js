document.addEventListener('DOMContentLoaded', function () {

    var images = [
        '../../Img/img-hotel/spotkanie.jpg',
        '../../Img/img-hotel/biznes.jpg',
    ];

    var currentSlideIndex = 0;
    var sliderImage = document.getElementById('card-image1');

    function changeImage() {
        sliderImage.src = images[currentSlideIndex];
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

   
    setInterval(changeImage, 3500);
});


document.addEventListener('DOMContentLoaded', function () {

    var images = [
       '../../Img/img-hotel/spotkanie3.jpg',
       '../../Img/img-hotel/spotkanie2.jpg'
    ];

    var currentSlideIndex = 0;
    var sliderImage = document.getElementById('card-image2');

    function changeImage() {
        sliderImage.src = images[currentSlideIndex];
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

   
    setInterval(changeImage, 3500);
});

document.addEventListener('DOMContentLoaded', function () {

    var images = [
        '../../Img/img-hotel/wyklad.jpg',
        
    ];

    var currentSlideIndex = 0;
    var sliderImage = document.getElementById('card-image3');

    function changeImage() {
        sliderImage.src = images[currentSlideIndex];
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

   
    setInterval(changeImage, 3500);
});


document.addEventListener('DOMContentLoaded', function () {

    var images = [
        '../../Img/img-hotel/impreza_2.jpg',
        '../../Img/img-hotel/hotel.jpg',
    ];

    var currentSlideIndex = 0;
    var sliderImage = document.getElementById('card-image4');

    function changeImage() {
        sliderImage.src = images[currentSlideIndex];
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

   
    setInterval(changeImage, 3500);
});

document.addEventListener('DOMContentLoaded', function () {

    var images = [
        '../../Img/img-hotel/impreza3.jpg',
        '../../Img/img-hotel/impreza4.jpg',

    ];

    var currentSlideIndex = 0;
    var sliderImage = document.getElementById('card-image5');

    function changeImage() {
        sliderImage.src = images[currentSlideIndex];
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

   
    setInterval(changeImage, 3500);
});


document.addEventListener('DOMContentLoaded', function () {

    var images = [
        '../../Img/img-hotel/fajerwerski.jpg',
        '../../Img/img-hotel/kieliszki.jpg',
        '../../Img/img-hotel/maski.jpg',
    ];

    var currentSlideIndex = 0;
    var sliderImage = document.getElementById('card-image6');

    function changeImage() {
        sliderImage.src = images[currentSlideIndex];
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
    }

   
    setInterval(changeImage, 3500);
});