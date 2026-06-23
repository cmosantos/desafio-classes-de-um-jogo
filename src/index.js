class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;

      case "guerreiro":
        ataque = "espada";
        break;

      case "monge":
        ataque = "artes marciais";
        break;

      case "ninja":
        ataque = "shuriken";
        break;

      default:
        ataque = "um ataque desconhecido";
        break;
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const herois = [
  new Heroi("Merlin", 70, "mago"),
  new Heroi("Arthur", 35, "guerreiro"),
  new Heroi("Lee", 42, "monge"),
  new Heroi("Hattori", 28, "ninja")
];

for (const heroi of herois) {
  heroi.atacar();
}
