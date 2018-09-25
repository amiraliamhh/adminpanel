import * as React from 'react';
import './Table.scss';

interface ITableProps {
    heads: string[];
    rows: string[][];
}

export default class RabTable extends React.Component<ITableProps> {
    public render() {
        return (
            <table className="table table-hover text-right">
                {this.generateTabelHead(this.props.heads)}
                <tbody>
                    {this.props.rows.map((row: string[]) => this.generateTableRow(row))}
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

    private generateTableRow(data: string[]) {
        const tds = data.map((datum: string, index: number) => (
            <td key={index} >{datum}</td>
        ));

        return (
            <tr>
                {tds}
            </tr>
        );
    }
}