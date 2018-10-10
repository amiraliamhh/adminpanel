import * as React from 'react';

import './TableMenu.scss';
import FilterIcon from './assets/filter-icon.png';
import RefreshIcon from './assets/refresh-icon.png';
import TitleIcon from './assets/title-icon.png'

interface ITableMenuProps {
    title: string;
    hasSearch: boolean;
    removeFilter?: boolean;
    removeUpdate?: boolean;
    updateAction?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default class TableMenu extends React.Component<ITableMenuProps> {
    public render() {
        return (
            <React.Fragment>
                <div className="w-100 r-table-menu mb-4">
                    {!this.props.removeFilter ? 
                        <div className="d-inline-block r-clickable">
                            <p className="d-inline mr-1" >فیلتر</p>
                            <img className="r-table-menu-icon d-inline" src={FilterIcon} alt=""/>
                        </div> : ''}
                    
                    {!this.props.removeUpdate ?
                        <div onClick={this.props.updateAction} className="d-inline-block ml-4">
                            <p className="d-inline mr-1 r-clickable">بروزرسانی</p>
                            <img className="r-table-menu-icon" src={RefreshIcon} alt=""/>
                        </div> : ''}

                    <div className="d-inline-block float-right">
                        <p className="d-inline mr-1 r-table-title">{this.props.title}</p>
                        <img className="r-table-menu-icon" src={TitleIcon} alt=""/>
                    </div>
                </div>

                {this.props.hasSearch ? (
                    <div className="w-100 r-search-input-container">
                        <input type="text" className="form-control w-25 float-right mb-5 text-right r-search-input" dir="rtl" placeholder="جستجو ..." />
                    </div>
                ) : '' }
            </React.Fragment>
        );
    }
}