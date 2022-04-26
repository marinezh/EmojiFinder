import { data } from "./data.js";

console.log(data);



function createSome(icon, text, desc) {


    let newDiv = document.createElement("div")
    let newDivInside = document.createElement("div")
    let newh2 = document.createElement("h2")
    let newh3 = document.createElement("h3")

    newDiv.className = "emoji__block"


    let main = document.getElementsByTagName("main")
    // console.dir(main);

    main[0].append(newDiv)

    newDiv.append(newDivInside);
    newDiv.append(newh2);
    newDiv.append(newh3);

    newDivInside.innerHTML = icon
    newh2.innerText = text
    newh3.innerText = desc

}
// console.log(createSome("&#129409", "ddd", "yyy"));



function createSome00(icon, text, desc) {
    let main = document.getElementsByTagName("main")
    // main.className = "emoji__flex"
    // main.classList.add("main__flex")
    let newDiv2 = document.createElement("div")
    newDiv2.className = "emoji__block"
    main[0].append(newDiv2)
    newDiv2.insertAdjacentHTML("afterbegin", "<h3>" + desc + "</h3>")
    newDiv2.insertAdjacentHTML("afterbegin", "<h2>" + text + "</h2>")
    newDiv2.insertAdjacentHTML("afterbegin", "<div  class = 'image_class'>" + icon + "</div >")




}
// console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
// console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
// console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
// console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
// console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
// console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));



function createCards() {
    data.forEach(element => {
        createSome00(element.symbol, element.title, element.keywords)
    });
    return;
}
createCards()


const searchInput = document.querySelector(".search");

// searchInput.addEventListener('change', () => inputHandler(event));
searchInput.addEventListener('input', (event) => inputHandler(event));

let allCards = document.getElementsByClassName("emoji__block")
function inputHandler(event) {
    console.log(event.target.value);

    // console.dir(allCards);
    if (event.target.value.length > 2) {
        let item
        for (item of allCards) {
            if (item.innerText.includes(event.target.value)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

            // console.dir(item.innerText);
        }

    }
}




