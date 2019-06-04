$(document).ready(() => {
    const gamesAPI = "https://games-world.herokuapp.com";
    var id = 0;
    $.getJSON(gamesAPI + '/games', (json) => {
        json.forEach(data => {
            $.getJSON(gamesAPI + '/games/' + data._id, function(game) {

                    // CARD CONSTRUCTOR & GET ELEMENTS

                const title = '<h3 id="title'+ id +'">' + game.title + '</h3>';
                const releaseDate = '<p id="releaseDate'+ id +'">' + game.releaseDate + '</p>';
                const genre = '<p id="genre'+ id +'">' + game.genre + '</p>';
                const publisher = '<p id="publisher'+ id +'">' + game.publisher + '</p>';
                const imageUrl = '<img id="imageUrl'+ id +'" src="' + game.imageUrl + '"/>'
                const description = '<p id="description'+ id +'">' + game.description + '</p>';
                const edit = '<button id="edit'+ id +'" class="btn btn-warning">Edit</button>';
                const del = '<button id="del'+ id +'" class="btn btn-danger">Delete</button>';
                const save = document.getElementById('save');
                const cancel = document.getElementById('cancel');
                const newButton = document.getElementById('new-card');

                const card = document.createElement('div');
                card.id = 'card' + id;
                card.classList.add('cardClass');

                document.getElementById('container').appendChild(card);
                document.getElementById('card' + id).innerHTML += title;
                document.getElementById('card' + id).innerHTML += imageUrl;
                document.getElementById('card' + id).innerHTML += releaseDate;
                document.getElementById('card' + id).innerHTML += genre;
                document.getElementById('card' + id).innerHTML += publisher;
                document.getElementById('card' + id).innerHTML += description;
                document.getElementById('card' + id).innerHTML += edit;
                document.getElementById('card' + id).innerHTML += del;
                $('#save').css('display','none')
                $('#cancel').css('display','none')
                newButton.hidden = false;
                save.hidden = true;
                cancel.hidden = true

                var ed = id;
                    // EDIT FUNCTION
                $('#edit' + id).click(() => {
                    $('#new-card').css('display','none');
                    $('#save').css('display','inline-block');
                    $('#cancel').css('display','inline-block');
                    newButton.hidden = true;
                    save.hidden = false;
                    cancel.hidden = false;
                    document.getElementById('new-title').value = document.getElementById('title' + ed).innerText;
                    document.getElementById('new-imageUrl').value = document.getElementById('imageUrl' + ed).src;
                    document.getElementById('new-releaseDate').value = document.getElementById('releaseDate' + ed).innerText;
                    document.getElementById('new-genre').value = document.getElementById('genre' + ed).innerText;
                    document.getElementById('new-publisher').value = document.getElementById('publisher' + ed).innerText;
                    document.getElementById('new-description').value = document.getElementById('description' + ed).innerText;


                    

                    $('#save').click(() => {
                        const newTitle = $('#new-title');
                    const newImageUrl = $('#new-imageUrl');
                    const newReleaseDate = $('#new-releaseDate');
                    const newGenre = $('#new-genre');
                    const newPublisher = $('#new-publisher');
                    const newDescription = $('#new-description');
    
                    var editPost = {
                        "title": newTitle.val(),
                        "imageUrl": newImageUrl.val(),
                        "releaseDate": newReleaseDate.val(),
                        "genre": newGenre.val(),
                        "publisher": newPublisher.val(),
                        "description": newDescription.val(),
                    }

                        $.ajax({
                            type: 'PUT',
                            dataType: 'json', // Set datatype - affects Accept header
                            url: gamesAPI + '/games/' + game._id,
                            data: editPost,
                            success: () => {
                                console.log('Edited successfully!');
                            }
                        })
                    })

                    $('#cancel').click(() => {
                        newButton.hidden = false;
                        save.hidden = true;
                        cancel.hidden = true
                        $('#save').css('display','none');
                        $('#cancel').css('display','none');
                        $('#new-card').css('display','inline-block');

                        document.getElementById('new-title').value = '';
                        document.getElementById('new-imageUrl').value = '';
                        document.getElementById('new-releaseDate').value = '';
                        document.getElementById('new-genre').value = '';
                        document.getElementById('new-publisher').value = '';
                        document.getElementById('new-description').value = '';
                        
                    })
                })

                    // DELETE FUNCTION

                $('#del' + id).click(() => {
                    $.ajax({
                        url: gamesAPI + '/games/' + game._id,
                        type: 'DELETE',
                        success: () => {
                            console.log('Item deleted!');
                        }
                    })
                })

                id++;
            })
        })
    })
                // NEW FUNCTION
                $('#new-card').click(() => {
                    const newTitle = $('#new-title');
                    const newImageUrl = $('#new-imageUrl');
                    const newReleaseDate = $('#new-releaseDate');
                    const newGenre = $('#new-genre');
                    const newPublisher = $('#new-publisher');
                    const newDescription = $('#new-description');
    
                    var newPost = {
                        "title": newTitle.val(),
                        "imageUrl": newImageUrl.val(),
                        "releaseDate": newReleaseDate.val(),
                        "genre": newGenre.val(),
                        "publisher": newPublisher.val(),
                        "description": newDescription.val(),
                    }


                    $.ajax({
                        url: gamesAPI + '/games',
                        type: 'POST',
                        data: newPost,
                        success: () => {
                            console.log('Posted successfully!');
                        },
                    })
    })
})