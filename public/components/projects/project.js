OneProject = React.createClass({
    deleteProject: function(){
         var id = this.props.id;
        $.ajax({
            method: "DELETE",
            url: "/project/" + id,
            success: function(response){
                this.props.getProjects();
            }.bind(this),
            error: function(xhr, status, err){
                console.error(status, err.toString)
            }.bind(this)
        });
    },

    putProject: function (){
    var id = this.props.id;
    var updatedProject = {
      projectName: this.state.projectName,
      projectDescription: this.state.projectDescription,
      estimatedLabor: this.state.estimatedLabor,
      estimatedCost: this.state.estimatedCost,
      dropDate: this.state.dropDate,
      image: this.state.image,
      fundraiserId: this.state.fundraiserId,
      matchedId: this.state.matchedId,
      isMatched: this.state.isMatched
    };
      $.ajax ({
        method: "PUT",
        url: "/project/" + id,
        data: updatedProject,
        success: function(response){
          this.props.getProjects();
        }.bind(this),
        error: function(xhr, status, err){
          console.error(status, err.toString());
        }.bind(this)
    });
  },

  changeProjectName: function(event){
  this.setState({
    projectName: event.target.value
  })
},
  changeProjectDescription: function(event){
  this.setState({
    projectDescription: event.target.value
  })
},
  changeEstimatedLabor: function(event){
  this.setState({
    estimatedLabor: event.target.value
  })
},
  changeEstimagedCost: function(event){
  this.setState({
    estimatedCost: event.target.value
  })
},
  changeDropDate: function(event){
  this.setState({
    dropDate: event.target.value
  })
},
  changeImage: function(event){
  this.setState({
    image: event.target.value
  })
},

updateProject: function(){
    this.setState({
      view:
        <div key ={this.props.id}>
          <form onSubmit = {this.putProject}>
              <input placeholder = {this.props.projectName} onChange = {this.changeProjectName}/>
              <input placeholder = {this.props.projectDescription} onChange = {this.changeProjectDescription}/>
              <input placeholder = {this.props.estimatedLabor} onChange = {this.changeEstimatedLabor}/>
              <input placeholder = {this.props.estimatedCost} onChange = {this.changeEstimatedCost}/>
              <input placeholder = {this.props.dropDate} onChange = {this.changeDropDate}/>
              <input placeholder = {this.props.image} onChange = {this.changeImage}/>
              <img src = {this.state.image}/>
              <button type = "submit">Submit Change</button>
          </form>
        </div>
    })
  },

  getInitialState: function(){
    return {
      view:
      <div key={this.props.id}>
          <h1>{this.props.projectName}</h1>
          <p>{this.props.dateCreated}</p>
          <p>{this.props.projectDescription}</p>
          <p>{this.props.estimatedLabor}</p>
          <p>{this.props.estimatedCost}</p>
          <p>{this.props.dropDate}</p>
          <img src={this.props.image}/>
          <button onClick={this.deleteProject}>DELETE This Project</button>
          <button onClick={this.updateProject}>UPDATE This Project</button>
      </div>,
      projectName: this.props.projectName,
      dateCreated: this.props.dateCreated,
      projectDescription: this.props.projectDescription,
      estimatedLabor: this.props.estimatedLabor,
      estimatedCost: this.props.estimatedCost,
      dropDate: this.props.dropDate,
      image: this.props.image
    }
  },

    render: function(){
        return (
            <div>
              {this.state.view}
            </div>
        );
    }
});
