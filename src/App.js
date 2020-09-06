import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/PostContainer/PostContainer';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetails/PostDetails';
import Header from './Components/Header/Header';


function App() {
  return (
     
      <Router>
        <Header></Header>
        <Switch>
          <Route path ="/home">
            <Home></Home>
          </Route>
          <Route path ="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;
