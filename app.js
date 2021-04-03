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
${user.name}
`)
    })
})
});