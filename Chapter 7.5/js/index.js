let btn = document.querySelector("#click");

// addEventListener("click", function() {
//     this.alert('event handing sison')
// })

// let click = document.querySelector("#click");

// function handleCick() {
//     alert('wering event handing')
// }

// addEventListener("click", handleCick)

// function handleClick() {
//     alert('Clicked!')
// }

// btn.addEventListener("click", handleClick)

// btn.removeEventListener("click", handleClick)

btn.addEventListener('click', function (event) {
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
})