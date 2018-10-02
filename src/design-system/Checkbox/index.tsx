import * as React from 'react';

import './Checkbox.scss';

interface IRabCheckboxState {
    checked: boolean;
}

interface IRabCheckboxProps {
    changeHandler: (e: React.ChangeEvent<HTMLElement>) => void;
    currentValue: boolean;
    className?: string;
}

export default class RabCheckbox extends React.Component<IRabCheckboxProps, IRabCheckboxState> {
    public chbox: any;

    constructor(props: IRabCheckboxProps) {
        super(props);

        this.state = {
            checked: this.props.currentValue
        }

        this.chbox = React.createRef();
    }

    public render() {
        return (
            <label className={`r-switch ${this.props.className || ''}`}>
              <input
               type="checkbox" 
               checked={this.state.checked} 
               onChange={this.props.changeHandler}
               ref={this.chbox}
               />
              <span className="r-slider r-round" />
            </label>
        )
    }

    public _toggleChecked(): void {
        this.setState({
            checked: !this.state.checked
        })
    }
}