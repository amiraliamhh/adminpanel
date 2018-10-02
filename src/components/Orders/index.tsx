import * as React from 'react';

import './Orders.scss';
import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import Table, { IRowData } from '../../ui-components/Table';
import Pagination from '../../ui-components/Pagination';

export default class Orders extends React.Component {
    private heads = ['ردیف', 'ID', 'تاریخ سفارش', 'نام و نام‌خانوادگی', 'نوع سفارش', 'نوع رمزارز', 'مبلغ به تومان', 'وضعیت', '']
    private trueHeads = this.heads.reverse();
    private body: IRowData[][] = [[
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        },
        {
            data: '1',
            type: 'text'
        }
    ]]

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-users-container mt-5 p-3 pb-5">
                    <TableMenu title="لیست سفارشات" hasSearch={true} />
                    <Table heads={this.trueHeads} rows={this.body} />

                    <div className="container-fluid mt-5">
                        <div className="offset-lg-9 offset-4">
                            <Pagination length={10} route="/users" />              
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}