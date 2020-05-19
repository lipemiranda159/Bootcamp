window.addEventListener('load', start);
var names = [];

function start() {
    var form = document.querySelector('form');
    form.addEventListener('load', preventDefault);
    form.addEventListener('submit', addNameInArray);

}

function updateElementsInHtml() {
    function createButton(index) {
        let button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = 'X';
        button.addEventListener('click', removeNameInArray);
        button.id = index;
        return button;
    }

    function createText(value) {
        let text = document.createElement('h5');
        text.classList.add('btn-text');
        text.textContent = value;
        text.addEventListener('click', editValue);
        return text;
    }

    function removeNameInArray(event) {
        preventDefault(event);
        names.splice(event.target.id, 1);

        updateElementsInHtml();

    }


    let div = document.querySelector('.list');
    div.innerHTML = '';
    let ul = document.createElement('ul');

    for (let index = 0; index < names.length; index++) {

        let li = document.createElement('li');
        let button = createButton(index);
        let text = createText(names[index]);
        li.append(button);
        li.append(text);
        ul.append(li);

    }
    div.append(ul);


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



function preventDefault(event) {
    event.preventDefault();
}