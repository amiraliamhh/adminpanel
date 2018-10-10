import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import Analytics from '../../ui-components/Analytics';
import QuickAccess from '../../ui-components/QuickAccess';
import Loading from '../../components/Loading';
import './Home.scss';

export default class Home extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Loading />
                <Header />
                <Menu />
                <Analytics />
                <QuickAccess />
            </React.Fragment>
        )
    }
}