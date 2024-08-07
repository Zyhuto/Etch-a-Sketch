const squareContainer = document.querySelector(".square-container");

function createChildElement () {
    let squareAmount = getComputedStyle(squareContainer).getPropertyValue("--side-length") ** 2
    for(i = 0; i < squareAmount; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        squareContainer.appendChild(newSquare);

    }


}


function changeSize () {
    let  newSize = +prompt("enter new Size From 1 to 100");
    if (!Number.isInteger(newSize) || !(newSize > 0) || newSize > 1000){
        alert("wrong Input")
        return changeSize();}
    squareContainer.innerHTML = "";
    squareContainer.style.setProperty("--side-length", newSize);
    createChildElement();
    return;
    

}

const changeSizeButton = document.querySelector(".size-button");

changeSizeButton.addEventListener("click", e => changeSize());
squareContainer.addEventListener("mouseover", e => changeColor(e.target))

function getRandomRGBColor (){
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

function changeColor (target) {
    if (target.classList.contains("square-container")) {
        return;}

        target.style.background = getRandomRGBColor();

}

createChildElement();