import * as React from 'react';
import './Table.scss';

export interface IRowData {
    type: 'text'|'image';
    data: any;
    action?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface ITableProps {
    heads: string[];
    rows: IRowData[][];
}

export default class RabTable extends React.Component<ITableProps> {
    public render() {
        return (
            <table className="table table-hover text-right">
                {this.generateTabelHead(this.props.heads)}
                <tbody>
                    {this.props.rows.map((row: IRowData[], index: number) => this.generateTableRow(row, index))}
                </tbody>
            </table>
        );
    }

    private generateTabelHead(heads: string[]) {
        const ths = heads.map((head: string, index: number) => (
            <th scope="col" key={index} >{head}</th>
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
                return <td key={index} >{datum.data}</td>

            } else if(datum.type === 'image' && datum.action) {
                return (
                    <td key={index} >
                        <img src={datum.data} className="r-table-icon r-clickable" alt="" onClick={datum.action} />
                    </td>
                );
                
            } else {
                return (
                    <td key={index} >
                        <img src={datum.data} className="r-table-icon" alt=""/>
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