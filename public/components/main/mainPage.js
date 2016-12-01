MainPage = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <div className="topHeader">
            <p>teamFundable</p>
            <Link to = '/login'>
              <button className="navButton">LOG IN</button>
            </Link>
            <Link to = '/createuser'>
              <button className="navButton">CREATE USER</button>
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
      </div>
    );
  }
});
