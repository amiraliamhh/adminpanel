import * as React from 'react';

import { Store } from '../../App';
import './Loading.scss';

interface ILoadingProps {
    className?: string;
}

interface ILoadingState {
    isLoading: boolean;
}

export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
    constructor(props: ILoadingProps) {
        super(props);

        this.state = {
            isLoading: this.loadingStatus()
        };
    }

    public componentWillMount() {
        Store.subscribe(() => {
            this.setState({
                isLoading: this.loadingStatus()
            });
        });
    }

    public render() {
        return (
            <div className={`loadingSite ${this.props.className} ${this.state.isLoading ? null : 'd-none'}`}>
                <div className="overlay">
                    <div className="loading">
                        <div className="circle1" />
                        <div className="circle2" />
                    </div>
                </div>
            </div>
        );
    }

    private loadingStatus(): boolean {
        const isLoadingState = Store.getState().loadingReducer as {isLoading: boolean};

        return isLoadingState.isLoading;
    }
}