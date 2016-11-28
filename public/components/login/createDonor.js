CreateDonor = React.createClass({
  render: function(){
    return(
      <div>
        <form onSubmit={this.postUser}>
          <input onChange={this.updateNewEmail} type="text" placeholder="Email Address"/>
          <input onChange={this.updateNewPassword} type="text" placeholder="Password"/>
          <input onChange={this.updateNewUser} type="text" placeholder="Full Name"/>


        </form>
      </div>
    );
  }
});
