const eleGrid = document.querySelector(".grid");

const eleDifficolta = document.querySelector("#difficulty");

eleDifficolta.addEventListener("click", function(){
    
    if (eleDifficolta.value == 1) {
        for (let i = 1; i <= 100; i++) {
    const eleCell = document.createElement("div");
    eleCell.classList.add("cell100");
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
    }}

    else if (eleDifficolta.value == 2) {
        for (let i = 1; i <= 81; i++) {
    const eleCell = document.createElement("div");
    eleCell.classList.add("cell81");
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
    }}

    if (eleDifficolta.value == 3) {
        for (let i = 1; i <= 49; i++) {
    const eleCell = document.createElement("div");
    eleCell.classList.add("cell49");
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
    }}
})




