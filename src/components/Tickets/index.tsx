import * as React from 'react';

import './Tickets.scss';
import AnswerIcon from './assets/answer-icon.png';
import OkIcon from '../../assets/ok.png';
import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import Table, { IRowData } from '../../ui-components/Table';

export default class Ticket extends React.Component {
    private heads = ['', 'پاسخ داده شده','تاریخ', 'ایمیل', 'نام و نام خانوادگی', 'ردیف'];
    private tbody: IRowData[] = [
        {
            action: () => {console.log('')},
            data: AnswerIcon,
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
            data: 'afra.pari@gmail.com',
            type: 'text',
        },
        {
            data: 'پریناز افراسیابیان',
            type: 'text',
        },
        {
            data: '1',
            type: 'text',
        },
    ]

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-tickets-container mt-5 p-3 pb-5 mb-5">
                    <TableMenu 
                    title="لیست تیکت‌ها" 
                    hasSearch={false}
                    />

                    <Table 
                    heads={this.heads}
                    rows={[this.tbody]}
                    className="text-right"
                    iconWidth="50px"
                    />
                </div>
            </React.Fragment>
        );
    }

    // private genRow(user: IUser, index: number): IRowData[] {
    //     return [
    //         {
    //             action: () => {
    //                 this.props.history.push(`/user?_id=${user._id}`)
    //             },
    //             data: EditIcon,
    //             type: 'image',
    //         },
    //         {
    //             data: user.user_is_approved ? OkIcon : NoIcon,
    //             type: 'image',
    //         },
    //         {
    //             data: OkIcon,
    //             type: 'image',
    //         },
    //         {
    //             data: '1397/5/2',
    //             type: 'text',
    //         },
    //         {
    //             data: user.email,
    //             type: 'text',
    //         },
    //         {
    //             data: user.phone_number,
    //             type: 'text',
    //         },
    //         {
    //             data: user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : '',
    //             type: 'text',
    //         },
    //         {
    //             data: index,
    //             type: 'text',
    //         }
    //     ]
    // }
}