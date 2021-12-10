"use strict";
(function () {
    //Allow users to add movies
    //TODO: Make an AJAX request to get a listing of all the movies
    //TODO: When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives
    $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
        // console.log(data);
        $('#loading-message').empty();
        // $('#loading-message').append('<h2>Movies:</h2>')
        data.forEach(function (element, index) {
            if (element.genre !== undefined) {
                $('#movies-list-table').append(`<tr><td>${element.title}</td><td>${element.rating}</td><td>${element.genre}</td></tr>`);
            }
        });
    });

    let userTitle = '';
    let userRating = '';
    let userGenre = '';



    $('#movie-add-button').click(function (event) {
        event.preventDefault();
        userTitle = $('#movie-title-input').val();
        userRating = $('#movie-rating-input').val();
        userGenre = $('#movie-genre-input').val();
        // console.log(userTitle + " " + userRating + " " + userGenre);
        // $('#movies-list-table').append(`<tr><td>${userTitle}</td><td>${userRating}</td><td>${userGenre}</td></tr>`);
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
            .then() /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */

        $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
            // console.log(data);

            setTimeout(function () {
                $('#movies-list-table').empty();
                $('#loading-message').append('<h2>Movies:</h2>')
                data.forEach(function (element, index) {
                    if (element.genre !== undefined) {
                        $('#movies-list-table').append(`<tr><td>${element.title}</td><td>${element.rating}</td><td>${element.genre}</td></tr>`);
                    }
                });
            }, 5000);


            console.log(data);
        });

        // function getLastCommit (username) {
        //     fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GITHUB_KEY}}).then(response => response.json())
        //         .then(data => console.log(`${username}'s last commit was on: ${data[0].created_at.substring(0, 10)}`))
        //         .catch(error => console.error(error));
        // }

// getLastCommit('derek-dobbs');
    });






//TODO: When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

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
})();

