$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});
function showFullSize(element) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  modalImage.src = element.querySelector('img').src;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}