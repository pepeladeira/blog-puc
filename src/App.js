import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import BlogDetail from './component/BlogDetail/BlogDetail';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/post/:postID">
          <BlogDetail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
