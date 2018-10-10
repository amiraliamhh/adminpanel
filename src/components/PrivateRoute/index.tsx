import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public isAuthenticated() {
        return true;
    }

    public render() {
        const { Component, ...rest } = this.props;

        return (
            <Route {...rest} render={(props: any) => {
                return (this.isAuthenticated() === true 
                ? <Component {...props} />
                : <Redirect to='/login' />)
            }} />
        )
    }
}