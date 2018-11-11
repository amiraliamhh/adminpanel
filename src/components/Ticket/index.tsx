import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import './Ticket.scss';
import Header from '../../ui-components/Header';
import Menu from '../../ui-components/Menu';
import TableMenu from '../../ui-components/TableMenu';

export default class Ticket extends React.Component {
    private ticket_content = 'موضوع تیکت ارسالی'
    private ticket_content2 = 'مح  محتو ا  یسبامنام سشمی اشسمی شسای شمنسیاش سشی منشسای اشسی منشسایمشس شسا ماشسمیناشسم نا ش اسشمنیا منسش شسیا منشسای ش شسیا منشاسنمی شاسمی اشمسنیا منشسا توای پیام ارسالی'

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <div className="container r-ticket-container mt-5 p-3 pb-5 mb-5">
                    <TableMenu
                    title="تیکت"
                    hasSearch={false}
                    removeFilter={true}
                    removeUpdate={true}
                    />

                    <div className="r-ticket ml-5 mr-5 mb-5 p-4 pb-5">
                        <p className="font-weight-bold float-left d-inline-block" dir="ltr" >10:40 , 1397\08\02</p>
                        <p className="font-weight-bold float-right d-inline-block"><FontAwesomeIcon icon={faUserAlt} /> پریناز افراسیابیان </p>
                        <br/>
                        <br/>
                        <p className="text-right r-ticket-title" ><FontAwesomeIcon icon={faBook} /> عنوان تیکت: {this.ticket_content}</p>
                        <p className="text-right r-ticket-title" ><FontAwesomeIcon icon={faQuestionCircle} /> {this.ticket_content2}</p>
                    </div>

                    <div className="col-11 ml-5 mr-5 p-0 ">
                        <textarea 
                        className="w-100 text-right p-2 r-answer-ticket-textarea"
                        name="" 
                        id=""
                        placeholder="پاسخ تیکت" />

                        <div className="w-100 text-right">
                        <button className="float" >ارسال</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}