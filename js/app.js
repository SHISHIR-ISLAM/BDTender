// showcase heading
const showcaseHeading = document.querySelector('.section-showcase-heading')
const attribute = showcaseHeading.getAttribute('data-date')

showcaseHeading.innerHTML = `Last Update: ${attribute}`

console.log(showcaseHeading.getAttribute('data-date'))


// aos 
AOS.init();