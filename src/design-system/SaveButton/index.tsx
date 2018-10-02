import * as React from 'react';

import './SaveButton.scss';

interface ISaveButtonProps {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class SaveButton extends React.Component<ISaveButtonProps> {

    public render() {
        return (
            <button
            onClick={this.props.onClick}
            className={`btn btn-lg r-save-button mt-2 ${this.props.className || ''}`} 
            >
            ذخیره
            </button>
        )
    }
}