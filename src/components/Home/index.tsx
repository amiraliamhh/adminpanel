import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import Analytics from '../../ui-components/Analytics';
import QuickAccess from '../../ui-components/QuickAccess';
import './Home.scss';

class Home extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <Analytics />
                <QuickAccess />
            </React.Fragment>
        )
    }
} 

export default Home;