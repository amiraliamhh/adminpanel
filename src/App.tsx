import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';

import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Orders from './components/Orders';
import Order from './components/Order';
import SellToUserSettings from './components/SellToUserSettings';
import BuyFromUserSettings from './components/BuyFromUserSettings';
import BuyFromUserSetting from './components/BuyFromUserSetting';
import GeneralSettings from './components/GeneralSettings';
import Chat from './components/Chat';
import Login from './components/Login';
import Loading from './components/Loading';
import PrivateRoute from './components/PrivateRoute';
import Tickets from './components/Tickets';
import Ticket from './components/Ticket';

import allReducers from './redux/reducers/index';
import SuccessAlert from './ui-components/SuccessAlert';
import FailAlert from './ui-components/FailAlert';

const windowAny = window as any;

const Reducers = combineReducers(allReducers);
export const Store = createStore(
  Reducers,
  windowAny.__REDUX_DEVTOOLS_EXTENSION__ && windowAny.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Loading />
            <SuccessAlert />
            <FailAlert />
            <Route path="/login" exact={true} component={Login} />
            <PrivateRoute path="/" exact={true} Component={Home} />
            <Route path="/users" exact={true} component={Users} />
            <Route path="/user" exact={true} component={User} />
            <Route path="/orders" exact={true} component={Orders} />
            <Route path="/order" exact={true} component={Order} />
            <Route path="/sell-to-user-settings" exact={true} component={SellToUserSettings} />
            <Route path="/buy-from-user-settings" exact={true} component={BuyFromUserSettings} />
            <Route path="/buy-from-user-setting" exact={true} component={BuyFromUserSetting} />
            <Route path="/general-settings" exact={true} component={GeneralSettings} />
            <Route path="/tickets" exact={true} component={Tickets} />
            <Route path="/ticket" exact={true} component={Ticket} />
            <Route path="/chat" exact={true} component={Chat} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
