import { data } from "./data.js";

/////////////////////////////////// one emoji card creation
function createOneCard(icon, text, desc) {
    let main = document.getElementsByTagName("main")

    let newDiv2 = document.createElement("div")
    newDiv2.className = "emoji__block"
    main[0].append(newDiv2)
    newDiv2.insertAdjacentHTML("afterbegin", "<h3>" + desc + "</h3>")
    newDiv2.insertAdjacentHTML("afterbegin", "<h2>" + text + "</h2>")
    newDiv2.insertAdjacentHTML("afterbegin", "<div  class = 'image_class'>" + icon + "</div >")
}

///////////////////////////////take away the repetitive words in cards
let newData = data;
newData.forEach(element => {
    for (let key in element) {
        if (key == "keywords") {
            element[key] = [...new Set(element[key].split(' '))].join(' ');
        }
    };
    return element;

});


/////////////////////////////creation of all emoji cards
function createCards() {
    newData.forEach(element => {
        createOneCard(element.symbol, element.title, element.keywords)
    });
    return;
}
createCards()

/////////////////////// searching by keywords and title
const searchInput = document.querySelector(".search");
searchInput.addEventListener('input', (event) => inputHandler(event));

function inputHandler(event) {

    let sort = data.filter(
        (elem) =>
            elem.title.includes(event.target.value) ||
            elem.keywords.includes(event.target.value)
    );
    document.querySelector("main").innerHTML = "";
    getSortData(sort);

}

let getSortData = (sort) => {
    sort.forEach((element) => {
        createOneCard(element.symbol, element.title, element.keywords);
    });
}
