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
console.log(lightest);

const testo = document.getElementById("testo");
testo.innerHTML = `La bici più leggera è ${lightest.name + ", " + `pesa` + " " + lightest.weight} kg`