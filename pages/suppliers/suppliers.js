window.addEventListener('DOMContentLoaded', () => {

  var id = 1;

fetch('http://gamma.apexcode.ro/api/suppliers')
.then((resp) => resp.json())
.then((resp) => {
  resp.forEach(supplier => {
        document.getElementById('content').innerHTML += 
        `<div>
          <h3>${supplier.Name}</h3>
          <p>${supplier.CUI}</p>
          <a href="#" id="del${id}">Delete</a>
        </div>`
        
  document.getElementById(`del${id}`).addEventListener('click',function() {
    console.log(document.getElementById(`${id} was clicked`))
  })
  id++;
  })
})
})