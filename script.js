$(document).ready(function() {
    $("body").append("<div id='new_grid'><button type='button'>New Grid</button></div>");
    $("body").append("<div class='container'></div>");
    
    newGrid(16);
    
    $("#new_grid").click(function() {
        var length = prompt("How many squares per side?");
        if (length != null) {
            newGrid(length);
        }
    });
});

function newGrid(sideLength) {
    $(".container").empty();
    $(".container").prepend("<table></table>");
    for (var i = 0; i < sideLength; i++) {
            $("table").append("<tr></tr>");
            
            for (var j = 0; j < sideLength; j++) {
                $("tr").eq(i).append("<td><div class='square'></div></td>");    
            };
    }; 
        
    $(".square").mouseenter(function() {
        $(this).css("background-color", "#234567");
    });
};