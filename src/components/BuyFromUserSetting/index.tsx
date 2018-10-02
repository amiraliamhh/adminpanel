import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import Invoice, { IInvoiceTd } from '../../ui-components/Invoice';
import { IInvoiceMenuProps } from '../../ui-components/InvoiceMenu';
import RabCheckbox from '../../design-system/Checkbox';
import SaveButton from '../../design-system/SaveButton';
import DropDown from '../../design-system/DropDown';

interface IRabCheckboxState {
    checked: boolean;
}

export default class BuyFromUserSetting extends React.Component<any, IRabCheckboxState> {
    public chb: any;
    private invoiceMenuProps: IInvoiceMenuProps = {
        className: "border-0",
        items: []
    }

    private dropdown = [
        'دستی',
        'اتوماتیک',
        'یکتا'
    ]

    private tds: IInvoiceTd[];

    constructor(props: any) {
        super(props);

        this.state = {
            checked: true
        };

        this.chb = React.createRef();

        this.changeHandlerasd = this.changeHandlerasd.bind(this);

        this.tds = [
            {
                property: 'نوع رمزارز',
                value: 'BTC'
            },
            {
                property: 'قابل خرید',
                value: <RabCheckbox ref={this.chb} changeHandler={this.changeHandlerasd} currentValue={false} />
            },
            {
                property: 'نرخ دلار',
                value: <input type="text"/>
            },
            {
                property: 'نحوه گرفتن دلار',
                value: <DropDown options={this.dropdown} />
            }
        ];
    }

    public changeHandlerasd(e: React.ChangeEvent<HTMLElement>) {
        this.setState({
            checked: !this.state.checked
        });

        this.chb.current._toggleChecked();

    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-user-container mt-5 p-3 pb-5">
                    <TableMenu title="ویرایش کاربر" hasSearch={false} />
                    <Invoice menu={this.invoiceMenuProps} tds={this.tds} />
                    <div className="w-100 text-right">
                        <SaveButton className="mr-3" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}