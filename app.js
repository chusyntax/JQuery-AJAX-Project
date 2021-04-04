$(document).ready(function(){
$('#searchUser').on('keyup', function(e){
    let username = e.target.value;
   
    //Make request to Github using AJAX
    $.ajax({
        url:'https://api.github.com/users/'+username,
        data:{
            client_id:'d88a76b43ae87295350e',
            client_secret:'981e4a410ed6e153f4d2577d934cff044d67d579'

        }
    }).done(function(user){
$('#profile').html(`
<div class="container row">
<div class="card col s12 m6 l6">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" style='width:100%' src="${user.avatar_url}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${user.name}<i class="material-icons right">more_vert</i></span>
      <p><a href="${user.html_url}" target="_blank">Link to GitHub Account</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${user.name}<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  <div class='col s12 m6 l6'>
  <ul class="collection with-header">
  <li class="collection-header"><h5>More Info</h5></li>
  <li class="collection-item avatar">
  <i class="material-icons circle orange">insert_emoticon</i>
    <span class="title">Followers</span>
    <p>
    This user has ${user.followers} followers
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle red">location_on</i>
    <span class="title">Location</span>
    <p>
    This user lives in ${user.location}
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle blue">folder</i>
    <span class="title">Public Repos</span>
    <p>
    This user has ${user.public_repos} public repos
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
  <li class="collection-item avatar">
    <i class="material-icons circle green">play_arrow</i>
    <span class="title">Start</span>
    <p>
    This user joined GitHub on ${user.created_at}
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
</ul>
  </div>
  </div>
`)
    })
})
});