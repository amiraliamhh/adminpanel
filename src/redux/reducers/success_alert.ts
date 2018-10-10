import { ISuccessAlert, ISuccessAlertTypes } from '../actions/ISuccessAlert';

export default function SuccessAlert(state = {}, action: ISuccessAlert) {
    switch (action.type) {
        case ISuccessAlertTypes.changeSuccessAlertVisibility:
            return changeAlertVisibility(state, action);

        default:
            return state;
    }
}

function changeAlertVisibility(state: {on?: boolean}, action: ISuccessAlert) {
    return Object.assign(state, {
        on: action.on
    });
}