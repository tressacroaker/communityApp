LoginPage = React.createClass({
  getCurrentUser: function(){
    $.ajax({
      method: "GET",
      url: "/current",
      success: function(response){
        console.log(response);
        return response.data;
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString)
      }.bind(this)
    });
  },
  postLogin: function(user){
    var user = {
      email: this.state.email,
      password: this.state.password
    }
    $.ajax({
      method: "POST",
      url: "/login",
      data: user,
      success: function(response){
        console.log(response);
      }
    });
  },
  getInitialState: function(){
    return{
      email: "",
      password: ""
    };
  },
  updateNewEmail: function(event){
    this.setState({
      email: event.target.value
    });
  },
  updateNewPassword: function(event){
    this.setState({
      password: event.target.value
    });
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.postLogin}>
          <input onChange={this.updateNewEmail} type="text" placeholder="Email"/>
          <input onChange={this.updateNewPassword} type="text" placeholder="Password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
})
