import { ILoading, ILoadingTypes } from '../actions/ILoading';

export default function Loading(state = {}, action: ILoading) {
    switch (action.type) {
        case ILoadingTypes.changeLoadingStatus:
            return changeLoadingStatus(state, action);    
    
        default:
            return state;
    }
}

function changeLoadingStatus(state: {isLoading?: boolean}, action: ILoading): {isLoading?: boolean} {
    return Object.assign(state, {
        isLoading: action.isLoading
    });
}