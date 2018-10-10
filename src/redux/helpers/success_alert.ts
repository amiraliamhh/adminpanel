import { Store } from '../../App';
import { ISuccessAlert, ISuccessAlertTypes } from '../actions/ISuccessAlert';

export function toggleSuccessAlert() {
    Store.dispatch(generateAction(!successAlertIsOn()));
}

export function makeSuccessAlertOn() {
    Store.dispatch(generateAction(true));
}

export function makeSuccessAlertOff() {
    Store.dispatch(generateAction(false));
}

export function successAlertIsOn(): boolean {
    const alert = Store.getState().successAlertReducer as ISuccessAlert;
    return alert.on;
}

function generateAction(on: boolean): ISuccessAlert {
    return {
        on,
        type: ISuccessAlertTypes.changeSuccessAlertVisibility,
    };
}