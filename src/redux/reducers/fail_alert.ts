import { IFailAlert, IFailAlertTypes } from '../actions/IFailAlert';

export default function FailAlert(state = {}, action: IFailAlert) {
    switch (action.type) {
        case IFailAlertTypes.changeFailAlertVisibility:
            return changeFailAlertVisibility(state, action);
    
        default:
            return state;
    }
}

function changeFailAlertVisibility(state: {on?: boolean}, action: IFailAlert) {
    return Object.assign(state, {
        on: action.on
    })
}