//get Items

function fetchItems(url) {
  fetch(url)
    .then(resp => resp.json())
    .then(response => render(response, type))
}

const Collection = document.getElementById('collection')
function render(data, type) {
  Collection.innerHTML = ""
  data.forEach(function (item) {
    if (type == 'product'){
    Collection.innerHTML += `
   <div class="card" data-id=${item.Id}>
        <h2 class="product-title">${item.Name}</h2>
        <p>Type: ${item.ProductType}</p>
        <button class="delete">Delete</button>
   </div>
  `}
  else if (type == 'customer' || 'supplier'){
    Collection.innerHTML += `
   <div class="card" data-id=${item.Id}>
        <h2 class="product-title">${item.Name}</h2>
        <p>${item.CUI}</p>
        <button class="delete">Delete</button>
   </div>
  `
  }
  })
}

// adaugare Item
function add(url, item, type) {
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => {
      if (response.ok) {
        fetchItems(url, type)
      }
    })
    .catch(error => alert(error))


}

// delete Item

function del(url) {
  document.getElementById('collection').addEventListener('click', function (event) {
    let delButton = event.target.className === "delete"
    if (delButton) {
      let id = event.target.parentElement.dataset.id
      fetch(url + `/` + `${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            fetchItems(url,type)
          }
        })
        .catch(error => alert(error))
    }
  })
}