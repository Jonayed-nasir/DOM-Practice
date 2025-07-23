//  setAttribute()

// let link = document.getElementById("myLink");
// let btn = document.querySelector("#btn");
// let img = document.querySelector("#heroImage");

// link.setAttribute("href", "https://w3School.com");
// btn.setAttribute("disabled", "")
// img.setAttribute("src", "hero img")
// img.setAttribute("alt", "igm")

// function updateField() {
//     let input = document.querySelector("#userName");;
//     input.setAttribute("placeholder", "Enter your name")
//     input.setAttribute("maxlength", "20")
// }



// part 2

// let link = document.querySelector("#myLink");
// let value = link.getAttribute("href")
// let id = link.getAttribute("id")
// console.log(value)
// console.log(id)

// part 3

// let btn = document.getElementById("btn");

// btn.removeAttribute("type")
// btn.removeAttribute("id")
// console.log(btn)

// let sas = btn.hasAttribute("id")
// console.log(sas)

// let box = document.getElementById("box");
let div = document.createElement("div")
div.textContent = "আমি শিখছি JavaScript"

div.style.backgroundColor = 'red';
div.style.height = "200px";
div.style.border = "5px solid black";

document.body.append(div)