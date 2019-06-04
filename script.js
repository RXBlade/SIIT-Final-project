fetch('http://alpha.apexcode.ro/api/invoices/')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(invoice => {
        document.getElementById('invoiceList').innerHTML += 
        `<li class="collection-item row">
        <a class="collection-item col s9" href="pages/invoice/invoice.html?id=${invoice.Id}&series=${invoice.Series}&number=${invoice.Number}&supplierId=${invoice.SupplierId}&customerId=${invoice.CustomerId}">
        ${invoice.Series} ${invoice.Number}
        </a><i id="edit" class="material-icons col s1">edit</i><i id="delete" class="material-icons col s1">clear</i>
        </li>`
    });
    document.getElementById('total').innerHTML = `Total invoices ${resp.length}`
})