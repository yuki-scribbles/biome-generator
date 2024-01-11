function boop() {
    const biome = Math.floor(Math.random() * 5);
    const hazard = Math.floor(Math.random() * 10);
    const resource = hazard + Math.floor(Math.random() * 2);
    // depends on how many biomes. Do switch statement to choose biome
    document.getElementById("biome").innerHTML = biome;
    document.getElementById("hazard").innerHTML = hazard;
    document.getElementById("resource").innerHTML = resource;

  }