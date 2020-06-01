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
allUsers = [];
useCompletArray = false;
globalLever = null;
generalStatistics = false;

window.addEventListener("load", async () => {
  globalUsers = await getUsersAsync();
  countUser = document.querySelector("#countUser");
  statisticsShow = document.querySelector("#statistics");
  globalDivResults = document.querySelector(".divResults");
  globalDivStatistics = document.querySelector(".divStatistics");
  globalInput = document.querySelector(".input-search");
  globalButton = document.querySelector("#buscar");
  globalInput.addEventListener("keyup", async (event) => {
    console.log(event);
    if (globalInput.value !== "") {
      globalButton.disabled = false;
    } else {
      globalButton.disabled = true;
      useCompletArray = false;
      globalUsers = await getUsersAsync();
      render();
    }
    if (event.code == "Enter") {
      globalUsers = allUsers.filter((user) => {
        useCompletArray = true;
        return user.name.toLowerCase().includes(globalInput.value);
      });
      render();
      globalLever.disabled = true;
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
  const createUsers = (user) => {
    const liUser = creatLi();
    const img = createImg(user.picture);
    liUser.appendChild(img);

    const spanUser = createSpan(`${user.name}, ${user.age} anos`);
    liUser.appendChild(spanUser);

    ulUsers.appendChild(liUser);
    users++;
  };
  const ulUsers = document.createElement("ul");
  ulUsers.classList.add("collection");
  let users = 0;
  if (!useCompletArray) {
    globalUsers.forEach((users) => {
      users[actualPosition].forEach(createUsers);
    });
  } else globalUsers.forEach(createUsers);
  showStatistics();
  globalDivResults.appendChild(ulUsers);

  let pagination = createPagination();
  globalDivResults.appendChild(pagination);
}

function showStatistics() {
  const statistics = updateStatistics();
  countUser.textContent = `${statistics.length} usuário(s) encontrado(s)`;
  statisticsShow.textContent = "Estatísticas";
  const switcheStatistics = createSwithceStatistics();
  statisticsShow.appendChild(switcheStatistics);
  let sexM = createText(`Sexo masculino: ${statistics.man}`);
  statisticsShow.appendChild(sexM);
  let sexF = createText(`Sexo feminino: ${statistics.woman}`);
  statisticsShow.appendChild(sexF);
  let totalAges = createText(`Soma das idades: ${statistics.totalAge}`);
  statisticsShow.appendChild(totalAges);
  let avgAges = createText(`Média das idades: ${statistics.avgAge}`);
  statisticsShow.appendChild(avgAges);
}

function createSwithceStatistics() {
  const div = document.createElement("div");
  div.classList.add("switch");
  const level = document.createElement("label");
  level.textContent = "Estatísticas gerais";
  div.appendChild(level);
  const input = document.createElement("input");
  input.type = "checkbox";
  input.addEventListener("change", (event) => {
    if (event.target.checked) {
      globalUsers = allUsers;
      useCompletArray = true;
      generalStatistics = true;
      showStatistics();
      globalUsers = globalArrayUser;
      useCompletArray = false;
      globalLever.checked = true;
    } else {
      globalUsers = globalArrayUser;
      useCompletArray = false;
      generalStatistics = false;
      showStatistics();
      useCompletArray = false;
      globalLever.checked = false;
    }
  });
  globalLever = input;
  level.checked = generalStatistics;
  level.appendChild(input);
  const span = document.createElement("span");
  span.classList.add("lever");
  level.appendChild(span);
  return div;
}

function createPagination() {
  const eachUser = () => {
    let number = createNumber(count);
    ul.appendChild(number);
    count++;
  };

  const ul = document.createElement("ul");
  ul.classList.add("pagination");
  const liLeftArrow = createArrow("chevron_left");
  liLeftArrow.addEventListener("click", () => {
    if (actualPosition > 0 && !useCompletArray) {
      actualPosition--;
      render();
    }
  });
  ul.appendChild(liLeftArrow);
  let count = 0;
  if (!useCompletArray) {
    globalUsers[0][actualPosition].forEach(eachUser);
  } else {
    globalUsers.forEach(eachUser);
  }
  const liRightArrow = createArrow("chevron_right");
  liRightArrow.addEventListener("click", () => {
    if (actualPosition < globalUsers[0].length && !useCompletArray) {
      actualPosition++;
      render();
    }
  });
  ul.appendChild(liRightArrow);
  return ul;
}

function createArrow(iText) {
  const liLeftArrow = document.createElement("li");
  liLeftArrow.classList.add("disabled");
  const ahref = document.createElement("a");
  liLeftArrow.appendChild(ahref);
  const iLeftArrow = document.createElement("i");
  iLeftArrow.classList.add("material-icons");
  iLeftArrow.textContent = iText;
  return iLeftArrow;
}

function createNumber(index) {
  const number = document.createElement("li");
  if (index === actualPosition) {
    number.classList.add("active");
    number.classList.add("teal");
  } else {
    number.classList.add("waves-effect");
  }
  const ahref = document.createElement("a");
  ahref.textContent = index + 1;
  ahref.addEventListener("click", () => {
    actualPosition = index++;
    render();
  });
  number.appendChild(ahref);
  return number;
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
  const generateStatistics = (user, currentUser) => {
    if (user.gender) {
      user.gender === "female" ? woman++ : man++;
      currentUser.gender === "female" ? woman++ : man++;
      totalAge += user.age + currentUser.age;
    } else {
      currentUser.gender === "female" ? woman++ : man++;
      totalAge += currentUser.age;
    }
    const length = !useCompletArray
      ? globalUsers[0][actualPosition].length
      : globalUsers.length;
    return {
      man: man,
      woman: woman,
      totalAge: totalAge,
      avgAge: (totalAge / length).toFixed(2),
      length: length,
    };
  };
  let man = 0;
  let woman = 0;
  let totalAge = 0;
  if (!useCompletArray) {
    return globalUsers[0][actualPosition].reduce(generateStatistics);
  } else return globalUsers.reduce(generateStatistics);
}

const toUser = (user, id) => {
  return {
    id: id++,
    name: `${user.name.first} ${user.name.last}`,
    picture: user.picture.thumbnail,
    age: user.dob.age,
    gender: user.gender,
  };
};

async function getUsersAsync() {
  useCompletArray = false;
  generalStatistics = false;
  const usersObj = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const users = await usersObj.json();
  let id = 0;
  allUsers = users.results.map(toUser);
  id = 0;
  let pos = 0;
  globalArrayUserLenght = users.results.length / (limitLength + 1);
  globalArrayUser = [new Array(globalArrayUserLenght)];
  return users.results.map(toUser).reduce((acc, user) => {
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
