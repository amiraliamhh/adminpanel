import * as React from 'react';
import { NavLink } from 'react-router-dom';

import DashboardIcon from './assets/dashboard.png';
import UsersIcon from './assets/user.png';
import OrdersIcon from './assets/order.png';
import SalesSettingsIcon from './assets/sales-settings.png';
import BuySettingsIcon from './assets/buy-settings.png';
import SettingsIcon from './assets/settings.png';
import TicketIcon from './assets/ticket.png';
import ChatIcon from './assets/chat-online.png';
import ProfileDefaultIcon from './assets/profile-default.png';
import MenuIcon from './assets/menu.png';
import './Menu.scss';

interface IMenuItem {
    icon: any;
    title: string;
    link: string;
}

export default class Menu extends React.Component {
    public menuItems: IMenuItem[] = [
        {
            icon: DashboardIcon,
            link: '/',
            title: 'داشبورد',
        },
        {
            icon: UsersIcon,
            link: '/users',
            title: 'کاربران',
        },
        {
            icon: OrdersIcon,
            link: '/orders',
            title: 'سفارش‌ها',
        },
        {
            icon: SalesSettingsIcon,
            link: '/sell-to-user-settings',
            title: 'تنظیمات فروش به کاربر',
        },
        {
            icon: BuySettingsIcon,
            link: '/buy-from-user-settings',
            title: 'تنظیمات خرید از کاربر',
        },
        {
            icon: SettingsIcon,
            link: '/general-settings',
            title: 'تنظیمات',
        },
        {
            icon: TicketIcon,
            link: '/',
            title: 'تیکت',
        },
        {
            icon: ChatIcon,
            link: '/',
            title: 'چت آنلاین',
        }
    ];

    public render() {
        return (
            <React.Fragment>
                <div className="container-fluid mt-1 r-container">
                    <div className="container">
                        <div className="r-navbar-menu w-100 flex-row-reverse justify-content-between d-none d-lg-inline-flex">
                            {this.getMenu(this.menuItems)}
                        </div>

                        <div className="d-lg-none w-100 d-flex justify-content-between" >
                            <div className="d-inline-block mt-1 mb-1">
                                <p className="d-inline mr-3 r-name-profile-mobile font-weight-bold" >پریناز افراسیابیان</p>
                                <img src={ProfileDefaultIcon} alt="profile default" className="r-profile-default-mobile" />
                            </div>

                            <img src={MenuIcon} alt="" className="r-menu-icon-mobile mt-1 mb-1 float-right" />
                        </div>
                    </div>
                </div>
                <div className="w-100 position-absolute d-lg-none r-menu-mobile">
                    <div className="r-menu-mobile-item-list float-right">
                        {/* <div className="d-flex justify-content-center align-items-center" >
                            <p className="d-inline mt-3 mr-3" >داشبورد</p>
                            <img src={DashboardIcon} className="r-menu-items-icon-mobile" alt=""/>
                        </div> */}
                        {this.getMobileMenu(this.menuItems)}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    private getMenu(menuItems: IMenuItem[]) {
        return menuItems.map((item, index) => {
            return (
                <NavLink to={item.link} key={index} className="mt-3 mb-3 r-link"  >
                    <p className="d-inline font-weight-bold r-menu-item-title" >{item.title}</p>
                    <img src={item.icon} alt="" className="ml-2 r-menu-icon" />
                </NavLink>
            )
        });
    }

    private getMobileMenu(menuItems: IMenuItem[]) {
        return menuItems.map((item, index) => (
            <NavLink to={item.link} className="d-flex pr-4 justify-content-end align-items-center" key={index} >
                <p className="d-inline mt-3 mr-3 text-dark" >{item.title}</p>
                <img src={item.icon} className="r-menu-items-icon-mobile"/>
            </NavLink>
        ))
    }
}