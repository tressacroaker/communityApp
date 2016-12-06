MatchedCrud = {
  get: function(){
    $.ajax({
      method: "GET",
      url: "/matched",
      success: function(response){
        this.setState({listOfMatched: response});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString)
      }.bind(this)
    });
  },
  post: function(newMatched){

          // var newMatched = {
          //   fundraiserId: this.state.fundraiserId,
          //   projectId: this.state.projectId,
          //   status: this.state.status
          // }

          $.ajax({
              method: "POST",
              url: "/matched",
              data: newMatched,
              success: function(response){
                  // this.getMatched();
                  console.log(response);

              }.bind(this),
              error: function(xhr, status, err){
                  console.error(status, err.toString)
              }.bind(this)
          });
  },

  consoleLog: function(projectId){
    var newMatched = {
      fundraiserId: "fake user",
      projectId: projectId,
      status: "active"
    }
    .post(newMatched);
  }

};
