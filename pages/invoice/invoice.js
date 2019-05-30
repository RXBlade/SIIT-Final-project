var urlParams = new URLSearchParams(location.search);
const urlId = urlParams.get('id');
const urlSeries = urlParams.get('series');
const urlNumber = urlParams.get('number');
const urlDate = urlParams.get('date');
var id = 1;

fetch(`http://alpha.apexcode.ro/api/invoices/1/items`)
.then(resp => resp.json())
.then(resp => {
    
    document.getElementById('series').innerHTML = urlSeries;
    document.getElementById('number').innerHTML = urlNumber;
    document.getElementById('date').innerHTML = urlDate;
    resp.forEach(item => {
        let value = item.Quantity * item.Price;
        document.getElementById('main').innerHTML += 
    `<tr id="trd + ${id}">
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
        <td><i class="material-icons">edit</i><i class="material-icons">close</i></td>

    </tr>`
    id++;
    });
})