import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import Table, { IRowData } from '../../ui-components/Table';
import Pagination from '../../ui-components/Pagination';
import './Users.scss';
import TableMenu from '../../ui-components/TableMenu';
import EditIcon from './assets/edit-icon.png';
import OkIcon from './assets/ok.png';
import NoIcon from './assets/no.png';

export default class Users extends React.Component {
    private heads = ['ردیف', 'نام و نام‌خانوادگی', 'شماره همراه', 'ایمیل', 'تاریخ', 'وضعیت تکمیل', 'تایید کاربر', ' ']
    private trueHeads = this.heads.reverse();
    
    private body:IRowData[][] = [
        [
            {
                action: (e) => {console.log()},
                data: EditIcon,
                type: 'image',
            },
            {
                data: NoIcon,
                type: 'image',
            },
            {
                data: OkIcon,
                type: 'image',
            },
            {
                data: '1397/5/2',
                type: 'text',
            },
            {
                data: 'amiraliamhh@gmail.com',
                type: 'text',
            },
            {
                data: '09190912275',
                type: 'text',
            },
            {
                data: 'امیرعلی عامری',
                type: 'text',
            },
            {
                data: '1',
                type: 'text',
            }
        ]
    ]

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-users-container mt-5 p-3 pb-5">
                    <TableMenu title="لیست کاربران" hasSearch={true} />
                    <Table heads={this.trueHeads} rows={this.body} />

                    <div className="container-fluid mt-5">
                        <div className="offset-lg-9 offset-4">
                            <Pagination length={10} route="/users" />              
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
} 