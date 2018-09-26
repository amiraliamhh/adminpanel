import * as React from 'react';
import * as queryString from 'query-string';
import { NavLink } from 'react-router-dom'; 

import './Pagination.scss';

export interface IPaginationProps {
    length: number;
    route: string;
}

export default class Pagination extends React.Component<IPaginationProps> {
    public render() {
        return (
            <nav>
              <ul className="pagination">
                {this.generateLinks(5, '/users')}
              </ul>
            </nav>
        );
    }

    private generateLinks(length: number, route: string) {
        const page: string = queryString.parse(window.location.search).page;
        const current = parseInt(page, 0);

        const start = (
            <React.Fragment key="1" >
                <li className="page-item">
                  <NavLink className="page-link" to={`${route}?page=${this.prevPage(current)}`} >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </NavLink>
                </li>
                <li className="page-item"><NavLink className="page-link" to={`${route}?page=1`} >1</NavLink></li>
            </React.Fragment>
        );

        const center = this.generateCenter(current, length, route);

        const end = (
            <React.Fragment key="2">
                <li className="page-item">
                    <NavLink className="page-link" to={`${route}?page=${length}`}>{length}</NavLink>
                </li>
                <li className="page-item">
                  <NavLink className="page-link" to={`${route}?page=${this.nextPage(current, length)}`} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </NavLink>
                </li>
            </React.Fragment>
        );

        return [start, center, end];
    }

    private prevPage(current: number): number {
        if (current === 1) {
            return 1;
        } else if (isNaN(current)) {
            return 1;
        } else {
            return current - 1;
        }
    }

    private nextPage(current: number, length: number): number {
        if (current === length) {
            return length;
        } else if (isNaN(current)) {
            return 1;
        } else {
            return current + 1;
        }
    }

    private generateCenter(current: number, length: number, route: string): JSX.Element {
        if (length > 3 && current) {
            switch (current) {
                case 2:
                    return (
                        <React.Fragment>
                            <li className="page-item"><NavLink className="page-link" to={`${route}?page=2`}>2</NavLink></li>
                            <li className="page-item"><a className="page-link">...</a></li>
                        </React.Fragment>
                    );
    
                case length - 1:
                    return (
                        <React.Fragment>
                            <li className="page-item"><a className="page-link">...</a></li>
                            <li className="page-item"><NavLink className="page-link" to={`${route}?page=2`}>{current}</NavLink></li>
                        </React.Fragment>
                    );

                case  1:
                    return (
                        <li className="page-item"><a className="page-link">...</a></li>
                    );

                case  length:
                    return (
                        <li className="page-item"><a className="page-link">...</a></li>
                    );
            
                default:
                    return (
                        <React.Fragment>
                            <li className="page-item"><a className="page-link">...</a></li>
                            <li className="page-item"><NavLink className="page-link" to={`${route}?page=${current}`}>{current}</NavLink></li>
                            <li className="page-item"><a className="page-link">...</a></li>
                        </React.Fragment>
                    );
            }
        } else if (length > 3 && !current) {
            return <li className="page-item"><a className="page-link">...</a></li>
        } else {
            return <li className="page-item"><NavLink className="page-link" to={`${route}?page=2`}>2</NavLink></li>;
        }
    }
}