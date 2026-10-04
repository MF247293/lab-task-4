const rows = [];
let lastRow = null;

document.getElementById("add").onclick = addRow;

function addRow() {
  const itemText = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  const row = {};
  if (itemText !== "") {
    row.item = itemText;
  }
  row.quantity = quantity;
  row.price = price;
  row.line = quantity * price;   
  row.note = price + quantity;  

  rows.push(row);
  lastRow = row;
  draw();

  document.getElementById("item").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
}

function draw() {
  const body = document.getElementById("rows");
  body.innerHTML = "";
  let total = 0;

  for (const row of rows) {
    const tr = document.createElement("tr");
    const cells = [row.item, row.quantity, row.price, row.line, row.note];
    for (const value of cells) {
      const td = document.createElement("td");
      td.textContent = String(value);   
      tr.appendChild(td);
    }
    body.appendChild(tr);

    if (!Number.isNaN(row.line)) {
      total = total + row.line;
    }
  }

  document.getElementById("total").textContent = "Total: " + total;
  document.getElementById("totalKind").textContent = "Kind of total: " + typeof total;
  document.getElementById("noteKind").textContent = "Kind of the Note on the new row: " + typeof lastRow.note;
  document.getElementById("sameValue").textContent =
    "Price text == price as a number: " + (lastRow.price == Number(lastRow.price));
  document.getElementById("sameKind").textContent =
    "Price text === price as a number (same kind): " + (lastRow.price === Number(lastRow.price));

  const lineKind = document.getElementById("lineKind");
  if (Number.isNaN(lastRow.line)) {
    lineKind.textContent = "Kind of that Line: " + typeof lastRow.line;
  } else {
    lineKind.textContent = "";
  }
}