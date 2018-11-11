import { Store } from '../../App';
import { IAdminData, IAdminDataTypes } from '../actions/IAdminData';

export function changeAdminJWT(jwt: string) {
    Store.dispatch(generateChangeJWTAction(jwt));
}

export function changeIsAuthStatus(isAuth: boolean) {
    Store.dispatch(generateChangeAuthStatusAction(isAuth));
}

export function getAdminJWT(): string {
    const adminState = Store.getState().adminReducer as IAdminData;
    return adminState.jwt;
}

export function getAuthStatus(): boolean {
    const adminState = Store.getState().adminReducer as IAdminData;
    return adminState.isAuth;
}

function generateChangeJWTAction(jwt: string) {
    return {
        jwt,
        type: IAdminDataTypes.changeJWT
    };
}

function generateChangeAuthStatusAction(isAuth: boolean) {
    return {
        isAuth,
        type: IAdminDataTypes.changeAuthStatus
    };
}