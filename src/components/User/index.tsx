import * as React from 'react';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import './User.scss';

export default class User extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-user-container mt-5 p-3 pb-5">
                    <TableMenu title="ویرایش کاربر" hasSearch={false} />
                </div>
            </React.Fragment>
        )
    }
}