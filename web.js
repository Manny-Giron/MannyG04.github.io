let count = 0;
const countUP = document.getElementById('countUP');
const counterValue = document.getElementById("counterValue");

const scrollMe = document.getElementById("Me");
const scrollAbout = document.getElementById("About");
const scrollProj = document.getElementById("Projects");
const scrollContact = document.getElementById("Contact");

let offSetScroll = 85;

// Navigation Buttons
scrollMe.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollProj.addEventListener('click', function () {
    window.scrollTo({
        top: (sectionProjects.offsetTop - offSetScroll), // Positioning to project section (Adjust based on your layout)
        behavior: 'smooth'
    });
});

scrollAbout.addEventListener('click', function () {
    window.scrollTo({
        top: (AboutMe.offsetTop - offSetScroll), // Set the absolute position you want to scroll to
        behavior: 'smooth'
    });
});

scrollContact.addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: 'smooth'
    });
});

// Counter
countUP.addEventListener('click', function () {
    count++;
    counterValue.textContent = count;
});

// Show a "scroll to top" button after scrolling down a bit (if this element exists)
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollHome.style.display = 'block';
    } else {
        scrollHome.style.display = 'none';
    }
});
