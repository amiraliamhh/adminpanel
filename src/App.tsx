import 'bootstrap/dist/css/bootstrap-grid.min.css';
import * as React from 'react';
// import { readOrders } from './api/calls';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
