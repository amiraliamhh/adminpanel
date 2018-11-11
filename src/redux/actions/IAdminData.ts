export interface IAdminData {
    isAuth: boolean;
    jwt: string;
    type: string;
}

export const IAdminDataTypes = {
    changeAuthStatus: 'CHANGE_AUTH_STATUS',
    changeJWT: 'CHANGE_ADMIN_JWT',
}