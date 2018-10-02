import * as React from 'react';
import './Table.scss';

export interface IRowData {
    type: 'text'|'image'|'jsx';
    data: any;
    action?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ITableProps {
    heads: string[];
    rows: IRowData[][];
}

export default class RabTable extends React.Component<ITableProps> {
    public render() {
        return (
            <table className="table table-borderless table-striped r-table text-right">
                {this.generateTabelHead(this.props.heads)}
                <tbody>
                    {this.props.rows.map((row: IRowData[], index: number) => this.generateTableRow(row, index))}
                </tbody>
            </table>
        );
    }

    private generateTabelHead(heads: string[]) {
        const ths = heads.map((head: string, index: number) => (
            <th scope="col" key={index} className="text-center" >{head}</th>
        ));

        return (
            <thead>
                <tr>
                    {ths}
                </tr>
            </thead>
        );
    }

    private generateTableRow(data: IRowData[], ind: number) {

        const tds = data.map((datum: IRowData, index: number) => {
            if (datum.type === 'text') {
                return <td key={index} className="r-td-text text-center" >{datum.data}</td>

            } else if(datum.type === 'image' && datum.action) {
                return (
                    <td key={index} className="r-edit-img" >
                        <img src={datum.data} className="r-table-icon r-clickable" alt="" onClick={datum.action} />
                    </td>
                );
                
            } else if (datum.type === 'jsx') {
                return <td key={index} className="r-td-text text-center" >{datum.data}</td>

            } else {
                return (
                    <td key={index} >
                        <div className="d-flex justify-content-center" >
                            <img src={datum.data} className="r-table-icon" alt=""/>
                        </div>
                    </td>
                );
            }
        });

        return (
            <tr key={ind} >
                {tds}
            </tr>
        );
    }
}