
let clickerdiv = document.getElementById("ClickList");
let List = document.getElementById("dih");


clickerdiv.addEventListener('click', () => {
    List.classList.toggle("active");
});
