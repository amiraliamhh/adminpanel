import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import './Home.scss';

class Home extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
            </React.Fragment>
        )
    }
} 

export default Home;