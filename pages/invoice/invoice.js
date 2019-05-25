fetch('http://alpha.apexcode.ro/api/invoiceItems/')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(data => {
        console.log(data)
    });
    
})