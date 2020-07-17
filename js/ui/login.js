$(document).ready(function() {

   firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
         window.location.replace('home.html');
      }

      $('#loginForm').submit(function(e){
         e.preventDefault();
         
         collectLoginInput();
   
       $('#loginBtn').css('display', 'none');
       $('#loading').css('display', 'block');
      });

      $('#registerForm').submit( function (e) {
            e.preventDefault();
            collectRegisterInput();
      });

   });
   
});

async function collectLoginInput() {
   
   var email = $('#idText').val();
   var pass = $('#passText').val();

   await signIn(email, pass);
   location.reload();
}

async function collectRegisterInput() {
   var name = $('#registerNameText').val();
   var email = $('#registerEmailText').val();
   var password = $('#registerPassText').val();

   await signUp(email, password);   
   location.reload();
}