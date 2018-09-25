import * as React from 'react';
import './Header.scss';
import LogoutIcon from './assets/logout-icon.png';
import NotifIcon from './assets/notification-icon.png';
import ProfileDefault from './assets/profile-default.png';

export default class Header extends React.Component {
    public render() {
        return (
            <nav className="container-fluid r-header">
                <div className="container r-header-container">
                    <img src={LogoutIcon} alt="logout" className="r-icon" />
                    <div className="d-inline" >
                        <img src={NotifIcon} alt="notifications" className="r-icon ml-4" />
                        <span className="badge badge-pill badge-danger r-notif-badge">2</span>
                    </div>
                    <div className="d-none d-lg-inline-block">
                        <p className="d-inline mr-3 r-name-profile" >پریناز افراسیابیان</p>
                        <img src={ProfileDefault} alt="profile default" className="r-profile-default" />
                    </div>
                    <p className="float-right text-light font-weight-bold r-title" >پنل ادمین بیتومان</p>
                </div>
            </nav>
        );
    }
}