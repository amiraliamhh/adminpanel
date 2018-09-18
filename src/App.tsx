import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';

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
