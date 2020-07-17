async function signIn(email, pass) {
    await firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);        
      });
}

async function signOut() {
  await firebase.auth().signOut().catch(function(error) {
    alert(error);
  });
}

async function signUp(email, pass) {

  await firebase.auth().createUserWithEmailAndPassword(email, pass).then( function (result) {
    alert("Registration Success");
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });

}