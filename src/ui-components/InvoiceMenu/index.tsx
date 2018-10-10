import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './InvoiceMenu.scss';

interface IItem {
    name: string;
    link: string;
    selected?: boolean;
}

export interface IInvoiceMenuProps {
    items: IItem[];
    className?: string;
    selectedIndex?: number;
}

export interface IInvoiceMenuState {
    selectedIndex: number;
}

export default class InvoiceMenu extends React.Component<IInvoiceMenuProps, IInvoiceMenuState> {
    constructor(props: IInvoiceMenuProps) {
        super(props);

        this.state = {
            selectedIndex: this.props.selectedIndex || (this.props.items.length - 1),
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    public render() {
        return (
            <div className={`w-100 d-flex r-incoive-menu ${this.props.className}`}>
                {this.props.items.map((item: IItem, index: number) => {
                    if (this.state.selectedIndex === index) {
                        return (
                            <NavLink 
                                onClick={this.clickHandler} 
                                className={`font-weight-bold text-dark m-3 selected`} 
                                to={item.link} 
                                key={index}
                                data-key={index} >
                                {item.name}
                            </NavLink>
                        );
                    } else {
                        return (
                            <NavLink 
                                onClick={this.clickHandler} 
                                className={`font-weight-bold text-dark m-3`} 
                                to={item.link} 
                                key={index}
                                data-key={index} >
                                {item.name}
                            </NavLink>
                        );
                    }
                    
                })}
            </div>
        );
    }

    private clickHandler(e: React.MouseEvent<HTMLAnchorElement>) {
        const dataKey: number = parseInt(e.currentTarget.getAttribute('data-key') || '0', 0);
        this.setState({
            selectedIndex: dataKey
        });
    }
}