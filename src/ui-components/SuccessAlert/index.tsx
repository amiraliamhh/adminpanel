import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Store } from '../../App';
import { successAlertIsOn, makeSuccessAlertOff } from '../../redux/helpers/success_alert';
import './SuccessAlert.scss';

interface ISuccessAlertProps {
    visible?: boolean;
    closeHandler?: () => void;
}

interface ISuccessAlertState {
    on: boolean;
}

export default class SuccessAlert extends React.Component<ISuccessAlertProps, ISuccessAlertState> {
    constructor(props: ISuccessAlertProps) {
        super(props);

        this.state = {
            on: successAlertIsOn()
        }
    }

    public componentWillMount() {
        Store.subscribe(() => {
            this.setState({
                on: successAlertIsOn()
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
                    <h4 className="text-light text-right" >موفقیت!</h4>
                    <br/>
                    <div>
                        <FontAwesomeIcon 
                        className="float-right text-light" 
                        icon={faCheckCircle}
                        size="2x" />
                        <h6 className="text-light text-right d-inline-block">تغییرات مورد نظر با موفقیت اعمال شد!</h6>
                    </div>
                </div>
            </div>
        );
    }

    private close() {
        makeSuccessAlertOff();
    }
}