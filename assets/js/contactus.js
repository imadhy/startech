// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMZBcpXNbLsDYgCBHSuAwMPM8O3LYGDH4",
    authDomain: "startech-1521544256002.firebaseapp.com",
    databaseURL: "https://startech-1521544256002.firebaseio.com",
    projectId: "startech-1521544256002",
    storageBucket: "",
    messagingSenderId: "169828725009"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 secondes
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Reset Form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save the message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}