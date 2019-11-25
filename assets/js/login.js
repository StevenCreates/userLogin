$( document ).ready(function() {

$(function() {
    const $app = $('#app');
    $app.addClass('has-loaded');
  });
  
  let username;
  let password;
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  
  $("#submit").click(function(){
   event.preventDefault();
    username = $('.username').val();
    password = $('.password').val();
    person = username+' '+password;
    modal.style.display = "block";
    $("#person").append(" Sorry for any inconvenience "+username);
    // alert('Error check your username and password. What you input was: '+person);
  });
  
  function getUser (username) {
  username = $('username').val();
  alert(username);
  };
  
  span.onclick = function() {
    modal.style.display = "none";
  }

});