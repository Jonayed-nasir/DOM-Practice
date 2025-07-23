// let acjast = document.querySelector("#menu");


// acjast.insertAdjacentHTML("beforebegin", "<h1>after heading tag</h1>")
// acjast.insertAdjacentHTML("afterbegin", "<li>Home Page</li>")
// acjast.insertAdjacentHTML("beforeend", "<li>Sing in Page</li>")
// acjast.insertAdjacentHTML("afterend", "<h1>agter end heading tag</h1>")

// !JavaScript replaceChild() Method

// const menu = document.querySelector("#menu");

// let li = document.createElement("li");
// li.textContent = 'Home'

// menu.replaceChild(li, menu.firstElementChild)

// const newNode = document.createElement("p");
// newNode.innerText = "This is new text!";

// const oldNode = document.querySelector("#demo")

// document.body.replaceChild(newNode, oldNode)

// !part 2 clone node

// let menu = document.querySelector("#menu")
// let cloneMenu = menu.cloneNode(true)
// 
// document.body.appendChild(cloneMenu)


// const card = document.getElementById("card");
// const copy = card.cloneNode(true)

// document.body.appendChild(copy)

// const card = document.querySelector("#card");
// const copy = card.cloneNode(true);
// copy.id = 'copyNode'

// document.body.appendChild(copy)


// const menu = document.querySelector("#menu");
// const li = document.querySelector("li");
// const clonedLi = li.cloneNode(true);
// clonedLi.textContent = "About";
// menu.appendChild(clonedLi)

// part 3

// let menu = document.querySelector("#menu");

// menu.firstElementChild.remove()


// pat 4 

// const menu = document.getElementById("menu");

// const li = document.createElement("li");
// li.textContent = 'Home'

// menu.insertBefore(li, menu.firstElementChild)

// const menu = document.getElementById("menu");

// const li = document.createElement("li");
// li.textContent = "Home"

// menu.inertAfter(li, menu.lastElementChild)


// function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }

// let menu = document.getElementById("menu");

// let li = document.createElement("li")
// li.textContent = "Sercices"

// insertAfter(li, menu.lastElementChild)


// function inertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)
// }


// function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)
// }

// let menu = document.querySelector("#menu");

// let li = document.createElement("li");
// li.textContent = "Services"

// insertAfter(li, menu.lastElementChild)
