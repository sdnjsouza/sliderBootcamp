const slide = document.querySelectorAll('.slide-box')
const arrowNext = document.querySelector('.arrow-right')
const arrowPrev = document.querySelector('.arrow-left')
const arrows = document.querySelectorAll('.arrows')
let imageInit = 0
let arrowInit = 0

arrowNext.addEventListener('click', function () {
    const imageAll = slide.length -1
  
    if (imageInit === imageAll) {
        arrowInit = 1;
        return slideDisable();
    }
    imageInit++;
    arrowActive(); 
    slideShowRemove();
    slideShow();
    
})
arrowPrev.addEventListener('click', function () {
  
    if (imageInit === 0) {
        arrowInit = 0;
        return slideDisable();
    }
    if (arrowInit === 0) {
        arrowInit = 1;
    }
    imageInit--;
    arrowActive(); 
    slideShowRemove();
    slideShow();
    
})
function slideShowRemove() {
    slide.forEach(image => {
        image.classList.remove('show')
    })
}
function slideShow() {
    slide[imageInit].classList.add('show')
}
function arrowActive() {
    arrows[arrowInit].classList.remove('arrow-disable')
}
function slideDisable() {
    arrows[arrowInit].classList.add('arrow-disable')
  
}

