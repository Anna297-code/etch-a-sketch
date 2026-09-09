const container = document.querySelector(".container")
function createDiv(){
    const div = document.createElement("div");
    div.classList.add("square");
    return div;
    
}

for(i=0; i<256; i++){
    createDiv();
    container.appendChild(createDiv());
}


