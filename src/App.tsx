import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Orders from './components/Orders';
import Order from './components/Order';
import SellToUserSettings from './components/SellToUserSettings';
import BuyFromUserSettings from './components/BuyFromUserSettings';
import BuyFromUserSetting from './components/BuyFromUserSetting';
import GeneralSettings from './components/GeneralSettings';
import Login from './components/Login';

import RabCheckbox from './design-system/Checkbox';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/users" exact={true} component={Users} />
            <Route path="/user" exact={true} component={User} />
            <Route path="/orders" exact={true} component={Orders} />
            <Route path="/order" exact={true} component={Order} />
            <Route path="/sell-to-user-settings" exact={true} component={SellToUserSettings} />
            <Route path="/buy-from-user-settings" exact={true} component={BuyFromUserSettings} />
            <Route path="/buy-from-user-setting" exact={true} component={BuyFromUserSetting} />
            <Route path="/general-settings" exact={true} component={GeneralSettings} />
            <Route path="/ds/checkbox" exact={true} component={RabCheckbox} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
