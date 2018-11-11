import * as React from 'react';
import axios from 'axios';

import './Login.scss';
import UserProfileIcon from './assets/userprofile.png';
import LockIcon from './assets/lock.png';
import { loginAdmin } from 'src/api/urls';
import { makeFailAlertOn } from 'src/redux/helpers/fail_alert';
import { getAuthStatus, changeIsAuthStatus } from 'src/redux/helpers/admin';

export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            password: '',
            username: ''
        };

        this.usernameInputChange = this.usernameInputChange.bind(this);
        this.passwordInputChange = this.passwordInputChange.bind(this);
        this.sendCredentials = this.sendCredentials.bind(this);
    }

    public usernameInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({username: e.target.value});
    }

    public passwordInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({password: e.target.value});
    }

    public sendCredentials() {
        const query = {
            password: this.state.password,
            username: this.state.username,
        };

        axios.post(loginAdmin, query)
        .then(({data}) => {
            if (data.responseCode === 200) {
                window.localStorage.setItem('admin_jwt', data.data.admin_jwt);
                changeIsAuthStatus(true);
                this.props.history.push('/');
            } else {
                makeFailAlertOn();    
            }
        })
        .catch(err => {
            makeFailAlertOn();
        })

    }

    public componentDidMount() {
        if (getAuthStatus()) {
            this.props.history.push('/');
        }
    }

    public render() {
        return (
            <div className="r-login d-flex justify-content-center align-items-center" >
                <div className="r-login-box p-5" >
                    <h1 className="text-center text-light font-weight-bold mt-5">ورود</h1>
                    <div className="w-100 d-flex flex-column justify-content-center mt-5">
                        <form action="javascript:void(0);" >
                        <div className="input-group w-50">
                          <input 
                          type="text" 
                          className="form-control r-login-input text-right font-weight-bold text-light" 
                          placeholder="نام کاربری" 
                          onChange={this.usernameInputChange}
                          autoComplete="true"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text r-input-icon">
                                <img src={UserProfileIcon}/>
                            </span>
                          </div>
                        </div>

                        <div className="input-group w-50 mt-5 mb-5">
                          <input 
                          type="password" 
                          className="form-control r-login-input text-right font-weight-bold text-light" 
                          placeholder="رمز عبور"  
                          onChange={this.passwordInputChange}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text r-input-icon">
                                <img src={LockIcon}/>
                            </span>
                          </div>
                        </div>

                        <button 
                        className="mt-4 w-50 r-login-btn font-weight-bold" 
                        onClick={this.sendCredentials}
                        >ورود</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}