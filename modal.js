
// const startt = document.getElementById("start");
// const maincontainer = document.getElementById("mainmodal");
// const end = document.getElementById("close");

// startt.addEventListener("click", () => {
//     maincontainer.classList.add("show");
// });

// end.addEventListener("click", () => {
//     maincontainer.classList.remove("show");
// });


const startt = document.getElementById("start");
const maincontainer = document.getElementById("mainmodal");
const end = document.getElementById("close");

startt.addEventListener("click", function() {
    maincontainer.classList.add("show");
});

end.addEventListener("click", function() {
    maincontainer.classList.remove("show");
});
