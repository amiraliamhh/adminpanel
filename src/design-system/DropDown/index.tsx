import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './DropDown.scss';

interface IDropDownProps {
    options: string[];
    className?: string;
    selected?: string;
}

interface IDropDownState {
    dropdownOpen: boolean;
    selected: string;
}

export default class DropDown extends React.Component<IDropDownProps, IDropDownState> {
    private node: HTMLDivElement | null;

    constructor(props: IDropDownProps) {
        super(props);

        this.state = {
            dropdownOpen: false,
            selected: this.props.selected || this.props.options[0]
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.clickOutside = this.clickOutside.bind(this);
    }

    public get selectedText(): string {
        return this.state.selected;
    }

    public get selectedIndex(): number {
        return this.props.options.indexOf(this.state.selected);
    }

    public componentWillMount() {
        document.addEventListener('click', this.clickOutside, false);
    }

    public componentWillUnmount() {
        document.removeEventListener('click', this.clickOutside, false);
    }

    public render() {
        return (
            <div 
            className={`d-inline-block font-weight-bold r-dropdown ${this.props.className || ''}`}
            ref={node => this.node = node}
            >
                <div onClick={this.toggleDropdown} >
                    {this.state.selected}
                    <FontAwesomeIcon icon={faAngleDown} size="1x" color="#111" className="mr-2" />
                </div>
                <div className="d-block bg-primary w-100">
                    <div 
                    className={`position-absolute bg-light p-3 r-dropdown-content-container ${this.state.dropdownOpen ? "d-block" : "d-none"}`} 
                    >
                        {
                            this.props.options.map((option: string, index: number) => {
                                return <p onClick={() => {this.selectOption(index)}} key={index + 1} >{option}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    private clickOutside(e: any) {
        if (this.node && this.node.contains(e.target)) {
            return;
        } else if (this.state.dropdownOpen) {
            this.toggleDropdown();
        }
    }

    private selectOption(index: number): void {
        this.setState({
            selected: this.props.options[index]
        }, () => {
            this.toggleDropdown();
        });
    }

    private toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
}