// let div = document.createElement("div");
// div.id = 'content';
// div.className = 'container';

// div.innerHTML = "<h1 class= 'title'>Hello JavaScript or DOM Developer</h1>";

// let text = document.createTextNode("Hello JavaScript or DOM Developer");
// div.appendChild(text)

// document.body.appendChild(div)


// let div = document.createElement("div");
// div.id = 'content';
// div.className = 'container'

// div.innerHTML = '<a href="https://www.javascripttutorial.net/javascript-dom/javascript-createelement/">JavaScript tutorial.net</a>';

// let text = document.createTextNode(" Hello JavaScript or DOM Developer - This is a text node");
// div.appendChild(text)

// document.body.appendChild(div);

// let div = document.createElement("div");
// div.id = 'content';
// div.className = 'container';

// let h1 = document.createElement("h1");
// h1.textContent = "Hello JavaScript an DOM Developer";
// div.appendChild(h1)

// document.body.appendChild(div);





// const items = ["Home", "Services", "Contact"];
// const menu = document.querySelector("#menu");

// items.forEach(text => {
    //   const li = document.createElement("li");
    //   li.textContent = text;
    //   menu.appendChild(li);
    // });



    // const menu = document.querySelector("#menu");
    
    // let li = document.createElement("li");
    // li.textContent = "About Us";
    // menu.appendChild(li);
    
    // li = document.createElement("li");
    // li.textContent = "Contact Us";
    
    // menu.appendChild(li);


    // work 3 

let firstElement = document.querySelector("#first-list");
let secondElement = document.querySelector("#second-list")

let child = firstElement.firstElementChild;

console.log(secondElement.appendChild(child))