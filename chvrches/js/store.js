$( document ).ready(function() {
  // when button is clicked
  var $btns = $('.btn').click(function() {
      if(this.id == 'all') {
          // show all products
          $('#products > div').show();
      }
      else {
          // show only the products with id matching class
          var $el = $('.' + this.id).show();
          $('#products > div').not($el).hide();
      }
  });
});

// add selected class to the current control button (highlight it)
var btnContainer = document.getElementById("btncontainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}