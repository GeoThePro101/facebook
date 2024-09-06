// Open the Sign Up Modal
function openSignupForm() {
    document.getElementById('signupModal').style.display = 'block';
}

// Close the Sign Up Modal
function closeSignupForm() {
    document.getElementById('signupModal').style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('signupModal')) {
        closeSignupForm();
    }
}

// Open the profile dropdown
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profilePic');
    const dropdownMenu = document.getElementById('dropdownMenu');

    profilePic.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    // Optional: Click outside to close
    document.addEventListener('click', function(event) {
        if (!profilePic.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});

