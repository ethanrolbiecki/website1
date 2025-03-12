const clicker = document.querySelector('.click')

var clicked_amount = 0;

clicker.addEventListener('click',()=> {
    clicked_amount = clicked_amount + 1;
    document.querySelector('.amount h1').innerHTML = clicked_amount;
})
