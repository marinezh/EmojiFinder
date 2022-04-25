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
    newDiv2.insertAdjacentHTML("afterbegin", "<picture>" + icon + "</picture>")




}
console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));
console.log(createSome00("&#129409", "aaaa", "Hundred, points, symbol, wow, win, perfect, parties"));



// main.className = "emoji__flex"


// let x = document.getElementsByTagName("main")[0]
// console.log(x);
// let param = "я переменная"

// x.insertAdjacentHTML("afterbegin", "<p>" + param + "</p>")

// x.insertAdjacentElement("afterbegin", document.createElement("section"))

// console.dir(x);





// let main = document.getElementsByTagName("main")

// console.log(main);

// let new_element = document.createElement("p")
// new_element.innerText = "Hundred, points, symbol, wow, win, perfect, parties"
// main[0].append(new_element)





// let new_element = document.createElement("p")
// new_element.innerText = "Hundred, points, symbol, wow, win, perfect, parties"
// main[0].append(new_element)

// function createSome(icon, text, desc) {


// }