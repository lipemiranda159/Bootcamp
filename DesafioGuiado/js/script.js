let globalCountries = [];
let globalFavoriteCountries = [];
let globalDivCountry = null;
let globalDivFavoritCountry = null;

window.addEventListener("load", async() => {
    globalCountries = await GetCountriesAsync();
    globalDivCountry = document.querySelector(".countries");
    globalDivFavoritCountry = document.querySelector(".favorite-countries");
    updateView();
});

function updateView() {
    globalDivCountry.innerHTML = "";
    globalDivFavoritCountry.innerHTML = "";
    sortCountries();
    render(globalDivCountry, globalCountries);
    const iconFavorite = "cancel";
    render(globalDivFavoritCountry, globalFavoriteCountries, iconFavorite);
}

function render(div, countries, type = "grade") {
    const formatter = new Intl.NumberFormat("pt-BR");
    const ulCountries = document.createElement("ul");

    ulCountries.classList.add("collection");
    const totalCountries = createText(`Países (${countries.length})`, "h5");
    div.appendChild(totalCountries);
    const divContainer = document.createElement('div');
    divContainer.classList.add('divContainer');
    divContainer.appendChild(ulCountries);
    let totalPopulation = 0;
    countries.forEach((country) => {
        const liCountry = creatLi();
        const img = createImg(country.flag);
        liCountry.appendChild(img);

        const spanCountry = createSpan(country.name);
        liCountry.appendChild(spanCountry);
        const pCountry = createPCountry(formatter.format(country.population));
        totalPopulation += country.population;
        liCountry.append(pCountry);
        const href = createHref(type, country);
        liCountry.appendChild(href);

        ulCountries.appendChild(liCountry);
    });
    const totalPopulationH5 = createText(
        `População total: (${formatter.format(totalPopulation)})`,
        "h6"
    );
    div.appendChild(totalPopulationH5);
    if (countries.length > 0) {
        div.appendChild(divContainer);
    }
}

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

function createSpan(name) {
    const spanCountry = document.createElement("span");
    spanCountry.classList.add("title");
    spanCountry.textContent = name;
    return spanCountry;
}

function createPCountry(population) {
    const pCountry = document.createElement("p");
    pCountry.textContent = population;
    return pCountry;
}

function createHref(type, country) {
    function transferObjList(listOrign, listDest, country) {

        listDest.push(country);

        listOrign = listOrign.filter(
            (filterName) => {
                return filterName.name !== country.name
            });
        return listOrign;
    }

    const iCountry = document.createElement("i");
    iCountry.classList.add("material-icons");
    iCountry.textContent = type;
    iCountry.addEventListener("click", () => {
        if (type === "grade") {
            globalCountries = transferObjList(globalCountries, globalFavoriteCountries, country);
        } else {
            globalFavoriteCountries = transferObjList(globalFavoriteCountries, globalCountries, country);
        }
        updateView();
    });
    const href = document.createElement("a");
    href.href = "#!";
    href.classList.add("secondary-content");
    href.appendChild(iCountry);
    return href;
}


function sortCountries() {
    if (globalCountries.length > 0) {
        globalCountries.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }
    if (globalFavoriteCountries.length > 0) {
        globalFavoriteCountries.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }
}

async function GetCountriesAsync() {
    const countriesObj = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await countriesObj.json();
    return countries.map((country) => {
        return {
            name: country.name,
            population: country.population,
            flag: country.flag,
        };
    });
}