document.getElementById("take").onclick = take;

function take() {
  const bill = document.getElementById("bill").value;
  const paidText = document.getElementById("paid").value;

  // Task 8: an empty paid box stores null
  let paid = paidText;
  if (paidText === "") {
    paid = null;
  }

  const change = getChange(paid, bill);   // call above the function below

  document.getElementById("change").textContent = "Change: " + change;
  document.getElementById("owed").textContent = "";
  document.getElementById("half").textContent = "";
  document.getElementById("paidKind").textContent = "";

  if (change < 0) {
    document.getElementById("owed").textContent = "Still owed: " + (bill - paid);
  }
  if (change > 0) {
    document.getElementById("half").textContent = "Half of the change: " + change / 2;
  }
  if (paid === null) {
    document.getElementById("paidKind").textContent = "Kind of null: " + typeof paid;
  }
}

function getChange(paid, bill) {
  return paid - bill;
}