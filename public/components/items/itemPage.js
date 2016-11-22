ItemPage = React.createClass({
  getItems: function(){
    $.ajax({
      method: "GET",
      url: "/item",
      success: function(response){
        this.setState({listOfItems: response});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString)
      }.bind(this)
    });
  },
  postItem: function(){
        var newItem = {
          user: this.state.user,
          name: this.state.name,
          dateCreated: this.state.dateCreated,
          description: this.state.description,
          estimatedLabor: this.state.estimatedLabor,
          estimatedCost: this.state.estimatedCost,
          dateCompleted: this.state.dateCompleted,
          image: this.state.image
        }
        $.ajax({
            method: "POST",
            url: "/item",
            data: newItem,
            success: function(response){
                this.getItems();

            }.bind(this),
            error: function(xhr, status, err){
                console.error(status, err.toString)
            }.bind(this)
        });
    },
    updateNewItemName: function(event){
        this.setState({
                name: event.target.value
        });
    },
    updateNewItemDescription: function(event){
        this.setState({
                description: event.target.value
        });

    },
    updateNewItemEstimatedLabor: function(event){
        this.setState({
                estimatedLabor: event.target.value
        });

    },
    updateNewItemEstimatedCost: function(event){
        this.setState({
                estimatedCost: event.target.value
        });

    },
    updateNewItemDateCompleted: function(event){
        this.setState({
                dateCompleted: event.target.value
        });

    },
    updateNewItemImage: function(event){
        this.setState({
                image: event.target.value
        });

    },
    componentDidMount: function(){
        this.getItems();
    },
    getInitialState: function(){
        return {
        listOfItems: [],
        user: "",
        name: "",
        dateCreated: "",
        description: "",
        estimatedLabor: "",
        estimatedCost: "",
        dateCompleted: "",
        image: ""
        };
    },
    render: function(){
        return (
            <div>
            <form onSubmit={this.postItem}>
                <input onChange={this.updateNewItemName} type="text" placeholder="Name of Item"/>
                <input onChange={this.updateNewItemDescription} type="text" placeholder="Item Description"/>
                <input onChange={this.updateNewItemEstimatedLabor} type="text" placeholder="Estimated Labor"/>
                <input onChange={this.updateNewItemEstimatedCost} type="text" placeholder="Estimated Cost"/>
                <input onChange={this.updateNewItemDateCompleted} type="date" placeholder="Date Completed"/>
                <input onChange={this.updateNewItemImage} type="text" placeholder="Image"/>
                <button type="submit">Add New Item</button>
            </form>
            <ItemList data={this.state.listOfItems} getItems={this.getItems}/>
            </div>
        );
    }
});
