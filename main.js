var typed = new Typed(".text", {
    strings: ["Full Stack Web Developer", "PHP Developer", "Laravel Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



function showContent(sectionId) {
    // Hide all content sections
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => section.classList.add('hidden'));

    // Remove active class from all buttons
    const allButtons = document.querySelectorAll('.toggle-button');
    allButtons.forEach(button => button.classList.remove('active'));

    // Show the selected content and highlight button
    document.getElementById(sectionId).classList.remove('hidden');
    event.target.classList.add('active');
}

