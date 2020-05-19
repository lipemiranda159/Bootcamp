window.addEventListener('load', start);
var names = [];

function start() {
    var form = document.querySelector('form');
    form.addEventListener('load', preventDefault);
    form.addEventListener('submit', addNameInArray);

}

function updateElementsInHtml() {
    let div = document.querySelector('.list');
    div.innerHTML = '';

    for (let index = 0; index < names.length; index++) {

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let button = document.createElement('button');
        let text = document.createElement('h5');
        text.classList.add('btn-text');
        text.textContent = names[index];
        button.classList.add('btn');
        button.textContent = 'X';
        button.addEventListener('click', removeNameInArray);
        text.addEventListener('click', editValue);

        li.append(button);
        li.append(text);
        ul.append(li);
        div.append(ul);

    }


}

function editValue(event) {
    preventDefault(event);
    removeNameInArray(event);
}

function setInputValue(value) {
    let input = document.querySelector('#name');
    input.value = value;
}

function getInputValue() {
    let input = document.querySelector('#name');
    return input.value;
}

function addNameInArray(event) {
    preventDefault(event);
    names.push(getInputValue());
    updateElementsInHtml();
}


function removeNameInArray(event) {
    preventDefault(event);
    let index = names.indexOf(getInputValue())
    if (index >= 0) {
        names = names.splice(index, 1);
    }
    updateElementsInHtml();

}

function preventDefault(event) {
    event.preventDefault();
}