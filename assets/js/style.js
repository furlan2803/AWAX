function changeSlide(slideIndex) {
    const sliders = document.querySelectorAll('.banner .slide');
    const slideWidth = sliders[0].offsetWidth;
  
    sliders.forEach((slide, index) => {
      const marginLeft = (index - slideIndex) * slideWidth;
      slide.style.marginLeft = `${marginLeft}px`;
  
      if (index === slideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  
    const pointers = document.querySelectorAll('.banner .pointer');
  
    pointers.forEach((pointer, index) => {
      if (index === slideIndex) {
        pointer.classList.add('active');
      } else {
        pointer.classList.remove('active');
      }
    });
}

  