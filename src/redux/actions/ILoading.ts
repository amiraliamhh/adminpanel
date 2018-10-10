export interface ILoading {
    isLoading: boolean;
    type: string;
}

export interface ILoadingState {
    Loading: object;
}

export const ILoadingTypes = {
    changeLoadingStatus: 'CHANGE_LOADING_STATUS'
}