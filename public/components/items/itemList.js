ItemList = React.createClass({
  render: function(){
       var self = this;
       var itemNodes = this.props.data.map(function(item){
           return(
           <OneItem
           id={item._id}
           user={item.user}
           name={item.name}
           dateCreated={item.dateCreated}
           description={item.description}
           estimatedLabor={item.estimatedLabor}
           estimatedCost={item.estimatedCost}
           dateCompleted={item.dateCompleted}
           image={item.image}
           getItems={self.props.getItems}
           />
       );
       })
       return (
           <div>
               {itemNodes}
           </div>
       );
   }
});
