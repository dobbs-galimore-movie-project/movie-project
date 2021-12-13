"use strict";
$(document).ready(function () {
    //Allow users to add movies
    //TODONE: Make an AJAX request to get a listing of all the movies
    //TODONE: When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives
    $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
        console.log(data);
        $('#loading-message').toggleClass('hidden');
        // $('#loading-message').append('<h2>Movies:</h2>');
        data.forEach(function (element, index) {
            if (element.genre !== undefined) {
                $('#movies-list-table').append(`<tr><td><input class="checkbox" type="checkbox"/>&nbsp;</td><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td><a href="#" class="edit-link">edit </a>/<a href="#" class="delete-link"> delete</a></td></tr>`);
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

    $('#movie-add-button').click(function (event) {
        $('#loading-message').toggleClass('hidden');
        event.preventDefault();
        //TODONE: When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form
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
            // $('#loading-message').append('<h2>Movies:</h2>')
            $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
                $('#movie-title-input').val('');
                $('#movie-rating-input').val('');
                $('#movie-genre-input').val('');
                console.log(data);
                data.forEach(function (element, index) {
                    if (element.genre !== undefined) {
                        $('#movies-list-table').append(`<tr><td><input class="checkbox" type="checkbox" />&nbsp;</td><td class="id-text">${element.id}</td><td class="title-value">${element.title}</td><td class="rating-value">${element.rating}</td><td class="genre-value">${element.genre}</td><td><a href="#" class="edit-link">edit </a>/<a href="#" class="delete-link"> delete</a></td></tr>`);
                    }
                });
            });
        }, 3000);
    }); //end movie-add-button .click

    $('#movie-edit-button').click(function (event) {
        $('#loading-message').toggleClass('hidden');
        event.preventDefault();
        //TODONE: When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form
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
            // $('#loading-message').append('<h2>Movies:</h2>')
            $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
                $('#movie-title-edit-input').val('');
                $('#movie-rating-edit-input').val('');
                $('#movie-genre-edit-input').val('');
                console.log(data);
                data.forEach(function (element, index) {
                    if (element.genre !== undefined) {
                        $('#movies-list-table').append(`<tr><td><input class="checkbox" type="checkbox" />&nbsp;</td><td class="nr">${element.id}</td><td>${element.title}</td><td>${element.rating}</td><td>${element.genre}</td><td><a href="#" class="edit-link">edit </a>/<a href="#" class="delete-link"> delete</a></td></tr>`);
                    }
                });
            });
        }, 3000);
    }); //end movie-add-button .click

    // $('input[type=checkbox]').change(function() {
    //     if ($(this).is(':checked')) {
    //         alert("checked");
    //     }
    //     else {
    //         alert("unchecked");
    //     }
    // });

    // $(document).on('click', '.record_table tr', function(event) {
    //     // alert("checkbox test");
    //     // $('body').css('color', 'yellow');
    //     if (event.target.type !== 'checkbox') {
    //         $(':checkbox', this).trigger('click');
    //     }
    //
    // });

    $(document).on('click', '.edit-link', function(event) {
        // alert("checkbox test");
        // $('body').css('color', 'yellow');

        if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
        }

        $row = $(this).closest("tr");    // Find the row
        $idText = $row.find(".id-text").text(); // Find the text
        $titleValue = $row.find(".title-value").text();
        $ratingValue = $row.find(".rating-value").text();
        $genreValue = $row.find(".genre-value").text();

        // alert(`ID: ${$idText}, Title: ${$titleValue}, Rating: ${$ratingValue}, Genre: ${$genreValue}`);

        $('#movie-title-edit-input').attr('value', $titleValue);
        $('#movie-rating-edit-input').attr('value', $ratingValue);
        $('#movie-genre-edit-input').attr('value', $genreValue);


    });

    // $('.edit-link').click(function () {
    //     var $row = $(this).closest("tr");    // Find the row
    //     var $text = $row.find(".nr").text(); // Find the text
    //
    //     // Let's test it out
    //     alert($text);
    // });

//Allow users to edit existing movies
//TODO: Give users the option to edit an existing movie
//TODO: A form should be pre-populated with the selected movie's details. Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

//Delete movies
//TODO: Each movie should have a "delete" button. When this button is clicked, your javascript should send a DELETE request

//Bonuses
//TODO: Add a disabled attribute to buttons while their corresponding ajax request is still pending.
//TODO: Show a loading animation instead of just text that says "loading...".
//TODO: Use modals for the creating and editing movie forms.
//TODO: Add a genre property to every movie.
//TODO: Allow users to sort the movies by rating, title, or genre (if you have it).
//TODO: Allow users to search through the movies by rating, title, or genre (if you have it).
//TODO: Use a free movie API like OMDB to include extra info or render movie posters.

    /*
    Helpful Hints:
    The id property of every movie should not be edited by hand. The purpose of this property is to uniquely identify that particular movie. That is, if we want to delete or modify an existing movie, we can specify what movie we want to change by referencing it's id. When a new movie is created (i.e. when you send a POST request to /movies with a title and a rating), the server will respond with the movie object that was created, including a generated id.
    Take a look at the other branches in this repository, as they have configuration/setup for common scenarios, such as including bootstrap in your application.
    */
});

