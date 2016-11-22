Login = React.createClass({
  postLogin: function(user){
    $.ajax({
      method: "POST",
      url: "/login",
      data: user,
      success: function(response){
        if(response.data.type == "donor"){

        }
      }
    });
  },
});
