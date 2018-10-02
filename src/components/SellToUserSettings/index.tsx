import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import Table, { IRowData } from '../../ui-components/Table';
import TableMenu from '../../ui-components/TableMenu';
import Pagination from '../../ui-components/Pagination';
import './SellToUserSettings.scss';
import EditIcon from './assets/edit-icon.png';
import OkIcon from './assets/ok.png';

export default class SellToUsersSettings extends React.Component {
    private heads = ['ردیف', 'نوع رمزارز', 'نحوه گرفتن قیمت دلار', 'قابل فروش', '']
    private trueHeads = this.heads.reverse();
    
    private body:IRowData[][] = [
        [
            {
                action: (e) => {console.log()},
                data: EditIcon,
                type: 'image',
            },
            {
                data: OkIcon,
                type: 'image',
            },
            {
                data: 'دستی',
                type: 'text',
            },
            {
                data: '1397/5/2',
                type: 'text',
            },
            {
                data: 'amiraliamhh@gmail.com',
                type: 'text',
            },
        ]
    ]

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-users-container mt-5 p-3 pb-5">
                    <TableMenu title="لیست تنظیمات فروش به کاربر" hasSearch={true} />
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