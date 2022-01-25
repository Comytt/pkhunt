// Listen to scroll event for window
$(window).scroll(function(){
    $(".red").hide(); // Hide the red div
    $(".green").addClass("stick"); // Stick the green div at top
}); 