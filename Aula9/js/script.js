window.addEventListener('load', start);

function start() {
    var form = document.querySelector('form');
    form.addEventListener('submit', preventDefault);
}

function preventDefault(event) {
    event.preventDefault();

    var input = document.querySelector('#name');
    var div = document.querySelector('.list');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var button = document.createElement('button');
    var text = document.createElement('h5');
    text.textContent = input.value;
    button.setAttribute('class', 'btn');
    button.appendChild(text);

    li.append(button);

    ul.append(li);
    div.append(ul);
}