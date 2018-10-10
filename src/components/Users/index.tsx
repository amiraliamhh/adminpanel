import * as React from 'react';
import axios from 'axios';
import * as queryString from 'query-string';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import Table, { IRowData } from '../../ui-components/Table';
import Pagination from '../../ui-components/Pagination';
import { readUsersU } from '../../api/urls';
import { IUser } from '../../interfaces/user';
import './Users.scss';
import TableMenu from '../../ui-components/TableMenu';
import EditIcon from './assets/edit-icon.png';
import OkIcon from './assets/ok.png';
import NoIcon from './assets/no.png';
import { loadingOn, loadingOff } from '../../redux/helpers/index';

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6IjViODRiZTUxYWQxNDQ2NjI0YTQxYzM1ZSIsImlhdCI6MTUzODU1NzkzNX0.nBaqYccqT52nsiG6VBcr7KVEbMpXp-TorQijQCyvN9A';

interface IUsersState {
    tableBody: any;
}

export default class Users extends React.Component<any, IUsersState> {
    private heads = ['ردیف', 'نام و نام‌خانوادگی', 'شماره همراه', 'ایمیل', 'تاریخ', 'وضعیت تکمیل', 'تایید کاربر', ' ']
    private trueHeads = this.heads.reverse();
    private page: number;

    constructor(props: any) {
        super(props);

        this.state = {
            tableBody: []
        };

        this.getCurrentPage = this.getCurrentPage.bind(this);
        this.fetchData = this.fetchData.bind(this);
        
        this.getCurrentPage();
    }

    public componentDidUpdate() {
        if (this.pageChanged()) {
            this.getCurrentPage();
            this.fetchData();
        }
    }

    public componentWillMount() {
        this.fetchData();
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-users-container mt-5 p-3 pb-5 mb-5">
                    <TableMenu 
                    title="لیست کاربران" 
                    hasSearch={true} 
                    updateAction={this.fetchData}
                    />
                    <Table heads={this.trueHeads} rows={this.state.tableBody} />

                    <div className="container-fluid mt-5">
                        <div className="offset-lg-9 offset-4">
                            <Pagination length={10} route="/users" />              
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    private genQuery(query_items: object, page: number) {
        return {
            query: {
                admin_jwt: jwt,
                item_count: 10,
                skip_items: (page - 1) * 10,
                ...query_items
            }
        };
    }

    private genRow(user: IUser, index: number): IRowData[] {
        return [
            {
                action: () => {
                    this.props.history.push(`/user?_id=${user._id}`)
                },
                data: EditIcon,
                type: 'image',
            },
            {
                data: user.user_is_approved ? OkIcon : NoIcon,
                type: 'image',
            },
            {
                data: OkIcon,
                type: 'image',
            },
            {
                data: '1397/5/2',
                type: 'text',
            },
            {
                data: user.email,
                type: 'text',
            },
            {
                data: user.phone_number,
                type: 'text',
            },
            {
                data: user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : '',
                type: 'text',
            },
            {
                data: index,
                type: 'text',
            }
        ]
    }

    private genRows(users: IUser[]): IRowData[][] {
        return users.map((user: IUser, index: number) => this.genRow(user, index + 1));
    }

    private getCurrentPage(): void {
        if (queryString.parse(window.location.search).page) {
            this.page = parseInt(queryString.parse(window.location.search).page, 0);
        } else {
            this.page = 1;
        }
    }

    private pageChanged(): boolean {
        const savedPage: number = this.page;
        let currentPage: number;
        if (queryString.parse(window.location.search).page) {
            currentPage = parseInt(queryString.parse(window.location.search).page, 0);
        } else {
            currentPage = 1;
        }

        if (savedPage === currentPage) {
            return false;
        } else {
            return true;
        }
    }

    private fetchData(): void {
        loadingOn();
        axios.post(readUsersU, this.genQuery({select: 'email phone_number first_name last_name'}, this.page))
        .then((response: any) => {
             const users: IUser[] = response.data.data;
             this.setState({
                 tableBody: this.genRows(users)
             });

             loadingOff();
        })
        .catch(console.error);
    }
} 