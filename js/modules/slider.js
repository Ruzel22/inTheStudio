function mainSlider(){
    var slides = document.querySelectorAll('.main-slide');
    var slider = document.querySelector('.slider');
    var sliderBG = document.querySelector('.sliderBG');
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');


    function sliderBGAnimation(){
        sliderBG.classList.remove('hide');
        sliderBG.classList.add('show', 'fade');
        setTimeout(sliderBG.classList.add('fade1'), 1.5);
    }
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
            item.classList.remove('show', 'fade', 'fade1');
            item.classList.add('hide');
        });
        slides[slideIndex - 1].classList.add('show', 'fade');
        slides[slideIndex - 1].classList.remove('hide');
        
        sliderBG.classList.remove('show', 'fade');
        sliderBG.classList.add('hide');
        setTimeout(sliderBGAnimation, 1);
        sliderBG.style.cssText = `
        background-image: url('./png/${slideIndex}.png');
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
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

}
module.exports = mainSlider;