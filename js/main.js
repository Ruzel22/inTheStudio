//SLIDER

var slides = document.querySelectorAll('.main-slide');
var slider = document.querySelector('.slider');
// var sliderBG = document.querySelector('.sliderBG');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

let slideIndex = 1;
showSlides(slideIndex);


function autoSlider(){
    slideIndex++;
    showSlides(slideIndex);
    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[slideIndex-1].style.opacity = 1;
}
setInterval(autoSlider, 10000);


function showSlides(n){
    if (n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    
    slides.forEach(item => {
        item.classList.remove('show', 'fadeIn');
        item.classList.add('hide');
    });
    slides[slideIndex - 1].classList.add('show', 'fadeIn');
    slides[slideIndex - 1].classList.remove('hide');

    const sliderBG = document.createElement('div');
    sliderBG.classList.add('sliderBG');
    sliderBG.classList.add('fadeIn');
    slider.append(sliderBG);
    sliderBG.style.cssText = `
    background-image: url('./png/${slideIndex}.png');
    position: absolute;
    background-repeat: no-repeat;
    opacity: 1;
    background-size: cover;
    z-index: 1;
    top:0%;
    height: 850px;
    width: 100%;
    `;
}
function plusSlides(n){
    showSlides(slideIndex+=n);
}
next.addEventListener('click', () =>{
    plusSlides(1);
    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[slideIndex-1].style.opacity = 1;
});
prev.addEventListener('click', () =>{
    plusSlides(-1);
    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[slideIndex-1].style.opacity = 1;
});

//slider navigation
const indicators = document.querySelector('.indicators');
const dots = [];
for(let i = 0; i < slides.length; i++){
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i+1);
    dot.style.cssText = `
        width: 8px;
        height: 8px;
        margin:0px 6px;
        background-color: white;
        opacity: .5;
        border-radius: 50%;
    `;
    if(i==0){
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
}
dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = +slideTo;
        showSlides(slideIndex);
        dots.forEach(dot => {
            dot.style.opacity = '0.5';
        });
        dots[slideIndex-1].style.opacity ='1';
        console.log(slideIndex);
        console.log(slideIndex+=-1);
    });
});

function deleteContainer(){
    document.querySelector('.slider > .sliderBG').remove();
}
setInterval(deleteContainer, 11000);


//carousel-slider releases
var cards = document.querySelectorAll('.releases-block .card');
var card = document.querySelector('.releases-block .card');
var carouselSlider = document.querySelector('.releases-block .carousel-slider');
var nextCarousel = document.querySelector('.releases-block .next');
var prevCarousel = document.querySelector('.releases-block .prev');
var widthCarousel = window.getComputedStyle(card).width;
var offset = 0;
console.log()
for(let i=0; i<cards.length; i++){
    cards[i].style.cssText=`
        width: 231px;
        height: 386px;
        background-image: url('./png/slide-card${i+1}.png');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
    `;
}
nextCarousel.addEventListener('click', () =>{
    if(offset >= +(widthCarousel.slice(0, widthCarousel.length - 2) * (cards.length - 1)-widthCarousel.slice(0, widthCarousel.length - 2)*5)+300){
        offset = 0;
    }else{
        offset += +(widthCarousel.slice(0, widthCarousel.length - 2))+22;
    }
    console.log(offset);
    carouselSlider.style.transform = `translateX(-${offset}px)`;
});
prevCarousel.addEventListener('click', () =>{
    if(offset < 231){
        offset = (+(widthCarousel.slice(0, widthCarousel.length - 2) * (cards.length - 1)-widthCarousel.slice(0, widthCarousel.length - 2)*5)+300);
    }else{
        offset -= +(widthCarousel.slice(0, widthCarousel.length - 2))+22;
    }
    console.log(offset);
    carouselSlider.style.transform = `translateX(-${offset}px)`;
});
//carousel-slider releases
var sheduleCards = document.querySelectorAll('.shedule-block .card');
var shedulecard = document.querySelector('.shedule-block .card');
var sheduleCarouselSlider = document.querySelector('.shedule-block .carousel-slider');
var nextSheduleCarousel = document.querySelector('.shedule-block .next');
var prevSheduleCarousel = document.querySelector('.shedule-block .prev');
var widthSheduleCarousel = window.getComputedStyle(shedulecard).width;
var sheduleOffset = 0;
for(let i=0; i<sheduleCards.length; i++){
    sheduleCards[i].style.cssText=`
        width: 413px;
        height: 114px;
        opacity: 0.5;
        background-image: url('./png/shedule-slide-card${i+1}.png');
        background-repeat: no-repeat;
        background-size: cover;
    `;
    if(i == 0){
        sheduleCards[i].style.cssText=`
        width: 413px;
        height: 114px;
        opacity: 0.5;
        background-image: url('./png/shedule-slide-card${i+1}.png');
        background-repeat: no-repeat;
        background-size: cover;    
        border-radius: 8px 0px 0px 8px;
        `;
    }
    if(i == (sheduleCards.length-1)){
        sheduleCards[i].style.cssText=`
        width: 413px;
        height: 114px;
        opacity: 0.5;
        background-image: url('./png/shedule-slide-card${i+1}.png');
        background-repeat: no-repeat;
        background-size: cover;    
        border-radius: 0px 8px 8px 0px;
        `;
    }
}
nextSheduleCarousel.addEventListener('click', () =>{
    if(sheduleOffset > +(widthSheduleCarousel.slice(0, widthSheduleCarousel.length - 2) * (sheduleCards.length - 1)-widthSheduleCarousel.slice(0, widthSheduleCarousel.length - 2)*3)){
        sheduleOffset = 0;
    }else{
        sheduleOffset += +(widthSheduleCarousel.slice(0, widthSheduleCarousel.length - 2));
    }
    sheduleCarouselSlider.style.transform = `translateX(-${sheduleOffset}px)`;
    console.log(sheduleOffset);
});
prevSheduleCarousel.addEventListener('click', () =>{
    if(sheduleOffset == 0){
        sheduleOffset = (+(widthSheduleCarousel.slice(0, widthSheduleCarousel.length - 2) * (sheduleCards.length - 1)-widthSheduleCarousel.slice(0, widthSheduleCarousel.length - 2)*3)+413);
    }else{
        sheduleOffset -= +(widthSheduleCarousel.slice(0, widthSheduleCarousel.length - 2));
    }
    sheduleCarouselSlider.style.transform = `translateX(-${sheduleOffset}px)`;
});




const message = {
    // loading: './img/form/spinner.svg',
    success: 'Спасибо!',
    failure: 'Что-то пошло не так'
};


const form = document.querySelectorAll('footer form');


form.forEach(item => {
    bindPostData(item);
});

const postData = async(url, data) => {
        const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
        });

        return await res.json();   
};

function showMessage(messageStatus){
    const statusMessage = document.createElement('p');
            statusMessage.append(messageStatus);
            statusMessage.style.cssText = `
                display: block;
                color: white;
            `;
            form.append(statusMessage);
}

function bindPostData(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/requests', json)
        .then(data => {
            showMessage(message.success);
        }).catch(() => {
            showMessage(message.failure);
        });
        // .finally(() => {
        //     form.reset();
        // }); 
    }); 
}