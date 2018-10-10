import * as React from 'react';

import './Chat.scss';
import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';

export default class Chat extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-chat-container mt-5 p-3 pb-5">
                    <TableMenu title="لیست چت" hasSearch={false} removeFilter={true} removeUpdate={true} />
                    {/* <TableMenu title="لیست کاربران" hasSearch={true} />
                    <Table heads={this.trueHeads} rows={this.body} />

                    <div className="container-fluid mt-5">
                        <div className="offset-lg-9 offset-4">
                            <Pagination length={10} route="/users" />              
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}