import React, {Component} from 'react';

class TypeText extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="row">
            <div className="col-xs-12">
                <div className="form-group">
                    <label>{this.props.title}</label>
                    <input type={this.props.type ? this.props.type : 'text'} name={this.props.name}
                           className="form-control"
                           onChange={this.props.onChange}/>
                </div>
            </div>
        </div>)
    }
}

export default TypeText;