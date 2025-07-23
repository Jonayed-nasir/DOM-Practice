//? JavaScript innerHTML vs createElement

// let content = document.querySelector("#content");

// content.innerHTML = '<h1>Hello Nair How can I Help You</h1>'

// let h1 = document.createElement("h1");
// h1.textContent = "Hello New Part Tech Owners,";

// content.appendChild(h1);

//! JavaScript after() Method

// let content = document.querySelector("#content");

// let h1 = document.createElement("h1");
// h1.textContent = "Hello New Part Tech Owners,";

// content.after(h1)

// let para1  = document.querySelector("#para1");

// let p = document.createElement("p");
// p.textContent  = "I am a new Paragraph";

// para1.after(p);


// let strong = document.createElement("strong");
// strong.textContent = 'Text Bold'

// para1.after("This is ", strong, " added after para1")

//! JavaScript append() Method

// let app = document.querySelector("#app");

// let appAry = ["JavaScript", "TypScript", "Python", "Java", "C"];

// let travelArr = appAry.map((item) => {
//     let li = document.createElement("li");
//     li.textContent = item;
//     return li
// })

// app.append(...travelArr)

// let append = document.querySelector("#append");

// append.append("Hello Joanyed")

// const menu = document.querySelector("#menu");

// const li1 = document.createElement("li");
// li1.textContent = "Home";

// const li2 = document.createElement("li");
// li2.textContent = "About"

// menu.append(li1, li2)


//! JavaScript prepend() Method

// let app = document.querySelector("#app")

// let langs = ["CSS", "JavaScript", "TypeScript"];

// let nodes = langs.map((lang) => {
//     let li = document.createElement("li");
//     li.textContent = lang
//     return li
// })


// app.prepend(...nodes)


// let prepend = document.querySelector("#apend")

// prepend.prepend("hello")