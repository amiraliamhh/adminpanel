import * as React from 'react';

import './Order.scss';
import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import Invoice from '../../ui-components/Invoice';
import { IInvoiceMenuProps } from '../../ui-components/InvoiceMenu';

export default class Order extends React.Component {
    private invoiceMenuProps: IInvoiceMenuProps = {
        className: "justify-content-end",
        items: [
            {
                link: 'status',
                name: 'وضعیت'
            },
            {
                link: 'info',
                name: 'مشخصات'
            },
        ]
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-order-container mt-5 p-3 pb-5">
                    <TableMenu title="#huhiwehf983hf3479tfg279gf23f سفارش" hasSearch={false} />
                    <Invoice menu={this.invoiceMenuProps} tds={[{property: 'کارت ملی', value: 'val'},{property: 'کارت ملی', value: 'val'}]} />
                </div>
            </React.Fragment>
        )
    }
}