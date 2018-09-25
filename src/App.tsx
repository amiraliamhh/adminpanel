import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Header from './ui-components/Header';
import Menu from './ui-components/Menu';

import Home from './components/Home';
import Users from './components/Users';
import Orders from './components/Orders';
import SellToUserSettings from './components/SellToUserSettings';
import BuyFromUserSettings from './components/BuyFromUserSettings';
import GeneralSettings from './components/GeneralSettings';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Menu />

          <Route path="/" exact={true} component={Home} />
          <Route path="/users" exact={true} component={Users} />
          <Route path="/orders" exact={true} component={Orders} />
          <Route path="/sell-to-user-settings" exact={true} component={SellToUserSettings} />
          <Route path="/buy-from-user-settings" exact={true} component={BuyFromUserSettings} />
          <Route path="/general-settings" exact={true} component={GeneralSettings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
