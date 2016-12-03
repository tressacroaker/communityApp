HomePage = React.createClass({
  render: function(){
    return(
      <div className = "wrapper">
        <div className = "homePicBox">
          <img className="hands" src="buckets.jpg"/>
          <div className = "tagline">
              <p id="line1">Community Development.</p>
              <p id="line2">One Team at a Time.</p>
          </div>
          <button>Help Fund a Project</button>
        </div>
        <div className="threeArrowsBox">
          <h2 id="howItWorks">How Team Fundable Works</h2>
          <img className="threeArrowsPic" src="threearrows.jpg"/>
        </div>
      </div>
    );
  }
})
