import { Store } from '../../App';
import { ILoading, ILoadingTypes } from '../actions/ILoading';

export function toggleLoading() {
    Store.dispatch(generateAction(!loadingIsOn()));
}

export function loadingIsOn(): boolean {
    const loading = Store.getState().loadingReducer as ILoading;
    return loading.isLoading;
}

export function loadingOn(): void {
    Store.dispatch(generateAction(true));
}

export function loadingOff(): void {
    Store.dispatch(generateAction(false));
}

function generateAction(isLoading: boolean): ILoading {
    return {
        isLoading,
        type: ILoadingTypes.changeLoadingStatus
    };
}