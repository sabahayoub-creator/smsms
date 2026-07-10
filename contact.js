const form = document.getElementById("contactForm");
const message = document.getElementById("success-message");


form.addEventListener("submit", function(event){

    event.preventDefault();

    message.style.display = "block";


    setTimeout(() => {
        message.style.display = "none";
    },3000);


    form.reset();

});