


function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


const nameError =document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");


        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        

        let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent ="Please enter your name properly";
        isValid = false;
    }
    if (email === "" || !email.includes("@")) {
        emailError.textContent ="Please enter a valid email address";
        isValid = false;
    }
    if (subject === "" || /\d/.test(subject)) {
        subjectError.textContent ="enter the Subject";
        isValid = false;
    }
    if (message === "" || /\d/.test(message)) {
        messageError.textContent ="enter the Message";
        isValid = false;
    }
    return isValid;
}

var form = document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    
    var name=document.getElementById('name').value
    console.log(name)

    var email=document.getElementById('email').value
    console.log(email)

    var subject=document.getElementById('subject').value
    console.log(subject)

    var message=document.getElementById('message').value
    console.log(message)
})











//function validateForm() {
//    const name = document.getElementById("name").value;
// const nameError =
//        document.getElementById("name-error");
//        nameError.textContent = "";
//        let isValid = true;
//    if (name === "" || /\d/.test(name)) {
//        nameError.textContent =
//            "Please enter your name properly.";
//        isValid = false;
//    }
//    return isValid;
// }
