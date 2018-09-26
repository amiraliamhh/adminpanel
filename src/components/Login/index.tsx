import * as React from 'react';
import './Login.scss';
import UserProfileIcon from './assets/userprofile.png';
import LockIcon from './assets/lock.png';

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
        console.log(this.state);
    }

    public render() {
        return (
            <div className="r-login d-flex justify-content-center align-items-center" >
                <div className="r-login-box p-5" >
                    <h1 className="text-center text-light font-weight-bold mt-5">ورود</h1>
                    <div className="w-100 d-flex flex-column justify-content-center mt-5">
                        <div className="input-group w-50">
                          <input 
                          type="text" 
                          className="form-control r-login-input text-right font-weight-bold text-light" 
                          placeholder="نام کاربری" 
                          onChange={this.usernameInputChange}
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
                    </div>
                </div>
            </div>
        );
    }
}