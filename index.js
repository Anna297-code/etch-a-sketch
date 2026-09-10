const container = document.querySelector(".container");
const body = document.querySelector("body")


function createGrid(width){
    for(let i=0; i < width ** 2; i++){
        const square = document.createElement("div");
        square.classList.add("oneSquare");
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blue";
        });
        square.style.height = `${640/width}px`;
        square.style.width = `${640/width}px`;
        container.appendChild(square);


    }


}

const button = document.createElement("button");
button.textContent = "New Grid";
button.classList.add("button");
body.prepend(button);

button.addEventListener("click", () => {
    let userInput = prompt("Input width of new grid:");
    let number = Number(userInput);

    if(number > 100){
        alert("Number must be less than 100 or less");
    } else {
         container.innerHTML = "";
        createGrid(number);

    }

   
}
)
