import * as React from 'react';

import './Input.scss';

interface IInputProps {
    className?: string;
    defaultVal?: string;
    dir?: 'rtl'|'ltr';
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IInputState {
    currentVal: string;
}

export default class RabInput extends React.Component<IInputProps, IInputState> {
    public inputRef: any;
    private extraClasses: string = "";

    constructor(props: IInputProps) {
        super(props);

        this.state = {
            currentVal: this.props.defaultVal || ''
        };

        this.extraClasses += this.props.dir === 'rtl' || !this.props.dir ? 'rds-input-rtl' : 'rds-input-ltr';
        this.inputRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
    }

    public render() {
        return (
            <div>
                <input 
                className={`rds-input ${this.extraClasses} ${this.props.className || ''}`} 
                type="text"
                onChange={this.handleChange}
                value={this.state.currentVal}
                ref={this.inputRef}
                />
            </div>
        );
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            currentVal: e.target.value
        });
    }
}