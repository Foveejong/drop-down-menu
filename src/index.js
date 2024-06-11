import "./styles.css";

const initDropDownMenu = () => {
    const dropDownMenu = document.querySelector(".dropdown-menu");
    const ellipsis = document.querySelector(".ellipsis");
    ellipsis.addEventListener("click", () => {
        dropDownMenu.classList.toggle("visible");
    })
}

initDropDownMenu();