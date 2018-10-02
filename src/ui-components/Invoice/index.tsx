import * as React from 'react';

import InvoiceMenu, { IInvoiceMenuProps } from '../InvoiceMenu';
import './Invoice.scss';

export interface IInvoiceTd {
    property: string;
    value: string|JSX.Element;
}

export interface IInvoiceProps {
    tds: IInvoiceTd[];
    menu: IInvoiceMenuProps;
} 

export default class Invoice extends React.Component<IInvoiceProps> {
    constructor(props: IInvoiceProps) {
        super(props);
    }

    public render() {

        return (
            <div className="container-fluid mt-5">
                <div className="offset-lg-3">
                <InvoiceMenu {...this.props.menu} />
                <div dir="rtl" className="d-flex" >
                    <table className="table text-right r-table-borderless">
                        <tbody>

                            {this.generateTDs(this.props.tds)}

                            <tr className="r-invisible" >
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        );
    }

    private generateTDs(tds: IInvoiceTd[]): JSX.Element[] {
        return tds.map((td: IInvoiceTd, index: number) => (
            <tr className="r-tr" >
                <td className="font-weight-bold r-td-prop" >{td.property}:</td>
                <td colSpan={6} >{td.value}</td>
            </tr>
        ));
    }
}