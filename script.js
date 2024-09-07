



// for side//
var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right= "-200px";
}

// google form//

const message = document.getElementById("msg");
const form = document.forms["submit-this-google-form"];
const scriptURL = 'https://script.google.com/d/10hTCoHjN3weP2GZ3IZ7XgkSLl1ih-bneu7XAggEjeft2fbkoKbrvkwaX/edit?usp=sharing';

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})