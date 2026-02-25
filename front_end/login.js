let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let usernameErr = document.getElementById("usernameErr");
let passwordErr = document.getElementById("passwordErr");

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
});

username.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        username.classList.add("is-invalid");
        usernameErr.textContent = "Username cannot be empty";
        usernameErr.style.color = "red";
    } else {
        username.classList.remove("is-invalid");
        usernameErr.textContent = "";
    }
});
password.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        password.style.borderColor = "red";
        passwordErr.textContent = "Password cannot be empty";
        passwordErr.style.color = "red";
    } else {
        password.style.borderColor = "green";
        passwordErr.textContent = "";
    }
});