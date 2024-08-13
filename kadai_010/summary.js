$("#change-color").on("click", function(){
  $("#target").css("color", "red");
});

$("#change-text").on("click", function(){
  const Changee = document.getElementById("target");
  Changee.textContent = "Hello";
});

$("#fade-out").on("click", function(){
 $('#target').fadeOut(); 
});

$("#fade-in").on("click", function(){
  $('#target').fadeIn(); 
 });