ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {MainPage}>
      <Route path = "home" component = {HomePage}/>
      <Route path = "itempage" component = {ItemPage}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
