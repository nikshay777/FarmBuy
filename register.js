document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_password").value;

        if (password !== confirm_password) {
            alert("Passwords do not match.");
            event.preventDefault();
        }
    });
});
