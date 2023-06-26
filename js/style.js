"use strict"

const menuItems = document.querySelectorAll(".menu li a");

const applyMenuStyle = () => {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.color = "white";
    }
}

applyMenuStyle();


