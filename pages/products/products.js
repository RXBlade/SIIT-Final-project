function fetchProd() {
  fetch('http://gamma.apexcode.ro/api/products')
    .then(resp => resp.json())
    .then(renderProd)
}
const prodCollection = document.getElementById('prod-collection')
function renderProd(prod) {
  prodCollection.innerHTML = ""
  prod.forEach(function (prod) {
    prodCollection.innerHTML += `
 <div class="card" data-id=${prod.Id}>
      <h2>${prod.Name}</h2>
      <p>${prod.ProductType}</p>
      <button class="delete">Delete</button>
 </div>
`
  })
}
fetchProd();

// adaugare supplier

document.getElementById("save").addEventListener('click', addProduct);

function addProduct() {
  let name = document.getElementById('name').value;
  let productType = document.getElementById('type').value;

  var product = {
    Name: name,
    ProductType: productType
  };

  fetch('http://gamma.apexcode.ro/api/products', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(response => response.json())
    .then(fetchProd)

}

// delete supplier


document.getElementById('prod-collection').addEventListener('click', function (event) {
  let delButton = event.target.className === "delete"
  if (delButton) {
    let id = event.target.parentElement.dataset.id
    fetch(`http://gamma.apexcode.ro/api/products/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(fetchProd)
  }
})