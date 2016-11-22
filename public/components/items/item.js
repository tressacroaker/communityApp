OneItem = React.createClass({
    deleteItem: function(){
         var id = this.props.id;
        $.ajax({
            method: "DELETE",
            url: "/item/" + id,
            success: function(response){
                this.props.getItems();
            }.bind(this),
            error: function(xhr, status, err){
                console.error(status, err.toString)
            }.bind(this)
        });
    },

    putItem: function (){
    var id = this.props.id;
    var updatedItem = {
      name: this.state.name,
      description: this.state.description,
      estimatedLabor: this.state.estimatedLabor,
      estimatedCost: this.state.estimatedCost,
      dateCompleted: this.state.dateCompleted,
      image: this.state.image
    };
      $.ajax ({
        method: "PUT",
        url: "/item/" + id,
        data: updatedItem,
        success: function(response){
          this.props.getItems();
        }.bind(this),
        error: function(xhr, status, err){
          console.error(status, err.toString());
        }.bind(this)
    });
  },

  changeName: function(event){
  this.setState({
    name: event.target.value
  })
},
  changeDescription: function(event){
  this.setState({
    description: event.target.value
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
  changeDateCompleted: function(event){
  this.setState({
    dateCompleted: event.target.value
  })
},
  changeImage: function(event){
  this.setState({
    image: event.target.value
  })
},

updateItem: function(){
    this.setState({
      view:
        <div key ={this.props.id}>
          <form onSubmit = {this.putItem}>
              <input placeholder = {this.props.name} onChange = {this.changeName}/>
              <input placeholder = {this.props.description} onChange = {this.changeDescription}/>
              <input placeholder = {this.props.estimatedLabor} onChange = {this.changeEstimatedLabor}/>
              <input placeholder = {this.props.estimatedCost} onChange = {this.changeEstimatedCost}/>
              <input placeholder = {this.props.dateCompleted} onChange = {this.changeDateCompleted}/>
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
          <h1>{this.props.name}</h1>
          <p>{this.props.user}</p>
          <p>{this.props.dateCreated}</p>
          <p>{this.props.description}</p>
          <p>{this.props.estimatedLabor}</p>
          <p>{this.props.estimatedCost}</p>
          <p>{this.props.dateCompleted}</p>
          <img src={this.props.image}/>
          <button onClick={this.deleteItem}>DELETE This Item</button>
          <button onClick={this.updateItem}>UPDATE This Item</button>
      </div>,
      name: this.props.name,
      description: this.props.description,
      estimatedLabor: this.props.estimatedLabor,
      estimatedCost: this.props.estimatedCost,
      dateCompleted: this.props.dateCompleted,
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
