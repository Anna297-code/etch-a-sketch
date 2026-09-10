const container = document.querySelector(".container");


function createGrid(width){
    for(i=0; i < width ** 2; i++){
        const square = document.createElement("div");
        square.classList.add("oneSquare");
        square.style.height = ` ${640/width}px`;
        square.style.width = ` ${640/width}px`;
        container.appendChild(square);


    }


}

createGrid(4)