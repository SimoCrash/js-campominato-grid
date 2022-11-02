const eleGrid = document.querySelector(".grid");


for (let i = 1; i <= 100; i++) {
    const eleCell = document.createElement("div");
    eleCell.classList.add("cell");
    eleCell.innerHTML += i; 
    eleGrid.append(eleCell);  

    eleCell.addEventListener("click", function(){
        eleCell.classList.toggle("active");
        console.log("Hai selezionato la casella numero " + i);
        
        // if (eleCell.classList.add("active")) {
        //     console.log("Hai selezionato la casella numero " + i);
        // } else if (eleCell.classList.remove("active")) {
        //     console.log(`Hai deselezionato la casella numero ${i}`);
        // }
    })
}
