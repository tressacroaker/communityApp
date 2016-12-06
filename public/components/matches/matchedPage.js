MatchedPage = React.createClass({
  matchedProject: function(project){
    console.log("Hello");
  },
  // getMatchesFundraiser: function(){
  //   $.ajax({
  //     method: "GET",
  //     url: "/fundraiserPage",
  //     success: function(response){
  //       for(var i=0; i<response.length; i++){
  //         response[i].dateCreated = moment(response[i].dateCreated).format("MMM. DD, YYYY");
  //         response[i].dropDate = moment(response[i].dropDate).format("MMM. DD, YYYY");
  //       }
  //       this.setState({listOfMatchesFundraiser: response});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.error(status, err.toString)
  //     }.bind(this)
  //   });
  // },
  // getMatchesProjects: function(){
  //   $.ajax({
  //     method: "GET",
  //     url: "/projectPage",
  //     success: function(response){
  //       for(var i=0; i<response.length; i++){
  //         response[i].dateCreated = moment(response[i].dateCreated).format("MMM. DD, YYYY");
  //         response[i].dropDate = moment(response[i].dropDate).format("MMM. DD, YYYY");
  //       }
  //       this.setState({listOfMatchesProjects: response});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.error(status, err.toString)
  //     }.bind(this)
  //   });
  // },
  render: function(){
      return (
        <div className="wrapper">
          <h1> This is the Matched Page </h1>
        </div>
      );
  }
});
