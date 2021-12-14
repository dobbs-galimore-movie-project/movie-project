"use strict";
$(document).ready(function () {
    $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
        $('#loading-message').toggleClass('hidden');

        data.forEach(function (element, index) {
            if (element.genre !== undefined) {

                $('#movies-list-table').append(`<tr><td><input class="checkbox" type="checkbox"/>&nbsp;</td><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td>  <a href="#" class="edit-link"></a></td></tr>`);

            }
        });
    });
    let userTitle = '';
    let userRating = '';
    let userGenre = '';

    let newUserTitle = '';
    let newUserRating = '';
    let newUserGenre = '';

    let $row = '';
    let $idText = '';
    let $titleValue = '';
    let $ratingValue = '';
    let $genreValue = '';

    let deleteUserTitle = '';
    let deleteUserRating = '';
    let deleteUserGenre = '';

    $('#movie-add-button').click(function (event) {
        $('#loading-message').toggleClass('hidden');
        event.preventDefault();

        userTitle = $('#movie-title-input').val();
        userRating = $('#movie-rating-input').val();
        userGenre = $('#movie-genre-input').val();

        const userAdd = {title: userTitle, rating: userRating, genre: userGenre};
        const url = 'https://skitter-far-factory.glitch.me/movies';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAdd),
        };
        fetch(url, options)
            .then(data => console.log(data))
            .catch( error => console.error(error));

        setTimeout(function () {
            $('#loading-message').toggleClass('hidden');
            $('#movies-list-table').empty();

            $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
                $('#movie-title-input').val('');
                $('#movie-rating-input').val('');
                $('#movie-genre-input').val('');

                data.forEach(function (element, index) {
                    if (element.genre !== undefined) {

                        $('#movies-list-table').append(`<tr><td><input class="checkbox" type="checkbox"/>&nbsp;</td><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td>  <a href="#" class="edit-link"></a></td></tr>`);

                    }
                });
            });
        }, 3000);
    }); //end movie-add-button .click

    $('#movie-edit-button').click(function (event) {
        $('#loading-message').toggleClass('hidden');
        event.preventDefault();

        newUserTitle = $('#movie-title-edit-input').val();
        newUserRating = $('#movie-rating-edit-input').val();
        newUserGenre = $('#movie-genre-edit-input').val();

        const newUserAdd = {title: newUserTitle, rating: newUserRating, genre: newUserGenre};
        const url = `https://skitter-far-factory.glitch.me/movies/${$idText}`;
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserAdd),
        };
        fetch(url, options)
            .then(data => console.log(data))
            .catch( error => console.error(error));

        setTimeout(function () {
            $('#loading-message').toggleClass('hidden');
            $('#movies-list-table').empty();

            $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
                $('#movie-title-edit-input').val('');
                $('#movie-rating-edit-input').val('');
                $('#movie-genre-edit-input').val('');
                console.log(data);
                data.forEach(function (element, index) {
                    if (element.genre !== undefined) {

                        $('#movies-list-table').append(`<tr><td><input class="checkbox" type="checkbox"/>&nbsp;</td><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td>  <a href="#" class="edit-link"></a></td></tr>`);
                    }
                });

                $(document).on('click', '.record_table tr', function(event) {
                    if (event.target.type !== 'checkbox') {
                        $(':checkbox', this).trigger('click');

                    }
                });

                $(document).on('click', '.edit-link', function(event) {
                    event.preventDefault();

                    $row = $(this).closest("tr");   // Find the row
                    $idText = $row.find(".id-text").text(); // Find the text
                    $titleValue = $row.find(".title-value").text();
                    $ratingValue = $row.find(".rating-value").text();
                    $genreValue = $row.find(".genre-value").text();

                    $('#movie-title-edit-input').val($titleValue);
                    $('#movie-rating-edit-input').val($ratingValue);
                    $('#movie-genre-edit-input').val($genreValue);
                });
            });
        }, 3000);
    }); //end movie-add-button .click

    $('#delete-button').click(function (event) {
        $('#loading-message').toggleClass('hidden');
        event.preventDefault();

        deleteUserTitle = $('#movie-title-edit-input').val();
        deleteUserRating = $('#movie-rating-edit-input').val();
        deleteUserGenre = $('#movie-genre-edit-input').val();

        const deleteUserAdd = {title: deleteUserTitle, rating: deleteUserRating, genre: deleteUserGenre};
        const url = `https://skitter-far-factory.glitch.me/movies/${$idText}`;
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deleteUserAdd),
        };
        fetch(url, options)
            .then(data => console.log(data))
            .catch( error => console.error(error));

        setTimeout(function () {
            $('#loading-message').toggleClass('hidden');
            $('#movies-list-table').empty();
            // $('#loading-message').append('<h2>Movies:</h2>')
            $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
                $('#movie-title-edit-input').val('');
                $('#movie-rating-edit-input').val('');
                $('#movie-genre-edit-input').val('');
                console.log(data);
                data.forEach(function (element, index) {
                    if (element.genre !== undefined) {

                        $('#movies-list-table').append(`<tr><td><input class="checkbox" type="checkbox"/>&nbsp;</td><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td>  <a href="#" class="edit-link"></a></td></tr>`);
                    }
                });
                $(document).on('click', '.record_table tr', function(event) {
                    if (event.target.type !== 'checkbox') {
                        $(':checkbox', this).trigger('click');

                    }
                });

                $(document).on('click', '.edit-link', function(event) {
                    event.preventDefault();

                    $row = $(this).closest("tr");   // Find the row
                    $idText = $row.find(".id-text").text(); // Find the text
                    $titleValue = $row.find(".title-value").text();
                    $ratingValue = $row.find(".rating-value").text();
                    $genreValue = $row.find(".genre-value").text();

                    $('#movie-title-edit-input').val($titleValue);
                    $('#movie-rating-edit-input').val($ratingValue);
                    $('#movie-genre-edit-input').val($genreValue);
                });
            });
        }, 3000);

    }); //end delete-button .click

    //////////////////////////////////////////
    let ratingArray = [];
    let genreArray = [];
    $('#movie-search-button').click(function () {
        $('#movies-list-table').empty();
        let searchValue = $('#search-box').val();
        // alert(searchValue);
        $.ajax("https://skitter-far-factory.glitch.me/movies").done(function (data) {
            // console.log(data.length);
            data.forEach(function (element, index) {
                if (element.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    $('#movies-list-table').append(`<tr><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td><a href="#" class="edit-link">edit/delete</a></td></tr>`);
                    // console.log(element);
                }else if(element.rating.includes(searchValue)) {
                    // $('#movies-list-table').empty();
                    ratingArray.push(element);
                    console.log(ratingArray);
                    // for (let i = 0; i < ratingArray.length; i++) {
                    //     $('#movies-list-table').append(`<tr><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td><a href="#" class="edit-link">edit/delete</a></td></tr>`);
                    // }

                    // ratingArray.forEach(function (element) {
                        $('#movies-list-table').append(`<tr><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td><a href="#" class="edit-link">edit/delete</a></td></tr>`);
                    // });

                    // console.log(element);
                    // console.log(ratingArray);
                }else if(element.genre.toLowerCase().includes(searchValue.toLowerCase())) {
                    genreArray.push(element);
                    $('#movies-list-table').append(`<tr><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td><a href="#" class="edit-link">edit/delete</a></td></tr>`);

                } else {
                    // console.log("Value doesn't exist");
                }

            });
            console.log(ratingArray);
        });
    });
    //////////////////////////////////////////

    $(document).on('click', '.edit-link', function(event) {
        event.preventDefault();

        $row = $(this).closest("tr");    // Find the row
        $idText = $row.find(".id-text").text(); // Find the text
        $titleValue = $row.find(".title-value").text();
        $ratingValue = $row.find(".rating-value").text();
        $genreValue = $row.find(".genre-value").text();

        $('#movie-title-edit-input').val($titleValue);
        $('#movie-rating-edit-input').val($ratingValue);
        $('#movie-genre-edit-input').val($genreValue);
    });

//Bonuses
//TODO: Add a disabled attribute to buttons while their corresponding ajax request is still pending.
//TODO: Show a loading animation instead of just text that says "loading...".
//TODO: Use modals for the creating and editing movie forms.
//TODO: Allow users to sort the movies by rating, title, or genre (if you have it).
//TODO: Allow users to search through the movies by rating, title, or genre (if you have it).
//TODO: Use a free movie API like OMDB to include extra info or render movie posters.

    /*
    Helpful Hints:
    The id property of every movie should not be edited by hand. The purpose of this property is to uniquely identify that particular movie. That is, if we want to delete or modify an existing movie, we can specify what movie we want to change by referencing it's id. When a new movie is created (i.e. when you send a POST request to /movies with a title and a rating), the server will respond with the movie object that was created, including a generated id.
    Take a look at the other branches in this repository, as they have configuration/setup for common scenarios, such as including bootstrap in your application.
    */
});

