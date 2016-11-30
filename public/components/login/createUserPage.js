CreateUserPage = React.createClass({
  render: function(){
    return(
      <div>
        <h4>What type of account would you like to create?</h4>
        <Link to = '/createdonor'>
          <button>DONOR</button>
        </Link>
        <Link to = '/createneedwork'>
          <button>NEED WORK</button>
        </Link>
        <Link to = '/createteam'>
          <button>TEAM</button>
        </Link>
      </div>
    );
  }
});
