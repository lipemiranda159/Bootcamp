var names = [];
let stateChange = null;
let globalInput = document.querySelector("#name");
let globalButton = document.querySelector("#change");
let globalPosition = 0;
window.addEventListener("load", () => {
    var form = document.querySelector("form");
    form.addEventListener("submit", () => {
        event.preventDefault();
        !stateChange ? names.push(globalInput.value) : updatePosition();
        updateElementsInHtml();
    });
});

function updatePosition() {
    names[globalPosition] = globalInput.value;
    stateChange = false;
    globalButton.value = "Cadastrar";
}

function updateElementsInHtml() {
    function createButton() {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = "X";
        button.addEventListener("click", () => {
            names.splice(event.target.id, 1);

            updateElementsInHtml();
        });
        return button;
    }

    function createText(value, index) {
        let text = document.createElement("h5");
        text.classList.add("btn-text");
        text.textContent = value;
        text.id = index;
        text.addEventListener("click", (event) => {
            globalPosition = event.target.id;
            let actualLabel = document.getElementById(event.target.id);
            globalInput.value = actualLabel.textContent;
            globalButton.value = "Alterar";
            stateChange = true;
        });
        return text;
    }

    let div = document.querySelector(".list");
    div.innerHTML = "";
    let ul = document.createElement("ul");
    let index = 0;
    names.forEach((name) => {
        let li = document.createElement("li");
        let button = createButton();
        let text = createText(name, index);
        li.append(button);
        li.append(text);
        ul.append(li);
        index++;
    });

    div.append(ul);
}