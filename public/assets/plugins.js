$(document).ready(function() {
  var firstname, lastname;
  $("#submit").click(function(e) {
    e.preventDefault();

    var data = {
      firstname: $("#fn").val(),
      lastname: $("#ln").val()
    };
    fetch("http://localhost:9000/form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log(res);
    });
  });
});
