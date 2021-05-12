
// Create a close button and apppend it to each list item
var myNodeList = document.getElementsByTagName('li');
var i;
for (let i = 0; i < myNodeList.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current item
var close = document.getElementsByClassName('close');
var i;
for (let i = 0; i < myNodeList.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Create a new item when clicking on Add Button
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('You must write something!!');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = "";
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < myNodeList.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Clearing the list
function removeAll() {
    var lst = document.getElementsByTagName('ul');
    lst[0].innerHTML = '';
}