import React, {Component} from 'react';

class BtnDelete extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
        )
    }
}

export default BtnDelete;