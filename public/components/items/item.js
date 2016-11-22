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

    render: function(){
        return (
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
            </div>
        );
    }
});
