import { Card, Cardio } from "./cards.js";
import defaultStyles from "./styles.js"
const rootElement = document.getElementById('root');





const changeMainDiv = async(newActive, fromInstance) => {
    await clrImgPlacer()
    cardia.setActive(newActive + 1)
    await imgPlacer()
    if(imgPlacer) {
        rootElement.querySelectorAll(".contain").forEach((contained) => {
            contained.style.cursor = "pointer";
            contained.style.borderRadius = "20px";
            contained.style.background = "linear-gradient(180deg, rgba(250, 249, 253, 0) 10%, #00f7ff 100%)";
        })
        rootElement.querySelector(".active").style.background = "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #031629 100%)"
    }
}









let viewerWidth = window.innerWidth
let viewerHeight = window.innerHeight

rootElement.style.width =defaultStyles.rootStyles.width;
rootElement.style.height =defaultStyles.rootStyles.height;
rootElement.style.maxWidth =defaultStyles.rootStyles.maxWidth;
rootElement.style.maxHeight =defaultStyles.rootStyles.maxHeight;
rootElement.style.overflow =defaultStyles.rootStyles.overflow;
rootElement.style.margin =defaultStyles.rootStyles.margin;
rootElement.style.padding =defaultStyles.rootStyles.padding;
rootElement.style.top = defaultStyles.rootStyles.top;
rootElement.style.left =defaultStyles.rootStyles.left;

const arr2 = [
    {
        src: "./assets/card.png",
        alt: "",
    },
    {
        src: "./assets/card.png",
        alt: "",
    },
    {
        src: "./assets/card.png",
        alt: "",
    },
    {
        src: "./assets/card.png",
        alt: "",
    },
    {
        src: "./assets/card.png",
        alt: "",
    },
    {
        src: "./assets/card.png",
        alt: "",
    },
]

const cardia = new Cardio(arr2);

const cardContainer = document.createElement("div");
const data = cardia.data;
let imageCount = data.length


const clrImgPlacer = () => {
    cardContainer.innerHTML = "";
}

const imgPlacer = () => {
        cardia.data.map((card, index) => {
            const cardDiv = document.createElement("div");
            const cardImg = document.createElement("img");
            cardImg.src = card.src;
            cardImg.alt = card.alt;
            cardImg.style.width = "100%";
            cardImg.style.height = "100%";
            cardImg.style.objectFit = "contain"
            if (index === cardia.active - 1) {
                cardDiv.classList.toggle("active", true);
                cardDiv.classList.add("contain");
                cardDiv.style.zIndex = defaultStyles.activeStyles.zIndex;
                if (viewerWidth > 600) { 
                    cardDiv.style.width = defaultStyles.activeStyles.width;
                    cardDiv.style.height = "60%";
                } else {
                    cardDiv.style.width = `89vw`;
                    cardDiv.style.height = "70vh";
                }
            } else {
                if (viewerWidth > 600) { 
                    cardDiv.style.width = `${(30 / (imageCount - 1))}vw`;
                    cardDiv.style.height = "60%";
                } else {
                    cardDiv.style.width = `89vw`;
                    cardDiv.style.height = `${(30 / (imageCount - 1))}vh`;
                }
                cardDiv.classList.add("contain");
            }
            cardDiv.addEventListener("click", () => changeMainDiv(index))
            cardDiv.appendChild(cardImg)
            cardContainer.appendChild(cardDiv)
        })
}


if (viewerWidth > 600) { 
    cardContainer.style.flexDirection = defaultStyles.cardContainerStyles.flexDirection;
} else {
    cardContainer.style.flexDirection = "column";
}

// const viewerWidth = document.createElement("p");

// window.addEventListener("resize", (data) => {
//     // console.log(data, "tester")
//     // console.log(window.innerWidth)
//     viewerWidth.innerHTML =  window?.innerWidth
// })

cardContainer.id = "cardContainer";
cardContainer.style.display = defaultStyles.cardContainerStyles.display;
cardContainer.style.gap = defaultStyles.cardContainerStyles.gap;
cardContainer.style.width = defaultStyles.cardContainerStyles.width;
cardContainer.style.height = defaultStyles.cardContainerStyles.height;
cardContainer.style.maxWidth = defaultStyles.cardContainerStyles.maxWidth;
cardContainer.style.maxHeight = defaultStyles.cardContainerStyles.maxHeight;
cardContainer.style.justifyContent = "center";
cardContainer.style.alignItems = "center";

imgPlacer()

rootElement.appendChild(cardContainer)
// rootElement.prepend(viewerWidth)

const contains = rootElement.querySelectorAll(".contain").forEach((contained) => {
    contained.style.cursor = "pointer";
    contained.style.borderRadius = "20px";
    contained.style.background = "linear-gradient(180deg, rgba(250, 249, 253, 0) 10%, #00f7ff 100%)";
})
const activeTay = rootElement.querySelector(".active")
{activeTay ? activeTay.style.background = "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #031629 100%)": ""}