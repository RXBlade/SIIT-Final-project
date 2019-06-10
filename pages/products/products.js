let type = 'product';
fetchItems('http://gamma.apexcode.ro/api/products');

document.getElementById("save").addEventListener('click', addItem);

function addItem(){
    let name = document.getElementById('name').value;
    let details = document.getElementById('details').value;
    var data = {
        Name: name,
        ProductType: details
      };

    add(`http://gamma.apexcode.ro/api/products`, data);

}
del(`http://gamma.apexcode.ro/api/products`)
