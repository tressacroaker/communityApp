OneFundraiser = React.createClass({
    deleteFundraiser: function(){
         var id = this.props.id;
        $.ajax({
            method: "DELETE",
            url: "/fundraiser/" + id,
            success: function(response){
                this.props.getFundraisers();
            }.bind(this),
            error: function(xhr, status, err){
                console.error(status, err.toString)
            }.bind(this)
        });
    },

    putFundraiser: function (){
    var id = this.props.id;
    var updatedFundraiser = {
      fundraiserName: this.state.fundraiserName,
      fundraiserDescription: this.state.fundraiserDescription,
      fundraiserPurpose: this.state.fundraiserPurpose,
      dropDate: this.state.dropDate,
      fundraiserGoal: this.state.fundraiserGoal,
      image: this.state.image,
      projectId: this.state.projectId,
      matchedId: this.state.matchedId,
      isMatched: this.state.isMatched
    };
      $.ajax ({
        method: "PUT",
        url: "/fundraiser/" + id,
        data: updatedFundraiser,
        success: function(response){
          this.props.getFundraisers();
        }.bind(this),
        error: function(xhr, status, err){
          console.error(status, err.toString());
        }.bind(this)
    });
  },

  changeFundraiserName: function(event){
  this.setState({
    fundraiserName: event.target.value
  })
},
  changeFundraiserDescription: function(event){
  this.setState({
    fundraiserDescription: event.target.value
  })
},
  changeFundraiserPurpose: function(event){
  this.setState({
    fundraiserPurpose: event.target.value
  })
},
  changeDropDate: function(event){
  this.setState({
    dropDate: event.target.value
  })
},
  changeFundraiserGoal: function(event){
  this.setState({
    fundraiserGoal: event.target.value
  })
},
  changeImage: function(event){
  this.setState({
    image: event.target.value
  })
},

updateFundraiser: function(){
    this.setState({
      view:
        <div key ={this.props.id}>
          <form onSubmit = {this.putFundraiser}>
              <input placeholder = {this.props.fundraiserName} onChange = {this.changeFundraiserName}/>
              <input placeholder = {this.props.fundraiserDescription} onChange = {this.changeFundraiserDescription}/>
              <input placeholder = {this.props.fundraiserPurpose} onChange = {this.changeFundraiserPurpose}/>
              <input placeholder = {this.props.dropDate} onChange = {this.changeDropDate}/>
              <input placeholder = {this.props.fundraiserGoal} onChange = {this.changeFundraiserGoal}/>
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
          <h1>{this.props.fundraiserName}</h1>
          <p>{this.props.dateCreated}</p>
          <p>{this.props.fundraiserDescription}</p>
          <p>{this.props.fundraiserPurpose}</p>
          <p>{this.props.fundraiserGoal}</p>
          <p>{this.props.dropDate}</p>
          <img src={this.props.image}/>
          <button onClick={this.deleteFundraiser}>DELETE This Fundraiser</button>
          <button onClick={this.updateFundraiser}>UPDATE This Fundraiser</button>
      </div>,
      fundraiserName: this.props.fundraiserName,
      dateCreated: this.props.dateCreated,
      fundraiserDescription: this.props.fundraiserDescription,
      fundraiserPurpose: this.props.fundraiserPurpose,
      fundraiserGoal: this.props.fundraiserGoal,
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
