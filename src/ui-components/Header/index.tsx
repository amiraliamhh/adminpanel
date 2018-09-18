import * as React from 'react';
import './Header.scss';
import logoutIcon from './logout-icon.png';
import notifIcon from './notification-icon.png';

export default class Header extends React.Component {
    public render() {
        return (
            <nav className="container-fluid r-header">
                <div className="container r-header-container">
                    <img src={logoutIcon} alt="logout" className="r-icon" />
                    <img src={notifIcon} alt="notifications" className="r-icon ml-3" />
                    <div className="d-md-none d-inline-block" >
                        Hello!
                    </div>
                    <p className="float-right text-light font-weight-bold r-title" >پنل ادمین بیتومان</p>
                </div>
            </nav>
        );
    }
}