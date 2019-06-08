function fetchSup() {
  fetch('http://gamma.apexcode.ro/api/suppliers')
    .then(resp => resp.json())
    .then(renderSup)
}
const supCollection = document.getElementById('sup-collection')
function renderSup(sup) {
  supCollection.innerHTML = ""
  sup.forEach(function (sup) {
    supCollection.innerHTML += `
 <div class="card" data-id=${sup.Id}>
      <p class="title-name">${sup.Name}</p>
      <p>${sup.CUI}</p>
      <button class="delete">Delete</button>
 </div>
`
  })
}
fetchSup();

// adaugare supplier

document.getElementById("save").addEventListener('click', addSupplier);
function addSupplier() {
  let name = document.getElementById('name').value;
  let cui = document.getElementById('cui').value;


  var supplier = {
    Name: name,
    CUI: cui
  };

  fetch("http://gamma.apexcode.ro/api/suppliers", {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(supplier)
  })
    .then(response => response.json())
    .then(fetchCustomer)
}

// delete supplier

document.getElementById('sup-collection').addEventListener('click', function (event) {
  let delButton = event.target.className === "delete"
  if (delButton) {
    let id = event.target.parentElement.dataset.id
    fetch(`http://gamma.apexcode.ro/api/suppliers/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(fetchSup)
  }
})


