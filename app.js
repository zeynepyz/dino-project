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
    function getHumanData() {
        const name = document.getElementById("name").value;
        const feet = document.getElementById("feet").value;
        const inches = document.getElementById("inches").value;
        const weight = document.getElementById("weight").value;
        const diet = document.getElementById("diet").value;
        return {
            name,
            feet: parseInt(feet),
            inches: parseInt(inches),
            height: parseInt(feet) * 12 + parseInt(inches), // Convert height to inches
            weight: parseInt(weight),
            diet,
            species: "Human",
        };
    }


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareHeight(dinos, human) {
        dinos.forEach((dino) => {
            if (dino.species !== "Pigeon") {
                if (dino.height > human.height) {
                    dino.facts.push(`${dino.species} is taller than ${human.name}.`);
                } else {
                    dino.facts.push(`${dino.species} is shorter than ${human.name}.`);
                }
            }
        });
    }

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareWeight(dinos, human) {
        dinos.forEach((dino) => {
            if (dino.species !== "Pigeon") {
                if (dino.weight > human.weight) {
                    dino.facts.push(`${dino.species} is heavier than ${human.name}.`);
                } else {
                    dino.facts.push(`${dino.species} is lighter than ${human.name}.`);
                }
            }
        });
    }

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet(dinos, human) {
        dinos.forEach((dino) => {
            if (dino.species !== "Pigeon") {
                if (dino.diet.toLowerCase() === human.diet.toLowerCase()) {
                    dino.facts.push(`${dino.species} eats the same diet as ${human.name}.`);
                } else {
                    dino.facts.push(`${dino.species} eats a different diet than ${human.name}.`);
                }
            }
        });
    }


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
