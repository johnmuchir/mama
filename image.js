let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    if (slides.length === 0) {
        document.querySelector(".slider").innerHTML = "";
        return;
    }
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
    showDots();
}

function uploadImage() {
    const input = document.getElementById("image-upload");
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newSlide = document.createElement("img");
            newSlide.src = e.target.result;
            newSlide.alt = "New Image";
            newSlide.className = "slide";
            const slider = document.querySelector(".slider");
            slider.appendChild(newSlide);
            slideIndex = slider.children.length - 1;
            showSlides();
        };
        reader.readAsDataURL(file);
    }
}

function showDots() {
    const dotsContainer = document.querySelector(".dots");
    dotsContainer.innerHTML = "";
    for (let i = 0; i < document.getElementsByClassName("slide").length; i++) {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", function() {
            slideIndex = i;
            showSlides();
        });
        dotsContainer.appendChild(dot);
    }
    document.querySelectorAll(".dot")[slideIndex].classList.add("active");
}

