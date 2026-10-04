const people = [
  { name: "Hamid Raza" }         
];

document.getElementById("here").onclick = function () { addPerson(true); };
document.getElementById("out").onclick = function () { addPerson(false); };

function addPerson(isIn) {
  const nameBox = document.getElementById("name");
  people.push({ name: nameBox.value, in: isIn });   
  nameBox.value = "";
  draw();
}

function draw() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  let count = 0;

  for (const person of people) {
    const tr = document.createElement("tr");
    const nameCell = document.createElement("td");
    const inCell = document.createElement("td");
    nameCell.textContent = person.name;
    inCell.textContent = String(person.in);   
    tr.appendChild(nameCell);
    tr.appendChild(inCell);
    list.appendChild(tr);

    if (person.in === true) {                
      count = count + 1;
    }
  }

  document.getElementById("count").textContent = "In the shop: " + count;
}

draw();