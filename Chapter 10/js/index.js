// let input = document.querySelector('#input');
// let text = document.querySelector('#text');

// input.addEventListener('keydown', (e) => {
//     text.innerHTML += e.key
// })

// input.addEventListener('keyup', (e) => {
//     text.innerHTML += e.key
// })


// aprt 2



let control = document.querySelector('#control');

// control.addEventListener('click', (e) => {
//     const scrollDemo = document.querySelector('#scrollDemo');
//     let target = e.target;

//     switch (target.id) {
//         case 'btnScrollLeft':
//             scrollDemo.scrollLeft += 20;
//             break;
        
//         case 'btnScrollTop':
//             scrollDemo.scrollTop += 20
//             break;
//     }
// })


control.addEventListener('click', (e) => {
    let div = document.querySelector('#scrollDemo');
    let target = e.target;

    switch(target.id) {
        case 'btnScrollLeft':
        div.scrollLeft += 25;
        break;

        case 'btnScrollTop':
            div.scrollTop += 15;
    }
})