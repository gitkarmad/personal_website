document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (fname === '' || lname === '' || email === '' || phone === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
    }
});
