import * as React from 'react';
import axios from 'axios';

import SaveButton from '../../design-system/SaveButton';
import SuccessAlert from '../SuccessAlert';
import { readGeneralSettingsU, updategeneralSettingsU } from '../../api/urls'
import './QuickAccess.scss';

interface IQuickAccessState {
    sell_to_customer_dollar_rate: number;
    buy_from_customer_dollar_rate: number;
    success_alert_visible: boolean;
}

export default class QuickAccess extends React.Component<any, IQuickAccessState> {
    constructor(props: any) {
        super(props);

        this.state = {
            buy_from_customer_dollar_rate: 0,
            sell_to_customer_dollar_rate: 0,
            success_alert_visible: false
        }

        this.handleSellToCustomerChange = this.handleSellToCustomerChange.bind(this);
        this.handleBuyFromCustomerChange = this.handleBuyFromCustomerChange.bind(this);
        this.saveBuyFromCustomer = this.saveBuyFromCustomer.bind(this);
        this.saveSellToCustomer = this.saveSellToCustomer.bind(this);
        this.successAlertCloseHandler = this.successAlertCloseHandler.bind(this);
    }

    public componentWillMount() {
        axios.post(readGeneralSettingsU, {})
        .then((generalSettings: any) => {
            this.setState({
                buy_from_customer_dollar_rate: generalSettings.data.sell_dollar_rate,
                sell_to_customer_dollar_rate: generalSettings.data.buy_dollar_rate
            });
        })
        .catch(console.error);
    }

    public render() {
        return (
            <React.Fragment>
                {/* Desktop View */}
                <div className="container mt-5 mb-5 r-quick-access-container d-none d-md-block p-4">
                    <div className="w-100 d-flex justify-content-around">
                        <div>
                            <h5 className="text-center mb-3">خرید از کاربر</h5>     
                            <div>
                                <input 
                                type="text" 
                                className="r-sell-to-customer-input text-center text-danger" 
                                value={this.state.buy_from_customer_dollar_rate}
                                onChange={this.handleBuyFromCustomerChange} />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton onClick={this.saveBuyFromCustomer} />
                        </div>
                        <div>
                            <hr className="r-rotated-hr" />
                        </div>
                        <div>
                            <h5 className="text-center mb-3">فروش به کاربر</h5>     
                            <div>
                                <input 
                                type="text" 
                                className="r-sell-to-customer-input text-center text-success" 
                                value={this.state.sell_to_customer_dollar_rate}
                                onChange={this.handleSellToCustomerChange} />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton onClick={this.saveSellToCustomer} />
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="container mt-5 r-quick-access-container d-md-none p-4">
                    <div className="w-100 d-flex justify-content-around">
                        <div>
                            <h5 className="text-center mb-3">فروش به کاربر</h5>     
                            <div>
                                <input 
                                type="text" 
                                className="r-sell-to-customer-input text-center text-success" 
                                value={this.state.sell_to_customer_dollar_rate}
                                onChange={this.handleSellToCustomerChange} />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton onClick={this.saveSellToCustomer} />
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5 r-quick-access-container d-md-none p-4">
                    <div className="w-100 d-flex justify-content-around">
                        <div>
                            <h5 className="text-center mb-3">خرید از کاربر</h5>     
                            <div>
                                <input 
                                type="text" 
                                className="r-sell-to-customer-input text-center text-danger" 
                                value={this.state.buy_from_customer_dollar_rate}
                                onChange={this.handleBuyFromCustomerChange} />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton onClick={this.saveBuyFromCustomer} />
                        </div>
                    </div>
                </div>

                <SuccessAlert 
                visible={this.state.success_alert_visible}
                closeHandler={this.successAlertCloseHandler} />
            </React.Fragment>
        );
    }

    private handleSellToCustomerChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            sell_to_customer_dollar_rate: parseInt(e.target.value, 0)
        })
    }

    private handleBuyFromCustomerChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            buy_from_customer_dollar_rate: parseInt(e.target.value, 0)
        })        
    }

    private saveSellToCustomer() {
        axios.post(updategeneralSettingsU, {
            buy_dollar_rate: this.state.sell_to_customer_dollar_rate
        })
        .then((response: any) => {
            this.setState({
                success_alert_visible: true
            });
        })
        .catch(console.error);
    }

    private saveBuyFromCustomer() {
        axios.post(updategeneralSettingsU, {
            sell_dollar_rate: this.state.buy_from_customer_dollar_rate
        })
        .then((response: any) => {
            this.setState({
                success_alert_visible: true
            });
        })
        .catch(console.error);
    }

    private successAlertCloseHandler() {
        this.setState({
            success_alert_visible: false
        });
    }
}