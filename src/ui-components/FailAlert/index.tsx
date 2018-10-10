import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { Store } from '../../App';
import { failAlertIsOn, makeFailAlertOff } from '../../redux/helpers/fail_alert';
import './FailAlert.scss';

interface IFailAlertState {
    on: boolean;
}

export default class FailAlert extends React.Component<{}, IFailAlertState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            on: failAlertIsOn()
        }
    }

    public componentWillMount() {
        Store.subscribe(() => {
            this.setState({
                on: failAlertIsOn()
            })
        })
    }

    public render() {
        return (
            <div className={`w-100 fixed-bottom ${this.state.on ? null : 'd-none'}`}>
                <div className="alert w-25 mr-3 float-right r-success-alert" role="alert">
                    <button 
                    type="button" 
                    className="close ml-4 text-light"
                    data-dismiss="alert" 
                    aria-label="Close"
                    onClick={this.close}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="text-light text-right" >خطا!</h4>
                    <br/>
                    <div>
                        <FontAwesomeIcon 
                        className="float-right text-light" 
                        icon={faExclamationCircle}
                        size="2x" />
                        <h6 className="text-light text-right d-inline-block">مشکلی در اعمال تغییرات به وجود آمد. لطفا دوباره تلاش کنید!</h6>
                    </div>
                </div>
            </div>
        )
    }

    private close() {
        makeFailAlertOff();
    }
}