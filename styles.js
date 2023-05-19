const viewerWidth = window.innerWidth
const viewerHeight = window.innerHeight

window.addEventListener("resize", (data) => {
    // viewerWidth = window.innerWidth
})

const rootStyles = {
    width: "98.4vw",
    height: "98.4vh",
    maxWidth: "98.4vw",
    maxHeight: "98.4vh",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
}

const cardContainerStyles = {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
}

const cardDivStyles = {
    width: (viewerWidth),
    height: "60%",
}

const activeStyles = {
    width: "70vw",
    height: "60%",
    zIndex: 50,
}

if(viewerWidth <= 1050) {}


if(viewerWidth <= 900) {}


if(viewerWidth <= 760) {}


if(viewerWidth <= 650) {}


if(viewerWidth <= 500) {
    activeStyles.height = "50vh"
}

const defaultStyles = {
    rootStyles,
    cardContainerStyles,
    cardDivStyles,
    activeStyles
}

export default defaultStyles;


