$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if(user === null) {
            window.location.replace("login.html");
        }

        $('#loading').css('display','none');

        $("#logOutBtn").click(async function() {
            await signOut();
        });

    });
});