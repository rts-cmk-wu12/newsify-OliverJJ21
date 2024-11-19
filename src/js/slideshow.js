  const container = document.querySelector('.container');
  const imageRoll = document.querySelector('.imageroll');
  const next = document.querySelector('.next');
  const dots = document.querySelector('.dots');
  const pageControl = document.querySelector('.page-control');

  Array.from(imageRoll.children).forEach((_, index) => {
    dots.innerHTML += `<div class="dot ${index === 0 ? 'fill' : ''}" data-index="${index}"></div>`;
  });

  let currentIndex = 0;
  const imageWidth = container.offsetWidth;

  pageControl.addEventListener('click', e => {
    if (e.target === next && currentIndex < imageRoll.children.length - 1) {
      currentIndex++;
      
      if (currentIndex === 2) {
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 3000);
      }
    }

    imageRoll.animate([
      { transform: `translateX(-${currentIndex * imageWidth}px)` }
    ], { duration: 500, fill: 'both' });

    Array.from(dots.children).forEach((dot, index) => {
      dot.classList.toggle('fill', currentIndex === index);
    });
  });