import { IAdminData, IAdminDataTypes } from '../actions/IAdminData';

export default function AdminData(state = {}, action: IAdminData) {
    switch (action.type) {
        case IAdminDataTypes.changeJWT:
            return changeAdminJWT(state, action);
            
        case IAdminDataTypes.changeAuthStatus:
            return changeAuthStatus(state, action);
    
        default:
            return state;
    }
}

function changeAdminJWT(state: {jwt?: string}, action: IAdminData) {
    return Object.assign(state, {
        jwt: action.jwt
    });
}

function changeAuthStatus(state: {isAuth?: boolean}, action: IAdminData) {
    return Object.assign(state, {
        isAuth: action.isAuth
    });
}