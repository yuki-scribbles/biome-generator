function boop() {
    //generating values for each attribute
    //let level = ...; will be base value for all of the other values
    let biome = Math.floor(Math.random() * 15);
    let hazard = Math.random() * 100;
    let resource; //+ Math.floor(Math.random() * 2);
    let affix = Math.random();

    //const biomes = ["Arid Wasteland", "Lush Rainforest", "Frozen Tundra", "Volcanic Caldera", "Underwater Abyss", 
    //                "Crystalline Caves", "Toxic Swamp", "Mountainous Badlands", "Subterranean Tunnels"];
    const hazards = ["Harsh Habitality", "Infections & Insects", "Lmited Visibility", "Electronics Malfunctions", "Limited Communication", 
                      "Gentle Giants", "Corrosive Environment", "Biomimicry", "Carnivorous Flora", "Weak Structures", "Malleable Landscape",
                      "Rich Deposits", "Abundant Specimens", "Other Crews’ Remnants"];

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

    for(let i = 1; i < 5; i ++){
      document.getElementById("A" + i).innerHTML = "";
      document.getElementById("B" + i).innerHTML = "";
      document.getElementById("C" + i).innerHTML = "";
      document.getElementById("D" + i).innerHTML = "";
    }

    let board = Math.floor(Math.random()*biome.boardSize.length);
    board = biome.boardSize[board];
    // size = board.charCodeAt(0) - 64;
    size = 4;
    // let coordinate;
    let resources = [];
    let row;
    let column;
    for(let i = resource + 5; i > 0; i --){
      row = String.fromCharCode(Math.floor(Math.random()*size) + 65);
      column = Math.floor(Math.random()*size) + 1;
      while(document.getElementById(row + column).innerHTML != ""){
        row = String.fromCharCode(Math.floor(Math.random()*size) + 65);
        column = Math.floor(Math.random()*size) + 1;
      }
      resources.push(new Item("*", row + column));
      document.getElementById(row + column).innerHTML = resources[resources.length - 1].symbol;
    }


    document.getElementById("biome").innerHTML = biome.name;
    document.getElementById("Effects").innerHTML = biome.effect;
    document.getElementById("Affixes").innerHTML = biome.affix;
    document.getElementById("resource").innerHTML = resource;
    document.getElementById("hazard").innerHTML = hazard;
    document.getElementById("gameBoards").innerHTML = board;

    render(resources);
    // document.getElementById("D3").innerHTML = "x";
    // document.getElementById("A1").innerHTML = "o";

  }

  // function render(resources){
  //   // let coordinate;
  //   for (let item in resources){
  //     // id = String.fromCharCode(coordinate[0] + 65) + (coordinate[1] + 1);
  //     document.getElementById(item.coordinates).innerHTML = item.symbol;
  //   }
  // }

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