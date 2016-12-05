MainPage = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <div className="topHeader">
            <img className="logo" src="teamFundableLogo2.png"/>
            <Link to = '/login'>
              <button className="loginButton">Log In</button>
            </Link>
            <Link to = '/createuser'>
              <button className="createButton">Create Account</button>
            </Link>
          </div>
          <div className="navHeader">
          <Link to = '/home'>
            <button className="navButton">Home</button>
          </Link>
          <Link to = '/projectPage'>
            <button className="navButton">Community Projects</button>
          </Link>
          <Link to = '/fundraiserPage'>
            <button className="navButton">Community Teams</button>
          </Link>
          <Link to = '/matchPage'>
            <button className="navButton">Help Fund A Project</button>
          </Link>
        </div>
        </header>
        {this.props.children}
        <footer>
          <div className="footer">

          </div>
        </footer>
      </div>
    );
  }
});
