const typeHero = ["mago", "guerreiro", "monge", "ninja"];

class Hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(){
        let weapon;
        if (this.type == "mago") {
            weapon = "magia";
        } else if (this.type == "guerreiro"){
            weapon = "espada";
        } else if (this.type == "monge"){
            weapon = "artes marciais";
        } else if (this.type == "ninja"){
            weapon = "shuriken";
        }

        console.log(`o ${this.type} atacou usando ${weapon}`)
    }
}

for (let i = 0; i < typeHero.length; i++){
    let hero = new Hero('Diogo', 19, typeHero[i]);
    hero.attack();
}

