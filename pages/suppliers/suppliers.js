
let type = 'supplier';
fetchItems('http://gamma.apexcode.ro/api/suppliers', type);


document.getElementById("save").addEventListener('click', addItem);

function addItem(){
    let name = document.getElementById('name').value;
    let details = document.getElementById('details').value;
    let data = {
        Name: name,
        CUI: details
      };

    add(`http://gamma.apexcode.ro/api/suppliers`, data, type);

}

del(`http://gamma.apexcode.ro/api/suppliers`)

