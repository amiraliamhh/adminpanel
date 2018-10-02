import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import Invoice from '../../ui-components/Invoice';
import { IInvoiceMenuProps } from '../../ui-components/InvoiceMenu';
import './User.scss';

export default class User extends React.Component {
    private invoiceMenuProps: IInvoiceMenuProps = {
        className: "mb-2 justify-content-between",
        items: [
            {
                link: 'id-verification',
                name: 'تایید هویت'
            },
            {
                link: 'wallets',
                name: 'کیف پول'
            },
            {
                link: 'bank-info',
                name: 'اطلاعات بانکی'
            },
            {
                link: 'contact-info',
                name: 'اطلاعات تماس',
            },
            {
                link: 'personal-info',
                name: 'اطلاعات شخصی',
            },
        ]
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-user-container mt-5 p-3 pb-5">
                    <TableMenu title="ویرایش کاربر" hasSearch={false} />
                    <Invoice menu={this.invoiceMenuProps} tds={[{property: 'کارت ملی', value: 'val'},{property: 'کارت ملی', value: 'val'}]} />
                </div>
            </React.Fragment>
        )
    }
}