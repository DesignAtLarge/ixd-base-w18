//functions
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(50).height(50)', addUser);
  }
}

function addUser(response){
  console.log("this is the response in the addUser function ", response);
  
  let user = {
    name: response.name,
    url: response.picture.data.url,
    first: response.first_name
  }

  let url = "/addUser"; 
  
  $.ajax({
    type: "POST",
    url: url,
    data: user
  }).done(function (data) {
    console.log("this is after the user is pushed to the usersDB");
    document.location.href = "/homepage";
  }).fail(function (jqXHR, textStatus, errThrown) {
    console.log("the error is", errThrown);
    console.log("the status is". textStatus)
  })
  //$.post( url, callback);
}

function fb_login() {
  FB.login(function() {}, {scope: 'email, public_profile' } );
}




























function loadProject(id) {
  console.log("inside of loadProject");
  let url = "/project/" + id;
  console.log("the URL is: ", url);
  
  console.log("the ID is: ", id);
  $.get(url, callback);

}

function callback(data, status){
    console.log("this is the data ", data);
    let img = `<img src="` +data.image+ `">`;
    let h1 = `<h1>` + data.title + `</h1>`;
    let h2 = `<h2>` +data.date + `</h2>`;
    let summary = data.summary;
    let html = img + h1 + h2 + summary;
    let detailID = "#detailproject" + data.id;
    $(detailID).html(html)
    console.log("this is the html, ", html);
  }