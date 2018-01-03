import React, {Component} from 'react';

class BtnPrimary extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form-group">
                <button className="btn btn-primary" onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        );
    }
}

export default BtnPrimary;