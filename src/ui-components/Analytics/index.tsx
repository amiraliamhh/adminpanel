import * as React from 'react';
import * as Chart from 'chart.js';
import './Analytics.scss';

import NewUsersIcon from './assets/new-users.png';
import NewOrdersIcon from './assets/new-orders.png'

export default class Analytics extends React.Component {

    public componentDidMount() {
        const c: any = document.getElementById("usersData");
        const ctx: any = c.getContext('2d');
        const x = new Chart(ctx, {
            data: {
                datasets: [{
                    backgroundColor: [
                        '#f5e4c1'
                    ],
                    borderColor: [
                        '#e7bb65'
                    ],
                    borderWidth: 1,
                    data: [12, 19, 3, 5, 2, 3],
                    label: '# of Votes',
                }],
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            },
            type: 'line',
        });

        console.log(x);

        const c1: any = document.getElementById("ordersData");
        const ctx1: any = c1.getContext('2d');
        const x1 = new Chart(ctx1, {
            data: {
                datasets: [{
                    backgroundColor: [
                        '#f5e4c1'
                    ],
                    borderColor: [
                        '#e7bb65'
                    ],
                    borderWidth: 1,
                    data: [12, 19, 3, 5, 2, 3],
                    label: '# of Votes',
                }],
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            },
            type: 'line',
        });

        console.log(x1);
        
    }

    public render() {
        return (
            <div className="container mb-4">
                <div className="row">
                    <div className="r-chart-box col-sm-12 col-md-6 col-lg-5 mt-5 p-5" >
                        <div className="w-100 pb-3">
                            <h4 className="d-inline font-weight-bold r-chart-box-title float-right mt-3" >کاربر جدید</h4>
                            <img src={NewUsersIcon} alt="" className="r-new-users-icon" />
                        </div>

                        <div className="w-100 d-flex d-flex-row mb-5 justify-content-center r-new-data-counter" >
                            <button className="btn btn-lg float-center font-weight-bold">125</button>
                        </div>

                        <div className="r-chart-container">
                            <canvas id="usersData" width="100" />
                        </div>
                    </div>

                    <div className="r-chart-box col-sm-12 col-md-6 col-lg-5 offset-lg-2 mt-5 p-5" >
                        <div className="w-100 pb-3">
                            <h4 className="d-inline font-weight-bold r-chart-box-title float-right mt-3" >سفارش جدید</h4>
                            <img src={NewOrdersIcon} alt="" className="r-new-users-icon" />
                        </div>
                        
                        <div className="w-100 d-flex d-flex-row mb-5 justify-content-center r-new-data-counter" >
                            <button className="btn btn-lg float-center font-weight-bold">125</button>
                        </div>

                        <div className="r-chart-container">
                            <canvas id="ordersData" width="100" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}