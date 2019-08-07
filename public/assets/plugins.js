
      $(document).ready(function(){
        var firstname,lastname;
        $("#submit").click(function(){
          firstname=$("#fn").val();
          lastname=$("#ls").val();
          $.post("http://localhost:3000/login",{firstname: fn,lastname: ln}, function(data){
            if(data==='done')
              {
                alert("login success");
              }
          });
        });
      });
