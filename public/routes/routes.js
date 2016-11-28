ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}>
      <IndexRedirect to='/home'/>
      <Route path="home" component={HomePage}/>
      <Route path="itempage" component={ItemPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="createuser" component={CreateUserPage}/>
      <Route path="createdonor" component={CreateDonor}/>
      <Route path="createneedwork" component={CreateNeedWork}/>
      <Route path="createhashelp" component={CreateHasHelp}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
