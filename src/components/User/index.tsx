import * as React from 'react';
import * as queryString from 'query-string';
import axios from 'axios';

import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';
import Invoice, { IInvoiceTd } from '../../ui-components/Invoice';
import { IInvoiceMenuProps } from '../../ui-components/InvoiceMenu';
import { IUser } from '../../interfaces/user';
import { readUserU } from '../../api/urls';
import './User.scss';
import { loadingOn, loadingOff } from '../../redux/helpers';

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6IjViODRiZTUxYWQxNDQ2NjI0YTQxYzM1ZSIsImlhdCI6MTUzODU1NzkzNX0.nBaqYccqT52nsiG6VBcr7KVEbMpXp-TorQijQCyvN9A';

interface ITdsData {
    property: string;
    prop_fa: string;
}

interface IUserState {
    current_tab: string;
    invoiceTds: IInvoiceTd[];
}

export default class User extends React.Component<any, IUserState> {
    private user: IUser;
    private invoiceMenuArr = [
        'id-verification',
        'wallets',
        'bank-info',
        'contact-info',
        'personal-info'
    ];

    private invoiceMenuProps: IInvoiceMenuProps = {
        className: "mb-2 justify-content-between",
        items: [
            {
                link: this.genLink('id-verification'),
                name: 'تایید هویت'
            },
            {
                link: this.genLink('wallets'),
                name: 'کیف پول'
            },
            {
                link: this.genLink('bank-info'),
                name: 'اطلاعات بانکی'
            },
            {
                link: this.genLink('contact-info'),
                name: 'اطلاعات تماس',
            },
            {
                link: this.genLink('personal-info'),
                name: 'اطلاعات شخصی',
            },
        ],
        selectedIndex: this.invoiceMenuArr.indexOf(this.currentTab())
    }

    private readonly tabsProps = {
        "bank-info": [
            {
                prop_fa: 'شماره حساب',
                property: 'account_number'
            },
            {
                prop_fa: 'شماره کارت',
                property: 'credit_card_number'
            },
            {
                prop_fa: 'شماره شبا',
                property: 'shaba'
            }
        ],
        "contact-info": [
            {
                prop_fa: 'شماره همراه',
                property: 'phone_number'
            },
            {
                prop_fa: 'ایمیل',
                property: 'email'
            },
        ],
        "id-verification": [
            {
                prop_fa: 'کد ملی',
                property: 'national_code'
            },
        ],
        "personal-info": [
            {
                prop_fa: 'کد ملی',
                property: 'national_code'
            },
            {
                prop_fa: 'نام',
                property: 'first_name'
            },
            {
                prop_fa: 'نام خانوادگی',
                property: 'last_name'
            }
        ],
        "wallets": [
            {
                prop_fa: 'رمزارز',
                property: 'wallet_crypto'
            },
            {
                prop_fa: 'نام کیف پول',
                property: 'wallet_name'
            },
            {
                prop_fa: 'آدرس کیف پول',
                property: 'wallet_address'
            },
        ]
    }

    constructor(props: any) {
        super(props);

        this.state = {
            current_tab: this.currentTab(),
            invoiceTds: [],
        };

        this.getUser = this.getUser.bind(this);
        this.genTabs = this.genTabs.bind(this);
    }

    public componentDidUpdate() {
        if (this.tabHasChanged()) {
            this.setState({
                current_tab: this.currentTab(),
            }, () => {
                if (this.state.current_tab === 'bank-info') {
                    this.genArrayedTabs(this.tabsProps[this.state.current_tab], this.user.bank_accounts);
    
                } else if (this.state.current_tab === 'wallets') {
                    this.genArrayedTabs(this.tabsProps[this.state.current_tab], this.user.wallets);
    
                } else {
                    this.genTabs(this.tabsProps[this.state.current_tab])
                }
            });
        }
    }

    public componentWillMount() {
        loadingOn();
        this.getUser()
        .then(() => {
            if (this.state.current_tab === 'bank-info') {
                this.genArrayedTabs(this.tabsProps[this.state.current_tab], this.user.bank_accounts);

            } else if (this.state.current_tab === 'wallets') {
                this.genArrayedTabs(this.tabsProps[this.state.current_tab], this.user.wallets);

            } else {
                this.genTabs(this.tabsProps[this.state.current_tab])
            }

            loadingOff();
        })
        .catch(console.error);
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-user-container mt-5 p-3 pb-5">
                    <TableMenu title="ویرایش کاربر" hasSearch={false} />
                    <Invoice menu={this.invoiceMenuProps} tds={this.state.invoiceTds} />
                </div>
            </React.Fragment>
        )
    }

    private getUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            const userId = queryString.parse(window.location.search)._id;
            const query = {
                query: {
                    _id: userId,
                    admin_jwt: jwt
                }
            };
            axios.post(readUserU, query)
            .then((res: any) => {
                this.user = res.data.data as IUser;
                console.log(this.user)
                resolve(this.user);
            })
            .catch(e => reject(e));
        })
    }

    private genTabs(props: ITdsData[]) {
         const tdsData: IInvoiceTd[] = [];
         for (const prop of props) {
             tdsData.push({
                 property: prop.prop_fa,
                 value: this.user[prop.property]
             });
         }

         this.setState({
             invoiceTds: tdsData
         });
    }

    private genArrayedTabs(props: ITdsData[], item: any[]|undefined) {
        const tdsData: IInvoiceTd[] = [];
        if (item) {
            for (let i = 0; i < item.length; i++) {
                tdsData.push({
                    property: 'شماره',
                    value: (i + 1).toString()
                });
                for (const prop of props) {
                    if (props.indexOf(prop) === (props.length - 1)) {
                        tdsData.push({
                            endOfArr: true,
                            property: prop.prop_fa,
                            value: item[i][prop.property] || ' '
                        });
                    } else {
                        tdsData.push({
                            property: prop.prop_fa,
                            value: item[i][prop.property] || ' '
                        });
                    }
                }
            }
        }

        this.setState({
            invoiceTds: tdsData
        });
    }

    private currentTab(): string {
        if (queryString.parse(window.location.search).page) {
            return queryString.parse(window.location.search).page;
        } else {
            return 'personal-info';
        }
    }

    private tabHasChanged(): boolean {
        if (this.state.current_tab === this.currentTab()) {
            return false;
        } else {
            return true;
        }
    }

    private genLink(link: string): string {
        return `${window.location.pathname}?_id=${queryString.parse(window.location.search)._id}&page=${link}`;
    }
}