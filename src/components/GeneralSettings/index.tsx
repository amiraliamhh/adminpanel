import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';

export default class GeneralSettings extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div>general settings</div>
            </React.Fragment>
        )
    }
}