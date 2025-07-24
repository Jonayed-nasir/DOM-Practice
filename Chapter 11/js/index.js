// const pwd = document.querySelector('input[type="password"');
// const text = document.querySelector('input[type="text"');


// pwd.addEventListener('focus', (e) =>{
//     e.target.style.backgroundColor = 'yellow'
// });
// pwd.addEventListener('blur', (e) => {
//     e.target.style.backgroundColor = ''
// });

// text.addEventListener('focus', (e) => {
//     e.target.style.borderBottom = '4px solid blue'
// });

// text.addEventListener('blur', (e) => {
//     e.target.style.borderBottom = '4px solid red'
// })


// const input = document.querySelector('#nameInput');
// const status = document.querySelector('#status');

// input.addEventListener('focus', () => {
//     status.textContent = '🟢 ইনপুট ফোকাসে আছে'
// })

// input.addEventListener('blur', () => {
//     status.textContent = '🔴 ইনপুট ফোকাস হারিয়েছে'
// })


// pat 2 practice

// const updateContent = () => {
//     const content = document.querySelector('#content');
//     const hash = window.location.hash.substring(1);

//     switch (hash) {
//         case 'home':
//             content.innerHTML = `
//             <h1>Home</h1>
//             <p>Welcome to the home page.</p>
//             `
//             break;

//         case 'about':
//             content.innerHTML = `
//                 <h1>About</h1>
//                 <p>Learn more about us on this page.</p>
//                 `
//             break;

//         case 'contact':
//             content.innerHTML = `
//                 <h1>Contact</h1>
//                 <p>Get in touch with us.</p>
//                 `
//     }
// };

// window.addEventListener('hashchange', updateContent)


// window.addEventListener('hashchange', () => {
// const hash = window.location.hash;
// document.getElementById('result').textContent = `Changed t ${hash}`
// })