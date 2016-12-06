ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}>
      <IndexRedirect to='/home'/>
      <Route path="home" component={HomePage}/>
      <Route path="projectpage" component={ProjectPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="createuser" component={CreateUserPage}/>
      <Route path="createdonor" component={CreateDonor}/>
      <Route path="createneedwork" component={CreateNeedWork}/>
      <Route path="createteam" component={CreateTeam}/>
      <Route path="fundraiserpage" component={FundraiserPage}/>
      <Route path="matchedpage" component={MatchedPage}/>
      <Route path="failedlogin" component={FailedLogin}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
