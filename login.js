function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $("#not-gmail-login").css("display", "none");
  $("#post-login").css("display", "block");
  $("#pic").attr("src", profile.getImageUrl());
  $("#email").text(profile.getEmail());
  $("#login-nav").css("display", "none");
  $("#signup-nav").css("display", "none");
}
