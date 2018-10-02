import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './InvoiceMenu.scss';

interface IItem {
    name: string;
    link: string;
}

export interface IInvoiceMenuProps {
    items: IItem[];
    className?: string;
}

export default class InvoiceMenu extends React.Component<IInvoiceMenuProps> {
    public render() {
        return (
            <div className={`w-100 d-flex r-incoive-menu ${this.props.className}`}>
                {this.props.items.map((item: IItem, index: number) => {
                    return (
                        <NavLink className="font-weight-bold text-dark m-3" to={item.link} key={index} >{item.name}</NavLink>
                    );
                })}
            </div>
        );
    }
}