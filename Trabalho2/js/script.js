globalUsers = [];
globalDivResults = null;
globalDivStatistics = null;
globalInput = null;
globalButton = null;
countUser = null;
statisticsShow = null;
actualPosition = 0;
limitLength = 9;
globalArrayUser = [];
window.addEventListener("load", async() => {
    globalUsers =await getUsersAsync();
    countUser = document.querySelector("#countUser");
    statisticsShow = document.querySelector("#statistics");
    globalDivResults = document.querySelector(".divResults");
    globalDivStatistics = document.querySelector(".divStatistics");
    globalInput = document.querySelector(".input-search");
    globalButton = document.querySelector("#buscar");
    globalInput.addEventListener("keyup", async(event) => {
        console.log(event);
        if (globalInput.value !== "") {
            globalButton.disabled = false;
        } else {
            globalButton.disabled = true;
            globalUsers = await getUsersAsync();
            render();
        }
        if (event.code == "Enter") {
            globalUsers = globalUsers.filter((user) => {
                return user.name.toLowerCase().includes(globalInput.value);
            });
            render();
        }
    });
    render();
});

function createText(text, level) {
    const h5 = document.createElement(level);
    h5.textContent = text;
    return h5;
}

function creatLi() {
    const liCountry = document.createElement("li");
    liCountry.classList.add("collection-item");
    liCountry.classList.add("avatar");
    return liCountry;
}

function createImg(flag) {
    const img = document.createElement("img");
    img.src = flag;
    img.classList.add("circle");
    return img;
}

function createSpan(text) {
    const spanUser = document.createElement("span");
    spanUser.classList.add("title");
    spanUser.textContent = text;
    return spanUser;
}

function updateView() {
    const ulUsers = document.createElement("ul");
    ulUsers.classList.add("collection");
    let users = 0;
    globalUsers.forEach((users) => {
        users[actualPosition].forEach((user) => {
                const liUser = creatLi();
                const img = createImg(user.picture);
                liUser.appendChild(img);

                const spanUser = createSpan(`${user.name}, ${user.age} anos`);
                liUser.appendChild(spanUser);

                ulUsers.appendChild(liUser);
                users++;
        });
    });
    const statistics = updateStatistics();
    countUser.textContent = `${statistics.length} usuário(s) encontrado(s)`;
    statisticsShow.textContent = "Estatísticas";
    let sexM = createText(`Sexo masculino: ${statistics.man}`);
    statisticsShow.appendChild(sexM);
    let sexF = createText(`Sexo feminino: ${statistics.woman}`);
    statisticsShow.appendChild(sexF);
    let totalAges = createText(`Soma das idades: ${statistics.totalAge}`);
    statisticsShow.appendChild(totalAges);
    let avgAges = createText(`Média das idades: ${statistics.avgAge}`);
    statisticsShow.appendChild(avgAges);
    globalDivResults.appendChild(ulUsers);
}

function createText(value) {
    let text = document.createElement("h6");
    text.textContent = value;
    return text;
}

function render() {
    globalDivResults.innerHTML = "";
    globalDivStatistics.innerHTML = "";

    if (globalUsers.length <= 0) {
        countUser.textContent = "Nenhum usuário filtrado";
        statisticsShow.textContent = "Nada a ser exibido";
    }
    updateView();
}

function updateStatistics() {
    let man = 0;
    let woman = 0;
    let totalAge = 0;
    return globalUsers[actualPosition].reduce((user, currentUser) => {
        if (user.gender) {
            user.gender === "female" ? woman++ : man++;
            currentUser.gender === "female" ? woman++ : man++;
            totalAge += user.age + currentUser.age;
        } else {
            currentUser.gender === "female" ? woman++ : man++;
            totalAge += currentUser.age;
        }
        return {
            man: man,
            woman: woman,
            totalAge: totalAge,
            avgAge: (totalAge / globalUsers.length).toFixed(2),
            length: globalUsers[actualPosition].length,
        };
    });
}

async function getUsersAsync() {
    const usersObj = await fetch(
        "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
    );
    const users = await usersObj.json();
    let id = 0;
    let pos = 0;
    globalArrayUserLenght = users.results.length / (limitLength + 1);
    globalArrayUser = [new Array(globalArrayUserLenght)];
    return users.results
        .map((user) => {
            return {
                id: id++,
                name: `${user.name.first} ${user.name.last}`,
                picture: user.picture.thumbnail,
                age: user.dob.age,
                gender: user.gender,
            };
        })
        .reduce((acc, user) => {
            if (globalArrayUser[0][pos] === undefined) {
                globalArrayUser[0][pos] = [];
                globalArrayUser[0][pos].push(acc);
                globalArrayUser[0][pos].push(user);
            } else {
                if (globalArrayUser[0][pos].length > limitLength) {
                    pos++;
                    globalArrayUser[0][pos] = [];
                } 
                globalArrayUser[0][pos].push(user);
            }
            return globalArrayUser;
        });
}