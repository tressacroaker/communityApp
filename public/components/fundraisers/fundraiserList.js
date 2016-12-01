FundraiserList = React.createClass({
  render: function(){
       var self = this;
       var fundraiserNodes = this.props.data.map(function(fundraiser){
           return(
           <OneFundraiser
           id={fundraiser._id}
           fundraiserName={fundraiser.fundraiserName}
           fundraiserDescription={fundraiser.fundraiserDescription}
           dateCreated={fundraiser.dateCreated}
           fundraiserPurpose={fundraiser.fundraiserPurpose}
           dropDate={fundraiser.dropDate}
           fundraiserGoal={fundraiser.fundraiserGoal}
           image={fundraiser.image}
           getFundraisers={self.props.getfundraisers}
           />
       );
       })
       return (
           <div>
               {fundraiserNodes}
           </div>
       );
   }
});
