// window.addEventListener('beforeunload', (enve) => {
//     enve.preventDefault();
//     enve.returnValue = ''
// })

// window.addEventListener('unload', () => {
//     console.log('😢 পেজ পুরোপুরি ছেড়ে দেওয়া হয়েছে।')
// })

// window.addEventListener('DOMContentLoaded', () => {
//     console.log('✅ DOM Loaded')
// });

// window.addEventListener('load', () => {
//     console.log('✅ Page Fully Loaded')
// });

// window.addEventListener('beforeunload', (event) => {
// event.preventDefault();
// event.returnValue = ''
// });

// window.addEventListener('unload', () => {
//     console.log('🔚 Page Unloaded')
// })

// part 1 on over expenin

// function showMessage() {
//     alert('page loded completing!')
// }

// let myImage = document.querySelector("#myImage");

// myImage.onload = function () {
//     alert('✅ ছবিটি পুরোপুরি লোড হয়েছে!')
// }

window.onload = function () {
    console.log('🌍 Window পুরো লোড হয়ে গেছে!')
}