//menu
const popup = document.querySelector('.popup');
const trigger = document.querySelector('.menu');
trigger.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.toggle('open');
    document.body.classList.toggle('scroll');
});
//subscribe
const submit = document.querySelector('#submit');
submit.addEventListener ('click', (e)=> {
    e.preventDefault();
});
//slider
let offset = 0;
const sliderLine = document.querySelector('.categories_photos');
document.querySelector('.arrow').addEventListener('click',(e)=>{
    offset += 288.75;
    if (offset>288.75) {
        offset=0;
    }
    sliderLine.style.left = - offset +'px';
});
//search
const search = document.querySelector('.search');
document.querySelector('#searchButton').addEventListener('click',(e)=> {
    if (search.style.display === 'none') {
        search.style.display = 'block';
    } else {
        search.style.display = 'none';
    }
});
//language
const languageButton = document.querySelector('#ru');
const languages = document.querySelectorAll('.chooseLanguage span');
languageButton.addEventListener('click', (e)=> {
    for (let value of languages) {
        if (value.style.display === 'none') {
            value.style.display = 'block';
            languageButton.classList.add('border');
        } else {
            value.style.display = 'none';
            languageButton.classList.remove('border');
        }
    }   
});
//currency
const currencyButton = document.querySelector('#uah');
const currency = document.querySelectorAll('.chooseCurrency span');
currencyButton.addEventListener('click', (e)=> {
    for (let value of currency) {
        if (value.style.display === 'none') {
            value.style.display = 'block';
            currencyButton.classList.add('border');
        } else {
            value.style.display = 'none';
            currencyButton.classList.remove('border');
        }
    }   
});
