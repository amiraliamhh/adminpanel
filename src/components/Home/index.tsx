import * as React from 'react';

import Analytics from '../../ui-components/Analytics';
import QuickAccess from '../../ui-components/QuickAccess';
import './Home.scss';

class Home extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Analytics />
                <QuickAccess />
            </React.Fragment>
        )
    }
} 

export default Home;