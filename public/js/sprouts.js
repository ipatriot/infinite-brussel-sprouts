// YOUR CODE GOES HERE
$(".more-sprouts").on("click", function(event) {
  event.preventDefault();
  $.get("/tweets.json?page=???", function(newData) {
    // (newData[".tweets"]).text(newPage).text; //callback function
    var theTweetsFromTheData = $(".tweets");
    
  });
});

var data = {

}
