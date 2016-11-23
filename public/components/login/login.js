Login = React.createClass({
  postLogin: function(user){
    $.ajax({
      method: "POST",
      url: "/login",
      data: user,
      success: function(response){
        console.log(response);
      }
    });
  },
});
