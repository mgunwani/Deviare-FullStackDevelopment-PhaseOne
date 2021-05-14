
window.onload = function () {
    if (localStorage) {
        if (localStorage.getItem('username')) {
            document.getElementById('welcomeMessage').textContent = "Welcome " + localStorage.getItem('username');
        } else {
            location.href = "./index.html";
        }
    }
}

function signout() {
    localStorage.clear();
    location.href = "./index.html";
}