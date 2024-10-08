    // Help function to choose a random fact
function randomChoice(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

    // Create Dino Constructor
    class Dino {
        constructor(species, weight, height, diet, fact) {
            this.species = species;
            this.weight = weight;
            this.height = height;
            this.diet = diet;
            this.facts = [fact]; // Store facts in an array
        }
    }


    // Create Dino Objects
    let dinos = [];

(async () => {
    const response = await fetch("./dino.json");
    const json = await response.json();
    dinos = json["Dinos"].map(
        (dino) => new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.fact)
    );
})();


    // Create Human Object
    function Human(name, weight, height, diet) {
        this.species = "Human"; // The human species
        this.name = name;
        this.weight = weight;
        this.height = height; // In inches
        this.diet = diet;
    }

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
