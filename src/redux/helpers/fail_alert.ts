import { Store } from '../../App';
import { IFailAlert, IFailAlertTypes } from '../actions/IFailAlert';

export function toggleFailAlert() {
    Store.dispatch(generateAction(!failAlertIsOn()));
}

export function makeFailAlertOn() {
    Store.dispatch(generateAction(true));
}

export function makeFailAlertOff() {
    Store.dispatch(generateAction(false));
}

export function failAlertIsOn(): boolean {
    const alert = Store.getState().failAlertReducer as IFailAlert;
    return alert.on;
}

function generateAction(on: boolean): IFailAlert {
    return {
        on,
        type: IFailAlertTypes.changeFailAlertVisibility
    }
}