function fetchCustomer() {
    fetch('http://gamma.apexcode.ro/api/customers')
        .then(resp => resp.json())
        .then(renderCustomer)
}
const cusCollection = document.getElementById('cus-collection')
function renderCustomer(cus) {
    cusCollection.innerHTML = ""
    cus.forEach(function (cus) {
        cusCollection.innerHTML += `
   <div class="card" data-id=${cus.Id}>
        <p class="title-name">${cus.Name}</p>
        <p>${cus.CUI}</p>
        <button class="delete">Delete</button>
   </div>
  `
    })
}
fetchCustomer();

// adaugare supplier

document.getElementById("save").addEventListener('click', addCustomer);

function addCustomer() {
    let name = document.getElementById('name').value;
    let cui = document.getElementById('cui').value;

    var customer = {
        Name: name,
        CUI: cui
    };

    fetch('http://gamma.apexcode.ro/api/customers', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        .then(response => response.json())
        .then(fetchCustomer)
}

// delete supplier


document.getElementById('cus-collection').addEventListener('click', function (event) {
    let delButton = event.target.className === "delete"
    if (delButton) {
        let id = event.target.parentElement.dataset.id
        fetch(`http://gamma.apexcode.ro/api/customers/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(fetchCustomer)
    }
})