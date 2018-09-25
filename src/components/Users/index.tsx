import * as React from 'react';

import Table from '../../ui-components/Table';
import './Users.scss';
import FilterIcon from './assets/filter-icon.png';
import RefreshIcon from './assets/refresh-icon.png';

export default class Users extends React.Component {
    private heads = ['ردیف', 'نام و نام‌خانوادگی', 'شماره همراه', 'ایمیل', 'تاریخ', 'وضعیت تکمیل', 'تایید کاربر', ' ']

    public render() {
        return (
            <div className="container r-users-container mt-5 p-3">
                <div className="w-100 r-users-table-menu mb-4">
                    <div className="d-inline-block">
                        <p className="d-inline mr-1" >فیلتر</p>
                        <img className="r-users-table-menu-icon d-inline" src={FilterIcon} alt=""/>
                    </div>

                    <div className="d-inline-block ml-4">
                        <p className="d-inline mr-1">بروزرسانی</p>
                        <img className="r-users-table-menu-icon" src={RefreshIcon} alt=""/>
                    </div>

                    <div className="d-inline-block float-right">
                        <p className="d-inline mr-1 r-users-table-title">لیست کاربران</p>
                        <img className="r-users-table-menu-icon" src={RefreshIcon} alt=""/>
                    </div>
                </div>

                <div className="w-100">
                    <input type="text" className="form-control w-25 float-right mb-5 text-right" dir="rtl" placeholder="جستجو ..." />
                </div>
                <Table heads={this.heads.reverse()} rows={[['1', '2', '3'], ['1', '2', '3']]} />
            </div>
        );
    }
} 