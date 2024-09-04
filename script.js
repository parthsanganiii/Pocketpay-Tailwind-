const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
    navDialog.classList.toggle('hidden')

}

function toggleFaq(index) {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.textContent = '-';
    } else {
        answer.classList.add('hidden');
        icon.textContent = '+';
    }
}

function handleScroll() {
    const navbar = document.querySelector('nav');
    const scrollPosition = window.scrollY;

    // Change navbar color when scrolled down
    if (scrollPosition > 50) { // You can adjust the value '50' as per your need
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-[#E6F0FD]');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-[#E6F0FD]');
    }
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleScroll);

