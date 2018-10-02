import * as React from 'react';

import SaveButton from '../../design-system/SaveButton';
import './QuickAccess.scss';

export default class QuickAccess extends React.Component {
    public render() {
        return (
            <React.Fragment>
                {/* Desktop View */}
                <div className="container mt-5 mb-5 r-quick-access-container d-none d-md-block p-4">
                    <div className="w-100 d-flex justify-content-around">
                        <div>
                            <h5 className="text-center mb-3">خرید از کاربر</h5>     
                            <div>
                                <input type="text" className="r-sell-to-customer-input text-center text-danger" value="1234" />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton />
                        </div>
                        <div>
                            <hr className="r-rotated-hr" />
                        </div>
                        <div>
                            <h5 className="text-center mb-3">فروش به کاربر</h5>     
                            <div>
                                <input type="text" className="r-sell-to-customer-input text-center text-success" value="1234" />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton />
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="container mt-5 r-quick-access-container d-md-none p-4">
                    <div className="w-100 d-flex justify-content-around">
                        <div>
                            <h5 className="text-center mb-3">فروش به کاربر</h5>     
                            <div>
                                <input type="text" className="r-sell-to-customer-input text-center text-success" value="1234" />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton />
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5 r-quick-access-container d-md-none p-4">
                    <div className="w-100 d-flex justify-content-around">
                        <div>
                            <h5 className="text-center mb-3">خرید از کاربر</h5>     
                            <div>
                                <input type="text" className="r-sell-to-customer-input text-center text-danger" value="1234" />
                                <p className="d-inline ml-2 r-input-label" dir="rtl" >قیمت دلار:</p>
                            </div>
                            <SaveButton />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}