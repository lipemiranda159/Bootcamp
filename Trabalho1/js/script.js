window.addEventListener('load', render);

function getId(label) {
    let id = '';
    switch (label) {
        case "red":
            text = "red"
            break;
        case "green":
            text = "green"
            break;
        case "blue":
            text = "blue"
            break;

        default:
            break;
    }
    return text;
}

function getSpanText(label) {
    let text = '';
    switch (label) {
        case "red":
            text = "(R) Vermelho:"
            break;
        case "green":
            text = "(G) Verde:"
            break;
        case "blue":
            text = "(B) Azul:"
            break;

        default:
            break;
    }
    return text;
}

function getRangeClass(label) {
    let text = '';
    switch (label) {
        case "red":
            text = "range-red"
            break;
        case "green":
            text = "range-green"
            break;
        case "blue":
            text = "range-blue"
            break;

        default:
            break;
    }
    return text;


}

function createEdit(label) {
    let input = document.createElement('input');
    input.type = 'text';
    input.disabled = true;
    input.value = 0;
    input.id = getId(label)
    input.classList.add('number');
    return input;
}

function getRgbColor() {
    let red = document.querySelector('#red');
    let green = document.querySelector('#green');
    let blue = document.querySelector('#blue');

    return '#' + parseInt(red.value).toString(16) +
        parseInt(green.value).toString(16) +
        parseInt(blue.value).toString(16);
}

function updateDivColor() {
    let color = getRgbColor();
    let div = document.querySelector('.view');
    console.log(div.style.backgroundColor);
    div.style.backgroundColor = color;
}

function createRange(label, edit) {
    function updateEdit() {
        edit.value = range.value;
        updateDivColor();
    }
    //set up
    let range = document.createElement('input');
    range.type = 'range';
    range.min = 0;
    range.max = 255;
    range.value = 0;
    range.classList.add(getRangeClass(label));
    //config event
    range.addEventListener('change', updateEdit);
    return range;
}

function createColorDiv() {
    let divMain = document.createElement('div');
    divMain.classList.add('main-view')
    let div = document.createElement('div');
    div.classList.add('view');

    divMain.appendChild(div);
    return divMain;
}

function createDiv(label) {
    let div = document.createElement('div');
    div.classList.add(label);
    div.append(createSpan(label));
    let edit = createEdit(label);
    div.append(createRange(label, edit));
    div.append(edit);

    return div;
}

function createSpan(label) {
    let span = document.createElement('span');
    span.textContent = getSpanText(label);
    return span;
}

function render() {
    let optionDiv = document.querySelector('.options');
    optionDiv.appendChild(createDiv('red'));
    optionDiv.appendChild(createDiv('green'));
    optionDiv.appendChild(createDiv('blue'));
    optionDiv.appendChild(createColorDiv());
}