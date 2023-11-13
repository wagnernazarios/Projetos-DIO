let nome = "Nobunaga";
let xp = 5025;

if (xp < 1000) {
  console.log("O Herói de nome: " + nome + "está no nível de Ferro");
} else if (xp > 1001 && xp < 2000) {
  console.log("O Herói de nome: " + nome + " está no nível de Bronze");
} else if (xp > 2001 && xp < 5000) {
  console.log("O Herói de nome: " + nome + " está no nível de Prata");
} else if (xp > 5001 && xp < 7000) {
  console.log("O Herói de nome: " + nome + " está no nível de Ouro");
} else if (xp > 7001 && xp < 8000) {
  console.log("O Herói de nome: " + nome + " está no nível de Platina");
} else if (xp > 8001 && xp < 9000) {
  console.log("O Herói de nome: " + nome + " está no nível de Ascendente");
} else if (xp > 9001 && xp < 10000) {
  console.log("O Herói de nome: " + nome + " está no nível de Imortal");
} else if (xp >= 10001) {
  console.log("O Herói de nome: " + nome + " está no nível de Radiante");
}
x