"use strict";
(function () {
    //Allow users to add movies
//TODO: Make an AJAX request to get a listing of all the movies

//     const url = 'https://skitter-far-factory.glitch.me/movies';
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(blogPost),
//     };
//     fetch(url, options)
//         .then(/* post was created successfully */)
//         .catch(/* handle errors */);

////////////////////////////////////////////////////////////////////////////////////////////////////
    $.ajax("https://skitter-far-factory.glitch.me/movies").done(function(data, status, jqXhr) {
        $('#loading-message').empty();
        $('#loading-message').append('<h2>Movies:</h2>').append('<ul>');
        // $('#loading-message').append('<ul>');
        data.forEach(function (element, index) {
            // console.log(`Title: ${element[index].title}, Rating: ${element[index].rating}, Genre: ${element[index].genre} .`);
            // console.log("Title: " + element.title + ", Rating: " + element.rating + " , Genre: " + element.genre);
            // $('#loading-message').empty();
            // $('#loading-message').append("Title: " + element.title + ", Rating: " + element.rating + " , Genre: " + element.genre);
            // if (element.genre !== 'undefined') {
            //     $('#loading-message').append(`<li>Title: ${element.title}, Rating: ${element.rating}, Genre: ${element.genre}</li>`);
            // }
            if (element.genre !== undefined) {
                $('#loading-message').append(`<li>Title: ${element.title}, Rating: ${element.rating}, Genre: ${element.genre}</li>`);
            }

            // $('#loading-message').append(`<li>Title: ${element.title}, Rating: ${element.rating}, Genre: ${element.genre}</li>`);
        });
        $('#loading-message').append('</ul>');

        // console.log(data);
        // console.log(`Title: ${data[0].title}.`);
        // console.log(`Rating: ${data[0].rating}.`);
        // console.log(`Genre: ${data[0].genre}.`);

        //TODO: When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives

        // $('#loading-message').html("Done loading");
    });

// const reviewObj = {
//     restaurant_id: 1,
//     name: 'Test',
//     rating: 3,
//     comments: "Hello"
// };
// const url = 'https://skitter-far-factory.glitch.me/movies';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };
// fetch(url, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */
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

