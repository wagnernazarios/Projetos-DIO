class hero {
  constructor(nome, idade, classe) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
  }
  atacar(ataque) {
    console.log(`o ${this.classe} ${this.nome} atacou usando ${ataque}`);
  }
}

let ninja = new hero("Nobunaga", 27, "Ninja");
let guerreiro = new hero("Arthur", 42, "Guerreiro");
let mago = new hero("Merlin", 66, "mago");
let monge = new hero("Xiang Li", 30, "monge");

ninja.atacar("shuriken");
guerreiro.atacar("espada");
mago.atacar("magia");
monge.atacar("artes marciais");
