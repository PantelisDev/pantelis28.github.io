let slideIndex = 1;
window.onload = function() {
    showSlides(slideIndex);
};

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }  
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {    
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {      
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.Navbar');
    const links = navbar.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', function () {
       
        links.forEach(link => link.classList.remove('active'));
        
       
        this.classList.add('active');
      });
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block"; 
    document.getElementById("overlay").style.display = "block"; 
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"; 
    document.getElementById("overlay").style.display = "none"; 
}

// Close form when clicking outside of it
window.onclick = function(event) {
    const form = document.getElementById("myForm");
    const overlay = document.getElementById("overlay");
    if (event.target === overlay) {
        closeForm();
    }
};


