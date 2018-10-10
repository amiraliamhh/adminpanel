import * as React from 'react';
import axios from 'axios';

import './GeneralSettings.scss';
import {
    loadingOn,
    loadingOff
} from '../../redux/helpers/index';
import { readGeneralSettingsU, updategeneralSettingsU } from '../../api/urls';
import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import { IInvoiceMenuProps } from '../../ui-components/InvoiceMenu';
import Invoice, { IInvoiceTd } from '../../ui-components/Invoice';
import DropDown from '../../design-system/DropDown';
import Input from '../../design-system/Input';
import SaveButton from '../../design-system/SaveButton';
import { makeSuccessAlertOn } from '../../redux/helpers/success_alert';
import { makeFailAlertOn } from '../../redux/helpers/fail_alert';

interface IGeneralSettingsState {
    success_alert_visible: boolean;
}

export default class GeneralSettings extends React.Component<any, IGeneralSettingsState> {
    public sellToCustomerDollarRateRef: any;
    public buyFromCustomerDollarRateRef: any;

    private invoiceMenuPropsSellToUser: IInvoiceMenuProps = {
        className: "justify-content-end border-0 r-invoice-menu-gs",
        items: [
            {
                link: '#',
                name: 'فروش به کاربر',
            }
        ]
    };
    private invoiceMenuPropsBuyFromUser: IInvoiceMenuProps = {
        className: "justify-content-end border-0 r-invoice-menu-gs",
        items: [
            {
                link: '#',
                name: 'خرید از کاربر',
            }
        ]
    };
    private sellToUserTds: IInvoiceTd[];
    private buyFromUserTds: IInvoiceTd[];

    constructor(props: any) {
        super(props);

        this.state = {
            success_alert_visible: false
        }

        this.sellToCustomerDollarRateRef = React.createRef();
        this.buyFromCustomerDollarRateRef = React.createRef();
        this.changeSellToCustomerDollarRateRef = this.changeSellToCustomerDollarRateRef.bind(this);
        this.changeBuyFromCustomerDollarRateRef = this.changeBuyFromCustomerDollarRateRef.bind(this);
        this.changeSellToCustomerDollarRateRefHandler = this.changeSellToCustomerDollarRateRefHandler.bind(this);
        this.changeBuyFromCustomerDollarRateRefHandler = this.changeBuyFromCustomerDollarRateRefHandler.bind(this);
        this.saveGeneralSettings = this.saveGeneralSettings.bind(this);
    }

    public componentWillMount() {
        loadingOn();
        this.sellToUserTds = [
            {
                property: 'نحوه گرفتن دلار',
                value: <DropDown options={['دستی', 'اتوماتیک', 'یکتا']} />
            },
            {
                property: 'قیمت دلار',
                value: (<Input 
                    ref={this.sellToCustomerDollarRateRef} 
                    onChange={this.changeSellToCustomerDollarRateRefHandler} 
                    className="w-25" />)
            }
        ];

        this.buyFromUserTds = [
            {
                property: 'نحوه گرفتن دلار',
                value: <DropDown options={['دستی', 'اتوماتیک', 'یکتا']} />
            },
            {
                property: 'قیمت دلار',
                value: (<Input 
                    ref={this.buyFromCustomerDollarRateRef} 
                    onChange={this.changeBuyFromCustomerDollarRateRefHandler}
                    className="w-25" />)
            }
        ];

        axios.post(readGeneralSettingsU, {})
        .then((generalSettings: any) => {
            this.changeBuyFromCustomerDollarRateRef(generalSettings.data.sell_dollar_rate);
            this.changeSellToCustomerDollarRateRef(generalSettings.data.buy_dollar_rate);
            loadingOff();
        })
        .catch(console.error);
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-gs-container mt-5 p-3 pb-5 mb-5">
                    <TableMenu 
                    title="تنظیمات" 
                    hasSearch={false} 
                    removeFilter={true} 
                    removeUpdate={true} />

                    <Invoice 
                    menu={this.invoiceMenuPropsSellToUser} 
                    tds={this.sellToUserTds} />

                    <Invoice 
                    menu={this.invoiceMenuPropsBuyFromUser} 
                    tds={this.buyFromUserTds} />
                    
                    <div className="w-100 text-right">
                        <SaveButton onClick={this.saveGeneralSettings} className="mr-3" />
                    </div>
                </div>
            </React.Fragment>
        )
    }

    private changeSellToCustomerDollarRateRef(rate: number): void {
        this.sellToCustomerDollarRateRef.current.setState({
            currentVal: rate
        });
    }

    private changeBuyFromCustomerDollarRateRef(rate: number): void {
        this.buyFromCustomerDollarRateRef.current.setState({
            currentVal: rate
        });
    }

    private changeSellToCustomerDollarRateRefHandler(e: React.ChangeEvent<HTMLInputElement>) {
        this.changeSellToCustomerDollarRateRef(parseInt(e.target.value, 0));
    }

    private changeBuyFromCustomerDollarRateRefHandler(e: React.ChangeEvent<HTMLInputElement>) {
        this.changeBuyFromCustomerDollarRateRef(parseInt(e.target.value, 0));
    }

    private saveGeneralSettings() {
        loadingOn();
        axios.post(updategeneralSettingsU, {
            buy_dollar_rate: this.sellToCustomerDollarRateRef.current.state.currentVal,
            sell_dollar_rate: this.buyFromCustomerDollarRateRef.current.state.currentVal
        })
        .then((response: any) => {
            loadingOff();
            
            if (response.data.responseCode === 200) {
                makeSuccessAlertOn()
            } else {
                makeFailAlertOn()
            }
            
        })
        .catch(console.error);
    }
}