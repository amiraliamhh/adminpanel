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

import RabNotification from './components/Notification';

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
            <RabNotification />
            <Loading />
            <SuccessAlert />
            <FailAlert />
            <Route path="/login" exact={true} component={Login} />
            <PrivateRoute path="/" exact={true} Component={Home} />
            <PrivateRoute path="/users" exact={true} Component={Users} />
            <PrivateRoute path="/user" exact={true} Component={User} />
            <PrivateRoute path="/orders" exact={true} Component={Orders} />
            <PrivateRoute path="/order" exact={true} Component={Order} />
            <PrivateRoute path="/sell-to-user-settings" exact={true} Component={SellToUserSettings} />
            <PrivateRoute path="/buy-from-user-settings" exact={true} Component={BuyFromUserSettings} />
            <PrivateRoute path="/buy-from-user-setting" exact={true} Component={BuyFromUserSetting} />
            <PrivateRoute path="/general-settings" exact={true} Component={GeneralSettings} />
            <PrivateRoute path="/tickets" exact={true} Component={Tickets} />
            <PrivateRoute path="/ticket" exact={true} Component={Ticket} />
            <PrivateRoute path="/chat" exact={true} Component={Chat} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
