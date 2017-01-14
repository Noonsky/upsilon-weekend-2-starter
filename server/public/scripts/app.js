//client side code
// buttons function to be built here outside of and before ajax function
// function start(){
//   appendDom(upsilon.json[0]);
//
// }
//
// $(function(){
//   $('#next').on('click', appendDom);
// });
// //
// $(function(){
// appendDom(person[0]);
// });
//


    $(document).ready(function(){
        $.ajax({
          type: "GET",
          url: "/data",
          success: function(response){
            console.log(response);
            appendDom(response.person[0]);
            buildIndex(response.person.length);
          }
        });
    });

//function to append document
function appendDom(person) {
    var $personDiv = $('<div class="person"></div>');
    $personDiv.append('<h2>' + person.name + '</h2>');
    $personDiv.append('<p>' + person.githubUserName + '</p>');
    $personDiv.append('<p>' + person.shoutout + '</p>');


        $('#ajax-data').append($personDiv);
    }

function buildIndex(length){
  for (var i=0; i<length;i++){
    $('#indexContainer').append('<div class="indexBox" id=' +i+ '></div>')
  }
};

    // 2 buttons (next and previous), a 17 index indicator, and timer
    //doc loads with array object 0 (17 objects in total, 0-16) displayed and index 0 (first index) lit

    //index items correspond to array object numbers, with lit array triggering display of corresponding object data

    //When 'next' is pressed div id="ajax-data" .appends DOM with info of next array object in order unless
    //it has hit the last object (object 16) in which case it will reset to 0

    //When 'back' is pressed div id="ajax-data" .appends DOM with info of previous array object in order unless
    //it has hit the first object (object 0) in which case it will set to 16
