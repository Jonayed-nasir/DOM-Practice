// let btn = document.querySelector("#btn");

// btn.addEventListener("mousedown", () => {
//     console.log('🔴 Mouse Down - চাপা হল')
// });

// btn.addEventListener('mouseup', () => {
//     console.log("🟢 Mouse Up - ছেড়ে দিলাম")
// });

// btn.addEventListener('click', () => {
//     console.log("✅ Click - চাপা + ছেড়ে দেওয়া সম্পূর্ণ")
// });

// btn.addEventListener('dblclick', () => {
//     console.log('Double Click')
// })

let btn = document.querySelector('#btn');
// let btn2 = document.querySelector('#btn2')
// let body = document.querySelector('body');

// btn.addEventListener('mousedown', () => {
//     body.style.backgroundColor = 'black'
// })

// btn.addEventListener('dblclick', () => {
//     body.style.backgroundColor = 'blue'
// })

// btn2.addEventListener('mouseup', () => {
//     body.style.backgroundColor = 'white'
// })

// btn2.addEventListener('dblclick', () => {
//     body.style.backgroundColor = 'red'
// })

btn.addEventListener('mouseup', (e) => {
    switch (e.button) {
        case 0: console.log("🖱️ Left click"); break;
        case 1: console.log("🖲️ Middle click"); break;
        case 2: console.log("🖱️ Right click"); break;
        default: console.log("Unknown button");
    }
})