FundraiserPage = React.createClass({
  getFundraisers: function(){
    $.ajax({
      method: "GET",
      url: "/fundraiser",
      success: function(response){
        for(var i=0; i<response.length; i++){
          response[i].dateCreated = moment(response[i].dateCreated).format("MMM. DD, YYYY");
          response[i].dropDate = moment(response[i].dropDate).format("MMM. DD, YYYY");
        }
        this.setState({listOfFundraisers: response});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString)
      }.bind(this)
    });
  },
  postFundraiser: function(){
        var newFundraiser = {
          fundraiserName: this.state.fundraiserName,
          fundraiserDescription: this.state.fundraiserDescription,
          dateCreated: this.state.dateCreated,
          fundraiserPurpose: this.state.fundraiserPurpose,
          dropDate: this.state.dropDate,
          fundraiserGoal: this.state.fundraiserGoal,
          image: this.state.image,
          fundraiserId: this.state.fundraiserId,
          matchedId: this.state.matchedId
        }
        $.ajax({
            method: "POST",
            url: "/fundraiser",
            data: newFundraiser,
            success: function(response){
                this.getFundraisers();

            }.bind(this),
            error: function(xhr, status, err){
                console.error(status, err.toString)
            }.bind(this)
        });
    },
    updateNewFundraiserName: function(event){
        this.setState({
                fundraiserName: event.target.value
        });
    },
    updateNewFundraiserDescription: function(event){
        this.setState({
                fundraiserDescription: event.target.value
        });
    },
    updateNewFundraiserDateCreated: function(event){
        this.setState({
                dateCreated: event.target.value
        });
    },
    updateNewFundraiserPurpose: function(event){
        this.setState({
                fundraiserPurpose: event.target.value
        });
    },
    updateNewFundraiserDropDate: function(event){
        this.setState({
                dropDate: event.target.value
        });
    },
    updateNewFundraiserGoal: function(event){
        this.setState({
                fundraiserGoal: event.target.value
        });
    },
    updateNewFundraiserImage: function(event){
        this.setState({
                image: event.target.value
        });
    },
    componentDidMount: function(){
        this.getFundraisers();
    },
    getInitialState: function(){
        return {
        listOfFundraisers: [],
        fundraiserName: "",
        fundraiserDescription: "",
        dateCreated: "",
        fundraiserPurpose: "",
        dropDate: "",
        fundraiserGoal: "",
        image: ""
        };
    },
    render: function(){
        return (
          <div className = "wrapper">
            <div>
            <form onSubmit={this.postFundraiser}>
                <input onChange={this.updateNewFundraiserName} type="text" placeholder="Name of Fundraiser"/>
                <input onChange={this.updateNewFundraiserDescription} type="text" placeholder="Fundraiser Description"/>
                <input onChange={this.updateNewFundraiserPurpose} type="text" placeholder="Fundraiser Purpose"/>
                <input onChange={this.updateNewFundraiserDropDate} type="text" placeholder="Completion Date"/>
                <input onChange={this.updateNewFundraiserGoal} type="text" placeholder="Fundraiser Goal"/>
                <input onChange={this.updateNewFundraiserImage} type="text" placeholder="Image"/>
                <button type="submit">Add New Fundraiser</button>
            </form>
            </div>

              {/* <ItemList data={this.state.listOfItems} getItems={this.getItems} /> */}
              {/* <h1><ItemList data={this.state.listOfItems} getItems={this.getItems} /></h1> */}
              <div className="cards">

                {this.state.listOfFundraisers.map(function(fundraiser){
                  console.log(fundraiser)
                  return(
                    <div className="task">
                      <div className="taskLeft">
                      <img src={fundraiser.image}/></div>
                      <div className="taskRight">
                      <h4>{fundraiser.fundraiserName}</h4>
                      <h5>{fundraiser.FundraiserDescription}</h5>
                      <h5>{fundraiser.dateCreated}</h5>
                      <h5>{fundraiser.fundraiserPurpose}</h5>
                      <h5>{fundraiser.dropDate}</h5>
                      <h5>{fundraiser.fundraiserGoal}</h5>
                      </div>
                    </div>
                    )
                })}
              </div>
            </div>
        );
    }
});
