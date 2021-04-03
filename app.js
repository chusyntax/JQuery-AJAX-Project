$(document).ready(function(){
$('#searchUser').on('keyup', function(e){
    let username = e.target.value;
   
    //Make request to Github using AJAX
    $.ajax({
        url:'https://api.github.com/users/'+username,
        data:{
            client_id:'d88a76b43ae87295350e',
            client_secret:'23d175f5feb94b769284c572668ae0044dc58805'

        }
    }).done(function(user){
$('#profile').html(`

<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" style='width:100%' src="${user.avatar_url}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${user.name}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${user.name}<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
`)
    })
})
});