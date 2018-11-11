import * as React from 'react';
import * as io from 'socket.io-client';

import { checkPermission } from '../../funcs/SendNotification';

export default class RabNotification extends React.Component<any, any> {
    private socket: any;

    constructor(props: any) {
        super(props);

        this.socket = io.connect('http://195.248.243.204/', {
            path: '/socket'
        });

        this.socket.on('connect', () => {
            this.socket.emit('orders');
            this.socket.emit('users');

            this.socket.on('order', (order: any) => {
                this.sendNotif('سفارش جدید!', 'یک سفارش جدید در سیستم ثبت شده است.') 
            });

            this.socket.on('new-user', (user: any) => {
                this.sendNotif('کاربر جدید!', 'یک کاربر جدید در سایت ثبت نام کرده است.')
            })
        });
    }

    public componentDidMount() {
        checkPermission();
    }

    public render() {
        return (
            <div style={{display: 'none'}} />
        )
    }

    private sendNotif(
        title: string,
        body: string
    ) {
        new Notification(title, {
            body,
            dir: 'rtl',
            icon: '',
            image: 'http://rabsin-co.ir/nau-assets/back-email.jpg',
            lang: 'fa',
            renotify: true,
            requireInteraction: true,
            tag: 'سفارش جدید',
        });
    }
}