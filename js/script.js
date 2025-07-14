//SNACK 1

const bikes = [
  {
    name: "Van Rysel",
    weight: 10.6
  },
  {
    name: "Triban",
    weight: 11.25
  },
  {
    name: "Sava",
    weight: 8.7
  },
  {
    name: "Cervel",
    weight: 8.4
  },
  {
    name: "Pinarello",
    weight: 9.42
  },
  {
    name: "Ridley",
    weight: 8.0
  },
]


let lightest = bikes[0];
for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].weight < lightest.weight) {
    lightest = bikes[i];
  }
}
//console.log(lightest);



// SNACK 2
const teams = [
  {
    nome: "Juventus",
    puntiFatti: Math.floor(Math.random() * 20) + 1,
    falliSubiti: Math.floor(Math.random() * 20) + 1
  },
  {
    nome: "Milan",
    puntiFatti: Math.floor(Math.random() * 20) + 1,
    falliSubiti: Math.floor(Math.random() * 20) + 1
  },
  {
    nome: "Napoli",
    puntiFatti: Math.floor(Math.random() * 20) + 1,
    falliSubiti: Math.floor(Math.random() * 20) + 1
  },
  {
    nome: "Atletico Nacional",
    puntiFatti: Math.floor(Math.random() * 20) + 1,
    falliSubiti: Math.floor(Math.random() * 20) + 1
  },
  {
    nome: "Deportivo Cali",
    puntiFatti: Math.floor(Math.random() * 20) + 1,
    falliSubiti: Math.floor(Math.random() * 20) + 1
  },
  {
    nome: "Junior",
    puntiFatti: Math.floor(Math.random() * 20) + 1,
    falliSubiti: Math.floor(Math.random() * 20) + 1
  },
]