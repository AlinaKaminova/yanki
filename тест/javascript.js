let offset = 0;
const sliderLine = document.querySelector('.photos');
document.querySelector('.next').addEventListener('click',(e)=>{
    offset += 273.75;
    if (offset>547.5) {
        offset=0;
    }
    sliderLine.style.left = - offset +'px';
});
document.querySelector('.prev').addEventListener('click',(e)=>{
    offset -= 273.75;
    if (offset<0) {
        offset=547.5;
    }
    sliderLine.style.left = - offset +'px';
});