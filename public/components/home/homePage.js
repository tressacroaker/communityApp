HomePage = React.createClass({
  render: function(){
    return(
      <div className = "wrapper">
        <div className = "homePicBox">
          <img className="paintPic" src="buckets.jpg"/>
          <div className = "tagline">
              <p id="line1">Community Development.</p>
              <p id="line2">One Team at a Time.</p>
          </div>
          <button>Help Fund a Project</button>
        </div>
          {/* <img className="threeArrowsPic" src="twoArrows.png"/> */}
          <div className="afterPaintBox">
            <h2 id="whyUs">Why Us?</h2>
            <h2>team<span>Fundable</span> fosters sustainable changes for your local community by connecting local organizations and teams in need, with donors who can make it happen.</h2>
            <h2>Giving back to your community and volunteering for service projects, big or small, will enrich your neighborhood for a lifetime.</h2>
            <h2>Team volunteering helps develop leadership skills, confidence, and friendships, while also discovering new interests. </h2>
            <h2>"Just a few hours of volunteering can turn into a lifetime of opportunity" -The United Way</h2>
          </div>
          <h1 id="togetherTitle"><span>Together We Can Make A Difference</span></h1>

        <div className="tripleBox">
          <div className="box">
            <h2> 1. Community </h2>
            <img src="parkColor.png"/>
            <h4>Local organization needs help completing a project </h4>
            <p>Planting trees, building childrens playgrounds, painting over graffiti, volunteering at homeless shelters.</p>
            <button>Post a service project</button>
            {/* <p>Past projects include beautifying public spaces, planting trees, and volunteering at homeless shelters.</p>
            <p>Organization posts description of project with Team Fundable</p>
            <p>Team volunteers their services</p>
            <p>You make it happen by funding the match!</p> */}
          </div>
          <div className="box">
            <h2>2. Teams </h2>
            <img src="trophyColor.png"/>
            <h4>Team or club wants to raise money for an upcoming event or goal</h4>
            <p>Little League trips out of town, school band buying instruments, or Boy Scouts needing new uniforms.</p>
            <button>Match Your Team</button>
          </div>
          <div className="box">
            <h2>3. You</h2>
            <img src="peopleColor.png"/>
            <h4>You provide a donation to the team or club who then completes the community project.</h4>
            <p>Your support enables both individual and collective success.</p>
            {/* <p>Talk about a win-win!</p> */}
            <button>Join teamFundable</button>
            {/* <p>This could include Little League trips out of town, school band buying instruments, or Boy Scouts needing new uniforms.</p>
            <p>Teams post the description of their event and what it will take to reach this goal.</p>
            <p>Community Oragnizations are matched with the Teams</p>
            <p>You make it happen by funding the match!</p> */}
          </div>
        </div>
        <div className="quote">
          <h2>"Just a few hours of volunteering can turn into a lifetime of opportunity" -The United Way</h2>
        </div>
        {/* <div className="bigButtonBox">
          <button>Join teamFundable!</button>
        </div> */}
        <div className="businessLogos">
          <img id="busiLogo" src="http://www.economicmodelling.ca/wp-content/uploads/2016/06/forbes-logo-gray.png"/>
          <img id="busiLogo" src="https://www.gravie.com/wp-content/uploads/2015/04/news-nyt.png"/>
          <img id="busiLogo" src="https://cdn.shopify.com/s/files/1/0879/4406/t/15/assets/Bloomberg-Businessweek-logo.png?6105447849361743379"/>
          <img id="busiLogo" src="http://uploads.webflow.com/55cf53187e5ec592222d6de5/55cf662be2e940932282974e_cnn-grey.png"/>
          <img id="busiLogo" src="https://static1.squarespace.com/static/57233c744d088e4abb526948/572c8d8037013bcf0a1e2da4/572c8d8037013bcf0a1e2da3/1410458188334/techcrunch.png"/>
          <img id="busiLogo" src="https://www.workitdaily.com/wp-content/themes/newstube-child/home-new/img/fast-company-logo_transgrey.png"/>
          <img id="busiLogo" src="http://www.parkeasier.com/wp-content/uploads/2015/02/time-magazine-logo-wallpaper-1024x297.png"/>
          <img id="busiLogo" src="http://gannettdigital-static-web.s3.amazonaws.com/static/_gannett/img/logos/usa-today-gannett.png"/>

        </div>
      </div>
    );
  }
})
