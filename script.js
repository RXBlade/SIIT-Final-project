fetch('http://alpha.apexcode.ro/api/invoices/')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(invoice => {
        document.getElementById('invoiceList').innerHTML += `
        <li class="collection-item row collection-section">
            <a class="collection-item col s9" href="pages/invoice/invoice.html?id=${invoice.Id}&series=${invoice.Series}&number=${invoice.Number}&supplierId=${invoice.SupplierId}&customerId=${invoice.CustomerId}&date=${invoice.Date.substr(0, 10)}">${invoice.Series} ${invoice.Number}</a>
            <div class="edit-clear-buttons">
                <i id="edit" class="edit-collection-item material-icons col s1">edit</i>
                <i id="delete" class="clear-collection-item material-icons col s1">clear</i>
            </div>
        </li>`
    });
    document.getElementById('total').innerHTML = `Total invoices ${resp.length}`
})

