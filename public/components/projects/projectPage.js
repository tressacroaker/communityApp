ProjectPage = React.createClass({
  getProjects: function(){
    $.ajax({
      method: "GET",
      url: "/project",
      success: function(response){
        for(var i=0; i<response.length; i++){
          response[i].dateCreated = moment(response[i].dateCreated).format("MMM. DD, YYYY");
          response[i].dropDate = moment(response[i].dropDate).format("MMM. DD, YYYY");
        }
        this.setState({listOfProjects: response});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString)
      }.bind(this)
    });
  },
  postProject: function(){
        var newProject = {
          projectName: this.state.projectName,
          projectDescription: this.state.projectDescription,
          dateCreated: this.state.dateCreated,
          estimatedLabor: this.state.estimatedLabor,
          estimatedCost: this.state.estimatedCost,
          dropDate: this.state.dropDate,
          image: this.state.image,
          fundraiserId: this.state.fundraiserId,
          matchedId: this.state.matchedId,
          isMatched: this.state.isMatched
        }
        $.ajax({
            method: "POST",
            url: "/project",
            data: newProject,
            success: function(response){
                this.getProjects();

            }.bind(this),
            error: function(xhr, status, err){
                console.error(status, err.toString)
            }.bind(this)
        });
    },
    updateNewProjectName: function(event){
        this.setState({
                projectName: event.target.value
        });
    },
    updateNewProjectDescription: function(event){
        this.setState({
                projectDescription: event.target.value
        });

    },
    updateNewProjectDateCreated: function(event){
        this.setState({
                dateCreated: event.target.value
        });

    },
    updateNewProjectEstimatedLabor: function(event){
        this.setState({
                estimatedLabor: event.target.value
        });

    },
    updateNewProjectEstimatedCost: function(event){
        this.setState({
                estimatedCost: event.target.value
        });

    },
    updateNewProjectDropDate: function(event){
        this.setState({
                dropDate: event.target.value
        });

    },
    updateNewProjectImage: function(event){
        this.setState({
                image: event.target.value
        });

    },
    componentDidMount: function(){
        this.getProjects();
    },
    getInitialState: function(){
        return {
        listOfProjects: [],
        projectName: "",
        projectDescription: "",
        dateCreated: "",
        estimatedLabor: "",
        estimatedCost: "",
        dropDate: "",
        image: ""
        };
    },
    render: function(){
        return (
          <div className = "wrapper">
            <div>
            <form onSubmit={this.postProject}>
                <input onChange={this.updateNewProjectName} type="text" placeholder="Name of Project"/>
                <input onChange={this.updateNewProjectDescription} type="text" placeholder="Project Description"/>
                <input onChange={this.updateNewProjectEstimatedLabor} type="text" placeholder="Estimated Labor"/>
                <input onChange={this.updateNewProjectEstimatedCost} type="text" placeholder="Estimated Cost"/>
                <input onChange={this.updateNewProjectDropDate} type="date" placeholder="Completion Date"/>
                <input onChange={this.updateNewProjectImage} type="text" placeholder="Image"/>
                <button type="submit">Add New Project</button>
            </form>
            </div>

              {/* <ItemList data={this.state.listOfItems} getItems={this.getItems} /> */}
              {/* <h1><ItemList data={this.state.listOfItems} getItems={this.getItems} /></h1> */}
              <div className="cardContainer">
                {this.state.listOfProjects.map(function(project){
                  console.log(project)
                  return(
                    <div className="project">
                      <div className="projName">
                        <h4>{project.projectName}</h4>
                      </div>
                      <div className="projInfo">
                      <div className="projPic">
                        <img src={project.image}/>
                      </div>
                        <p>{project.projectDescription}</p>
                        <p>Estimated Labor: {project.estimatedLabor}</p>
                        <p>Estimated Cost: {project.estimatedCost}</p>
                        <p>Expires: {project.dropDate}</p>
                      </div>
                      <div className="projMatchContainer">
                        <button id="projMatchButton"></button>
                      </div>
                    </div>
                    )
                })}
              </div>
            </div>
        );
    }
});
