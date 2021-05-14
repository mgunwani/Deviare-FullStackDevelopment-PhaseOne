
var attempt = 3;
function userLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == "" || password == "") {
        alert("Please completed the required fields.");
    } else {
        if (username == "admin" && password == "admin") {
            // alert("You are logged in successfully.")
            if (localStorage) {
                localStorage.setItem("username", username);
                location.href = "./dashboard.html";
            } else {
                alert('localStorage is disabled by browser.')
            }

        } else {
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            attempt--;  // attempt = attempt - 1;
            alert("Invalid credentials. \n You have left " + attempt + " attempt.");
            if (attempt == 0) {
                document.getElementById('username').disabled = true;
                document.getElementById('password').disabled = true;
                document.getElementById('login').disabled = true;
                document.getElementById('reset').disabled = false;
            }
        }
    }
}

function resetAll() {
    attempt = 3;
    document.getElementById('username').disabled = false;
    document.getElementById('password').disabled = false;
    document.getElementById('login').disabled = false;
    document.getElementById('reset').disabled = true;

}