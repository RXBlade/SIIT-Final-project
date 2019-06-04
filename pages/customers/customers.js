document.getElementById("save").addEventListener('click', addCustomer);
function addCustomer() {
  let name = document.getElementById('name').value;
  let cui = document.getElementById('cui').value;


    var customer = {
        Name: name,
        CUI: cui
    };

    fetch("http://gamma.apexcode.ro/api/customers", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        .then(function (response) {
            console.log(response.statusText);
        });
}