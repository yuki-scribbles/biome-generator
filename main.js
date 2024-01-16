function boop() {
    //generating values for each attribute
    //let level = ...; will be base value for all of the other values
    let biome = Math.floor(Math.random() * 15);
    let hazard = Math.random() * 100;
    let resource; //+ Math.floor(Math.random() * 2);
    let numAffixes;
    let chosenAffixes = [];
    const boardSizes = new Map([
      ["A", [11,11]],
      ["B", [13,13]],
      ["C", [15,15]],
      ["D", [15,15]],
      ["E", [15,15]],
      ["F", [15,15]],
      ["G", [11, 20]]
    ]);

    //const biomes = ["Arid Wasteland", "Lush Rainforest", "Frozen Tundra", "Volcanic Caldera", "Underwater Abyss", 
    //                "Crystalline Caves", "Toxic Swamp", "Mountainous Badlands", "Subterranean Tunnels"];
    const Affixes = ["Harsh Habitality", "Infections & Insects", "Lmited Visibility", 
                    "Electronics Malfunctions", "Limited Communication", "Gentle Giants",
                    "Corrosive Environment", "Biomimicry", "Carnivorous Flora", 
                    "Weak Structures", "Malleable Landscape", "Rich Deposits", "Abundant Specimens", 
                    "Other Crews’ Remnants"];

    let biomes = [];

    biomes.push(new Biome("Muddy Wasteland", 
      "Movement takes an extra action point.", 
      [0,1,2,3,6,7,10,13], 
      ["A", "C"]));
    biomes.push(new Biome("Lush Rainforest", 
      "There is no oxygen device requirement/turn limit. Fauna are always one size larger than their encounter card", 
      [1,5,7,8,12,13], ["A", "B", "D", "E"]));
    biomes.push(new Biome("Frozen Tundra", 
      "Cannot use pets/mounts.", 
      [0, 2, 3, 7, 9, 10, 11, 13],
      ["A", "B", "C"]));
    biomes.push(new Biome("Volcanic Caldera",
      "N/A",
      [0, 2, 4, 6, 7, 8, 12, 13],
      ["A", "C", "E"]));
    biomes.push(new Biome("Underwater Abyss",
      "Exploration past a certain depth requires submersible",
      [1,2,3,5,7,8,12,13],
      ["G"]));
    biomes.push(new Biome("Crystalline Caves",
      "N/A",
      [1, 3, 4, 7, 9, 11, 13],
      ["C", "D", "F"]));
    biomes.push(new Biome("Toxic Swamp",
      "N/A",
      [1,2,3,5,6,7,8,12,13],
      ["A", "B", "C", "D", "E"]));
    biomes.push(new Biome("Mountainous Badlands",
      "N/A",
      [0,1,2,4,7,11,13],
      ["A", "B"]));
    biomes.push(new Biome("Subterranean Tunnels",
      "N/A",
      [1, 2, 3, 4, 6, 7, 9, 11, 13],
      ["D", "E"]));
    biomes.push(new Biome("Aetherial Cloudscape",
      "N/A",
      [0, 1, 2, 3, 6, 7, 10, 13],
      ["C", "E", "F"]));
    biomes.push(new Biome("Aetherial Cloudscape",
      "N/A",
      [0, 1, 2, 3, 6, 7, 10, 13],
      ["C", "E", "F"]));
    biomes.push(new Biome("Gravitational Outlier",
      "N/A",
      [0, 1, 3, 5, 7, 9, 12, 13],
      ["E", "F"]));
    biomes.push(new Biome("Sandy Desert",
      "N/A",
      [1, 2, 5, 6, 7, 10, 13],
      ["A", "B", "C"]));
    biomes.push(new Biome("Timewarped Valley",
      "Chance that an event can be undone or that a turn can be skipped",
      [3, 4, 7, 10, 13],
      ["D", "F"]));
    biomes.push(new Biome("Vibrant Archipelago",
      "N/A",
      [1, 5, 7, 8, 12, 13],
      ["A", "B", "E", "F"]));
    biomes.push(new Biome("Thunderstorm Plains", 
      "Lightning events are dangerous but have the chance to charge power cells",
      [2, 3, 4, 7, 13],
      ["A", "B"]));

    biome = biomes[biome];

    if(hazard < 7.5){
        hazard = -2;
    } else if (hazard < 25){
        hazard = -1;
    } else if (hazard < 75){
        hazard = 0;
    } else if (hazard < 92.5){
        hazard = 1;
    } else {
        hazard = 2;
    }
    resource = hazard;

    numAffixes = Math.random() * 100;
    if(numAffixes < 25){
      numAffixes = 0;
    } else if (numAffixes < 75){
      numAffixes = 1;
    } else {
      numAffixes = 2;
    }
    
    if(numAffixes >= 1){
      let roll = Affixes[Math.floor(Math.random()*biome.affix.length)];
      chosenAffixes.push(roll);
    }
    if(numAffixes == 2){
      chosenAffixes.push(Affixes[Math.floor(Math.random()*biome.affix.length)]);
      while(chosenAffixes[1] == chosenAffixes[0]){
          roll = Affixes[Math.floor(Math.random()*biome.affix.length)];
          chosenAffixes[1] = roll;
      }
      chosenAffixes[1] = " " + chosenAffixes[1];
    }
    chosenAffixes
    
  

    //set up board size and populate with items
    let board = Math.floor(Math.random()*biome.boardSize.length);
    board = biome.boardSize[board];
    size = boardSizes.get(board); //height x width. change later based on board size
    let resources = [];
    let row;
    let column;

    //clear board and make it to size
    for(let i = 1; i < 21; i ++){
      for(let j = 65; j < 80; j ++){
        document.getElementById(String.fromCharCode(j) + i).innerHTML = "";
      }
    }

    //making right rows appear and disappear
    for(let i = 76; i < 80; i ++){
      document.getElementById("row" + String.fromCharCode(i)).style.display = "";
    }
    for(let i = 65 + size[0]; i < 80; i ++){
      document.getElementById("row" + String.fromCharCode(i)).style.display = "None";
    }

    //add and remove column cells
    for(let i = 11; i <= size[1]; i ++){
      for(let j = 65; j < 65 + size[0]; j ++){
        document.getElementById(String.fromCharCode(j) + i).style.display = "";
      }
    }
    for(let i = size[1] + 1; i < 21; i ++){
      for(let j = 65; j < 65 + size[0]; j ++){
        document.getElementById(String.fromCharCode(j) + i).style.display = "None";
      }
    }

    //make right header cells appear and dissappear
    for(let i = 11; i <= size[1]; i ++){
      document.getElementById("num" + i).style.display = "";
    }
    for(let i = size[1] + 1; i < 21; i ++){
      document.getElementById("num" + i).style.display = "None";
    }


    // for(let i = 12; i < size[1]; i ++){
    //   for(let j = 75; j < 65 + size[0]; j ++){
    //     // document.getElementById(String.fromCharCode(j) + i).style.display = "";
    //     document.getElementById(String.fromCharCode(j) + i).innerHTML = "";
    //   }
    // }




    // //populate board with resources
    for(let i = resource + 5; i > 0; i --){
      row = String.fromCharCode(Math.floor(Math.random()*size[0]) + 65).toUpperCase();
      column = Math.floor(Math.random()*size[1]) + 1;

      while(document.getElementById(row + column).innerHTML != ""){
        row = String.fromCharCode(Math.floor(Math.random()*size[0]) + 65).toUpperCase();
        column = Math.floor(Math.random()*size[1]) + 1;
      }
      resources.push(new Item("*", row + column));
      document.getElementById(row + column).innerHTML = resources[resources.length - 1].symbol;
    }

    //remove unused rows and columns

    //change text to info
    document.getElementById("biome").innerHTML = biome.name;
    document.getElementById("Effects").innerHTML = biome.effect;
    document.getElementById("Affixes").innerHTML = chosenAffixes;
    document.getElementById("resource").innerHTML = resource;
    document.getElementById("hazard").innerHTML = hazard;
    document.getElementById("gameBoards").innerHTML = board;
  }

  function Biome(name, effect, affix, boardSize) {
    this.name = name;
    this.effect = effect;
    this.affix = affix;
    this.boardSize = boardSize;
  }

  function Item(symbol, coordinates){
    this.symbol = symbol;
    this.coordinates = coordinates;
  }