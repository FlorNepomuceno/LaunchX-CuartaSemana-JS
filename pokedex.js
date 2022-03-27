const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./image/pokemon-sad.gif");
        }
        else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);

        let pokemonName = data.name;
        pokName(pokemonName);

        let num = data.id;
        pokeNumero(num);

        let type = data.types.map((typ) => typ.type.name);
        document.getElementById("pokeType").innerHTML = "";
        type.forEach((item) => {
            if(item.includes("normal")){
                document.getElementById("pokeType").innerHTML +- `<span class="tipo-normal pixel-box--normal">${item}</span>`;
            }else if (item.includes("fire")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-fuego pixel-box--fuego">${item}</span>`;
            } else if (item.includes("water")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-agua pixel-box--primary">${item}</span>`;
            } else if (item.includes("grass")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-planta pixel-box--success">${item}</span>`;
            } else if (item.includes("flying")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-volador pixel-box--volador">${item}</span>`;
            } else if (item.includes("fighting")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-lucha">${item}</span>`;
            } else if (item.includes("poison")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-veneno">${item}</span>`;
            } else if (item.includes("electric")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-electrico pixel-box--warning">${item}</span>`;
            } else if (item.includes("ground")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-tierra">${item}</span>`;
            } else if (item.includes("rock")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-roca">${item}</span>`;
            } else if (item.includes("psychic")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-psiquico">${item}</span>`;
            } else if (item.includes("ice")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-hielo">${item}</span>`;
            } else if (item.includes("bug")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-bicho">${item}</span>`;
            } else if (item.includes("ghost")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-fantasma">${item}</span>`;
            } else if (item.includes("steel")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-acero">${item}</span>`;
            } else if (item.includes("dragon")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-dragon">${item}</span>`;
            } else if (item.includes("dark")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-oscuro">${item}</span>`;
            } else if (item.includes("fairy")) {
                document.getElementById("pokeType").innerHTML += `<span class="tipo-hada">${item}</span>`;
            } else {
                document.getElementById("pokeType").innerHTML += `<span>${item}</li>`;
            }
        })
        

        let hp = data.stats[0].base_stat;
        pokePh(hp)

        let altura = data.height;
        pokeAltura(altura)

        let peso = data.weight;
        pokePeso(peso);

        let atk = data.stats[1].base_stat;
        pokeAtk(atk)

        let def = data.stats[2].base_stat;
        pokeDef(def);

        let Satk = data.stats[3].base_stat;
        pokeSAtk(Satk);

        let Sdef = data.stats[4].base_stat;
        pokeSDef(Sdef);

        let speed = data.stats[5].base_stat;
        pokeSpeed(speed);

        let move = data.moves.map((typ) => typ.move.name);
        document.getElementById("pokeMove").innerHTML = "";
        pokeMove(move);

  
    })
}

//fetchPokemon() 

// Imagen del pokemon
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
// Nombre del pokemon
const pokName = (pokename) => {
    const pokemonName = document.getElementById("pokemonName");
    pokemonName.textContent = pokename.toUpperCase();
}
// Numero del pokemon
const pokeNumero = (num) =>{
    const pokeNumero = document.getElementById("pokeNumero");
    pokeNumero.textContent = num;
}
// Tipo del pokemon
const pokeType = (type) => {
    const pokeType = document.getElementById("pokeType");
    pokeType.textContent = type;
}
// PH del pokemon
const pokePh = (hp) =>{
    const pokePh = document.getElementById("pokePh");
    pokePh.textContent = hp;
}
// Altura
const pokeAltura = (altura) =>{
    const pokeAltura = document.getElementById("pokeAltura");
    pokeAltura.textContent = altura;
}
// Peso
const pokePeso = (peso) =>{
    const pokePeso = document.getElementById("pokePeso");
    pokePeso.textContent = peso;
}
// Ataque
const pokeAtk = (atk) => {
    const pokeAtk = document.getElementById("pokeAtk");
    pokeAtk.textContent = atk;
}
// Defensa
const pokeDef = (def) =>{
    const pokeDef = document.getElementById("pokeDef");
    pokeDef.textContent = def;
}
// Ataque Especial
const pokeSAtk = (Satk) =>{
    const pokeSAtk = document.getElementById("pokeSAtak");
    pokeSAtk.textContent = Satk;
}
// Defensa Especial
const pokeSDef = (Sdef) =>{
    const pokeSDef = document.getElementById("pokeSDef");
    pokeSDef.textContent = Sdef;
}
// Velocidad
const pokeSpeed = (speed) =>{
    const pokeSpeed = document.getElementById("pokeSpeed");
    pokeSpeed.textContent = speed;
}
// Movimientos
const pokeMove = (move) =>{
    const pokeMove = document.getElementById("pokeMove");
    pokeMove.textContent = move;
}
const botonbuscador = document.getElementsByClassName("boton-buscador")[0];
botonbuscador.addEventListener("click", function () {
	document.getElementById("buscar-pokemon").style.display = "flex";
	document.getElementsByClassName("pokedex")[0].style.display = "none";
});

