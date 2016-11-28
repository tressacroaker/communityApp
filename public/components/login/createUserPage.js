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
        <Link to = '/createhashelp'>
          <button>HAS HELP</button>
        </Link>
      </div>
    );
  }
});
