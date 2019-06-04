fetch('http://gamma.apexcode.ro/api/products')
.then((resp) => resp.json())
.then((resp) => {
    resp.forEach(products => {
        document.getElementById('content').innerHTML += `<div><h3>${products.Name}</h3><p>${products.ProductType}</p></div>`
    });
})

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
    .then(function (response) {
      console.log(response.statusText);
    });

}


