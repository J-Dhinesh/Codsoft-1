// MENU BAR SCROLL
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
// IMAGE CAROUSEL
let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carouselitem');
    const prevBtn = document.getElementById('prevBtn');

    function showSlide(index) {
        currentIndex = index;
        carouselItems.forEach((item, idx) => {
            item.style.transform = `translateX(-${index * 100}%)`;
        });
        updateButtonState();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }

    function updateButtonState() {
        prevBtn.disabled = currentIndex === 0;
        prevBtn.classList.toggle('disabled', currentIndex === 0);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentIndex);
    });

    function appenddata1() {
        const newDataDiv = document.createElement('div');
        const newParagraph = document.createElement('p');
        const textNode = document.createTextNode('New data 1 to append.');
    
        newParagraph.appendChild(textNode);
        newDataDiv.appendChild(newParagraph);
    
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.appendChild(newDataDiv);
      }

    //   CODE FOR CERTIFICATE PAGE ONCLICK FUNTIONALITY
    const descriptions = {
        title1: "<img src='../portfolio/images/certificate/uiux google.png' alt='UI/UX Design' width=300px height=200px><p>Coursera - Google UX Design Professional Course</p><button> <a href='https://coursera.org/share/ab21e74be3d63a345063c30bbb9903b0'>VERIFY </a></button>",
        title2: "<img src='../portfolio/images/certificate/linkedin.png' alt='Frontend Development'><p>LinkedIn - HTML , CSS , Javascript Essentials</p><button><a href='https://www.linkedin.com/learning/certificates/fda1790a64337d48c47c304d12d56ba3ff2c6c22e22065b4a1b49d7854894166'>VERIFY</a></button>",
        title3: "<div class='coursecontent'><div class='course1'><img src='../portfolio/images/certificate/Arduino1.jpg' alt='Workshop Certificate' width=300px height=200px><p>Workshop - Fundamentals of Arduino and IOT </p> <button> <a href='#'>VERIFY </a></button></div><div class='course2'><img src='../portfolio/images/certificate/Arduino2.jpg' alt='Project on Arduino Certificate' width=300px height=200px><p>Project Presentation on Arduino</p> <button> <a href=''>VERIFY </a></button></div></div>",
        title4: "<div class='coursecontent'><div class='course1'><img src='../portfolio/images/certificate/matlab.png' alt='matlab onramp' width=300px height=200px><p>MATLAB Onramp</p> <button> <a href='https://matlabacademy.mathworks.com/progress/share/certificate.html?id=3796d9a1-e0ca-42f2-b33e-8a59d2ed44b7&'>VERIFY </a></button></div><div class='course2'><img src='../portfolio/images/certificate/hackathon.jpeg' alt='hackathon' width=300px height=200px><p>Image Processing Hackathon</p> <button> <a href='https://www.linkedin.com/posts/dhinesh-j-511098265_impathon-codingmarathon-imageprocessing-activity-7129141075759304704-MfJm?utm_source=share&utm_medium=member_desktop'>VERIFY </a></button></div></div>" ,
        title5: "<div class='coursecontent'><div class='course1'><img src='../portfolio/images/certificate/CA-nptel.png' alt='computer architecture nptel' width=300px height=200px><p>Computer Architecture <br> Silver (Top 2%)</p> <button> <a href='#'>VERIFY </a></button></div><div class='course2'><img src='../portfolio/images/certificate/InnovationbyDesign.jpeg' alt='innovation by design nptel' width=300px height=200px><p>Innovation by Design <br> Silver (Top 5%)</p> <button> <a href='#'>VERIFY </a></button></div></div>"
    };

    function myfunction(button) {
    const descriptionContainer = document.getElementById("descriptionContainer");
    const title = button.className;
    descriptionContainer.innerHTML = descriptions[title];
    }

    const buttons = document.querySelectorAll('.titles button');
    buttons.forEach(button => {
    button.addEventListener('click', () => myfunction(button));
    });

