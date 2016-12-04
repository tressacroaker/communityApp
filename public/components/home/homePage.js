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
          {/* <h2 id="howItWorks">How Team Fundable Works</h2> */}
          <img className="threeArrowsPic" src="twoArrows.png"/>
        <div className="tripleBox">
          <div className="leftTripleBox">
            <p id="tripleBoxTitle"> Community </p>
            <p>Local organization needs help completing a project </p>
            <p>Past projects include beautifying public spaces, planting trees, and volunteering at homeless shelters.</p>
            <p>Organization posts description of project with Team Fundable</p>
            <p>Team volunteers their services</p>
            <p>You make it happen by funding the match!</p>
          </div>
          <div className="middleTripleBox">
            <p id="tripleBoxTitle"> You </p>
          </div>
          <div className="rightTripleBox">
            <p id="tripleBoxTitle"> Teams </p>
            <p>want to raise money for an upcoming event </p>
            <p>This could include Little League trips out of town, school band buying instruments, or Boy Scouts needing new uniforms.</p>
            <p>Teams post the description of their event and what it will take to reach this goal.</p>
            <p>Community Oragnizations are matched with the Teams</p>
            <p>You make it happen by funding the match!</p>
          </div>
        </div>
      </div>
    );
  }
})
