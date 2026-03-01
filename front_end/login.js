let username = document.getElementById("username");
let password = document.getElementById("password");
let loginForm = document.getElementById("loginForm");

function validateUsername() {
    if (username.value === "") {
        username.classList.add("is-invalid");
        return false;
    } else {
        username.classList.remove("is-invalid");
        return true;
    }
}

function validatePassword() {
    if (password.value === "") {
        password.classList.add("is-invalid");
        return false;
    } else {
        password.classList.remove("is-invalid");
        return true;
    }
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let isUserValid = validateUsername();
    let isPassValid = validatePassword();
    if (isUserValid && isPassValid) {
        alert("Login successful!");
    }
});

username.addEventListener("blur", validateUsername);
password.addEventListener("blur", validatePassword);