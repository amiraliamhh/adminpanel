import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import { changeAdminJWT, changeIsAuthStatus, getAuthStatus } from '../../redux/helpers/admin';
import { Store } from 'src/App';

interface IPrivateRouteState {
    isAuth: boolean;
}

export default class PrivateRoute extends React.Component<any, IPrivateRouteState> {
    constructor(props: any) {
        super(props);

        changeIsAuthStatus(true);

        this.state = {
            isAuth: getAuthStatus()
        }

        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    public componentWillMount() {
        this.isAuthenticated();

        Store.subscribe(() => {
            this.setState({
                isAuth: getAuthStatus()
            });
        });
    }

    public isAuthenticated() {
        if (!window.localStorage.getItem('admin_jwt')) {
            changeIsAuthStatus(false);
            return;
        }

        const admin_jwt = window.localStorage.getItem('admin_jwt') as string;
        changeAdminJWT(admin_jwt);

        axios.post('https://bitooman.ir/v1/read-admin', {query: {admin_jwt}})
        .then(({data}) => {
            if (data.responseCode !== 200) {
                changeIsAuthStatus(false);
            }
        })
        .catch((err: any) => {
            changeIsAuthStatus(false);
        })
    }

    public render() {
        const { Component, ...rest } = this.props;

        return (
            <Route {...rest} render={(props: any) => {
                return (this.state.isAuth 
                ? <Component {...props} />
                : <Redirect to='/login' />)
            }} />
        )
    }
}