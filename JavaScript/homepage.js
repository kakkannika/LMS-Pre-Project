 // Header scroll effect
 window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    // Initialize - make sure first slide is visible
    slides[0].classList.add('active');
    slides[0].style.opacity = 1;
    
    if (dots.length > 0) {
        dots[0].classList.add('active');
    }

    // Function to show specific slide
    function showSlide(index) {
        
        slides.forEach(slide => {
            slide.style.opacity = 0;
            slide.classList.remove('active');
        });
        
        if (dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
        
     
        setTimeout(() => {
            slides[index].style.opacity = 1;
            slides[index].classList.add('active');
        }, 50);
        
        currentSlide = index;
    }

    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Start automatic slideshow
    function startSlideshow() {
       
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        slideInterval = setInterval(nextSlide, 3000); 
    }

    startSlideshow();
});