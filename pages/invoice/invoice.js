var urlParams = new URLSearchParams(location.search);
const urlId = urlParams.get('id');
const urlSeries = urlParams.get('series');
const urlNumber = urlParams.get('number');
const urlDate = urlParams.get('date');
const urlCustomer = urlParams.get('customerId');
const urlSupplier = urlParams.get('supplierId');
const apexAPI = 'http://alpha.apexcode.ro/api/';
var id = 1;

fetch(`${apexAPI}suppliers/${urlSupplier}`)
.then(resp => resp.json())
.then(resp => {
    document.getElementById('supplier').innerHTML += 
    `<p>Name: ${resp.Name}</p>
    <p>CUI: ${resp.CUI}</p>`
})

fetch(`${apexAPI}customers/${urlCustomer}`)
.then(resp => resp.json())
.then(resp => {
    document.getElementById('customer').innerHTML +=
    `<p>Name: ${resp.Name}</p>
    <p>CUI: ${resp.CUI}</p>`
})

fetch(`${apexAPI}invoices/1/items`)
.then(resp => resp.json())
.then((resp) => {
    const sum = []
    const reducer = (acc, curr) => acc + curr;
    document.getElementById('series').innerHTML = urlSeries;
    document.getElementById('number').innerHTML = urlNumber;
    document.getElementById('date').innerHTML = urlDate;
    resp.forEach(item => {
        let value = item.Quantity * item.Price;
        document.getElementById('main').innerHTML +=
    `<tr>
        <td>
            ${id}
        </td>
        <td>
            ${item.Product.Name}
        </td>
        <td>
            ${item.Quantity}
        </td>
        <td>
            ${item.Price}
        </td>
        <td>
            ${value}
        </td>
        <td>
            ${(item.VAT * 100) / value}
        </td>
        <td>
            <a id="edit-post" class="waves-effect waves-light btn orange">
                <i class="material-icons left">edit</i>EDIT
            </a>
            <a id="delete-post" class="waves-effect waves-light btn red">
                <i class="material-icons left">delete</i>DELETE
            </a>
        </td>
    </tr>`
    sum.push(value)
    id++;
    });
    document.getElementById('total').innerHTML += sum.reduce(reducer)
})