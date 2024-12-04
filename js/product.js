let url = new URLSearchParams(document.location.search);
const params = url.get("id");
const title = document.querySelector(".product-name");
const img = document.querySelector(".product-image");

const list = [
    {
        id: 1,
        name: "Air Force 1",
        url: "./images/airForce1.webp",
    },
    {
        id: 2,
        name: "Lebron Black",
        url: "./images/lebronBlack.webp",
    },
    {
        id: 3,
        name: "SB Low Brown",
        url: "./images/brownsb.webp",
    },
    {
        id: 4,
        name: "BRSB",
        url: "./images/brsb.webp",
    },
    {
        id: 5,
        name: "Dunk Low",
        url: "./images/dunklow.webp",
    },
    {
        id: 6,
        name: "Lebron XXL",
        url: "./images/lebronxx.webp",
    },
    {
        id: 7,
        name: "Metcon 5",
        url: "./images/metcon5.webp",
    },
    {
        id: 8,
        name: "Metcon 9",
        url: "./images/metcon9.webp",
    },
    {
        id: 9,
        name: "Nike Blazer",
        url: "./images/nike_blazer.webp",
    },
]

title.textContent = list[params - 1].name
img.src = list[params - 1].url




console.log(params)