function boop() {
    //generating values for each attribute
    let biome = Math.floor(Math.random() * 15);
    let hazard = Math.random() * 100;
    resource; //+ Math.floor(Math.random() * 2);
    let affix = Math.random();
    // depends on how many biomes. Do switch statement to choose biome
    //const biomes = ["Arid Wasteland", "Lush Rainforest", "Frozen Tundra", "Volcanic Caldera", "Underwater Abyss", 
    //                "Crystalline Caves", "Toxic Swamp", "Mountainous Badlands", "Subterranean Tunnels"];
    switch(biome) {
        case 0:
            biome = "Arid Wasteland";
            break;
        case 1:
          // code block
            biome = "Lush Rainforest";
            break;
        case 2:
          // code block
            biome = "Frozen Tundra";
            break;
        case 3:
            biome = "Volcanic Caldera";
            break;
        case 4:
            biome = "Underwater Abyss";
          // code block
            break;
        case 5:
            biome = "Crystalline Caves";
          // code block
            break;
        case 6:
            biome = "Toxic Swamp";
            break;
        case 7:
          // code block
            biome = "Mountainous Badlands";
            break;
        case 8:
          // code block
            biome = "Subterranean Tunnels";
            break;
        case 9:
            biome = "Arid Mountains";
            break;
        case 10:
            biome = "Gas Giant";
          // code block
            break;
        case 11:
            biome = "Sandy Desert";
          // code block
            break;
        case 12:
            biome = "Timewarped Valley";
            break;
        case 13:
            biome = "Vibrant Archipelago";
          // code block
            break;
        case 14:
            biome = "Thunderstorm Plains";
          // code block
            break;
        default:
          // code block
          biome = ":(";
    } 

    if(hazard < 7.5){
        hazard = -2;
        resource = -2;
    } else if (hazard < 25){
        hazard = -1;
        resource = -1;
    } else if (hazard < 75){
        hazard = 0;
        resource = 0;
    } else if (hazard < 92.5){
        hazard = 1;
        resource = 1;
    } else {
        hazard = 2;
        resource = 2;
    }



    document.getElementById("biome").innerHTML = biome;
    document.getElementById("hazard").innerHTML = hazard;
    document.getElementById("resource").innerHTML = resource;

  }