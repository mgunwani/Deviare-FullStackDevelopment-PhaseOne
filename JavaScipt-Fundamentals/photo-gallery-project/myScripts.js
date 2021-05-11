
function update(element) {
    document.getElementById('desc').innerHTML = element.alt;
}

function undo() {
    document.getElementById('desc').innerHTML = "Hover over an image to display here..";
}

function showContent() {
    element = document.getElementById('content');
    element.style.display = 'block';
}

function hideContent() {
    element = document.getElementById('content');
    element.style.display = 'none';
}