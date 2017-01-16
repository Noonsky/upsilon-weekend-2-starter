var currentIndex = 0;
var people = [];

$(document).ready(function() {
    $('#next').on('click', function() {
        $('#ajax-data').fadeOut('slow');
        document.getElementById(currentIndex).style.backgroundColor = "black";
        if (currentIndex == people.length - 1) {
            appendDom(people[0]);
            currentIndex = 0;
        } else {
            appendDom(people[++currentIndex])
        };
        document.getElementById(currentIndex).style.backgroundColor = "red";
        $('#ajax-data').fadeIn('slow');

    });
    $('#prev').on('click', function() {
        $('#ajax-data').fadeOut('slow');
        document.getElementById(currentIndex).style.backgroundColor = "black";
        if (currentIndex == 0) {
            appendDom(people[(people.length - 1)]);
            currentIndex = people.length - 1;
        } else {
            appendDom(people[--currentIndex])
        };
        document.getElementById(currentIndex).style.backgroundColor = "red";
        $('#ajax-data').fadeIn('slow');
    });

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(response) {
            console.log("This is the response", response);
            appendDom(response.person[0]);
            buildIndex(response.person.length);
            people = response.person;

        }
    });
});

function appendDom(person) {
    var timeout = setTimeout(function() {
        var $personDiv = $('<div class="person"></div>');
        $personDiv.append('<h2>' + person.name + '</h2>');
        $personDiv.append('<p>' + person.githubUserName + '</p>');
        $personDiv.append('<p>' + person.shoutout + '</p>');

        $('#ajax-data').html($personDiv);
    }, 500);
};
//fadeIn and fadeOut both hit at the same time after appendDom has been run.
//I couldn't figure out how to fix this and had to resort to delaying the appendDom function.

function buildIndex(length) {
    for (var i = 0; i < length; i++) {
        $('#indexContainer').append('<div class="indexBoxes" id=' + i + '></div>')
    }
    document.getElementById(currentIndex).style.backgroundColor = "red";
};
