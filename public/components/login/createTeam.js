CreateTeam = React.createClass({
    postUser: function(user){
      var user = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        teamName: this.state.teamName,
        company: this.state.company,
        website: this.state.website,
        type: "team"
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
        firstName: "",
        lastName: "",
        teamName: "",
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
    updateNewFirstName: function(event){
      this.setState({
        firstName: event.target.value
      });
    },
    updateNewLastName: function(event){
      this.setState({
        lastName: event.target.value
      });
    },
    updateNewTeamName: function(event){
      this.setState({
        teamName: event.target.value
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
        <div className = "wrapper">
          <form onSubmit={this.postUser}>
            <input onChange={this.updateNewEmail} type="text" placeholder="Email Address"/>
            <input onChange={this.updateNewPassword} type="text" placeholder="Password"/>
            <input onChange={this.updateNewFirstName} type="text" placeholder="First Name"/>
            <input onChange={this.updateNewLastName} type="text" placeholder="Last Name"/>
            <input onChange={this.updateNewTeamName} type="text" placeholder="Team Name"/>
            <input onChange={this.updateNewCompany} type="text" placeholder="Company Name"/>
            <input onChange={this.updateNewWebsite} type="text" placeholder="Website"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  })
