ProjectList = React.createClass({
  render: function(){
       var self = this;
       var projectNodes = this.props.data.map(function(project){
           return(
           <OneProject
           id={project._id}
           projectName={project.projectName}
           projectDescription={project.projectDescription}
           dateCreated={project.dateCreated}
           estimatedLabor={project.estimatedLabor}
           estimatedCost={project.estimatedCost}
           dropDate={project.dropDate}
           image={project.image}
           getProjects={self.props.getprojects}
           />
       );
       })
       return (
           <div>
               {projectNodes}
           </div>
       );
   }
});
