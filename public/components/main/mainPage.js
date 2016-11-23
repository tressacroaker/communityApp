MainPage = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <Link to = '/home'>
            <button>HOME</button>
          </Link>
          <Link to = '/itempage'>
            <button>ITEMS</button>
          </Link>
        </header>
        {this.props.children}
      </div>
    );
  }
})
