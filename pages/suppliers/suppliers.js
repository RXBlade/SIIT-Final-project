
var delId =1;

fetch('http://gamma.apexcode.ro/api/suppliers')
.then((resp) => resp.json())
.then((resp) => {
    resp.forEach((supplier) => {
        document.getElementById('content').innerHTML += 
        `<div>
          <h3 ${supplier.Id}>${supplier.Name}</h3>
          <p>${supplier.CUI}</p>
          <a href="#" id="delete${delId}">Delete</a>
        </div>`
        delId++;
    });
})


document.getElementById("save").addEventListener('click', addSupplier);
function addSupplier() {
  let name = document.getElementById('name').value;
  let cui = document.getElementById('cui').value;


    var supplier = {
        Name: name,
        CUI: cui
    };

    fetch('http://gamma.apexcode.ro/api/suppliers', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supplier)
    })
        .then(function (response) {
            console.log(response.statusText);
        });
}

document.getElementById(`delete${delId}`).addEventListener("click", function deleteSupplier(){
    fetch(`http://gamma.apexcode.ro/api/suppliers/${delId}`, {
      method: "DELETE" 
    })
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        var supplierDeleted = document.querySelector('#name [value="' + id + '"]');
        supplierDeleted.parentNode.removeChild(supplierDeleted);
      });
  }); 