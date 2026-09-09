const container = document.querySelector(".container")

function createDiv(){
    const div = document.createElement("div");
    div.classList.add("oneSquare");
    return div;
    
}

for(i=0; i<256; i++){
    createDiv();
    container.appendChild(createDiv());
}

// Makes the grid

const allSquares = document.querySelectorAll(".oneSquare");
allSquares.forEach((square)=>{
    square.addEventListener("mouseenter", (event) => {
        const hoveredDiv = event.target;
        hoveredDiv.style.backgroundColor = "blue";

    });
});

