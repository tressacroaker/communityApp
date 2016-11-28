CreateDonor = React.createClass({
  postUser: function(user){
    var user = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      company: this.state.company,
      website: this.state.website,
      type: "donor"
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
      password: "",
      name: "",
      company: "",
      website: ""
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
  updateNewName: function(event){
    this.setState({
      name: event.target.value
    });
  },
  updateNewCompany: function(event){
    this.setState({
      company: event.target.value
    });
  },
  updateNewWebsite: function(event){
    this.setState({
      website: event.target.value
    });
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.postUser}>
          <input onChange={this.updateNewEmail} type="text" placeholder="Email Address"/>
          <input onChange={this.updateNewPassword} type="text" placeholder="Password"/>
          <input onChange={this.updateNewName} type="text" placeholder="Full Name"/>
          <input onChange={this.updateNewCompany} type="text" placeholder="Company Name"/>
          <input onChange={this.updateNewWebsite} type="text" placeholder="Website"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
})
