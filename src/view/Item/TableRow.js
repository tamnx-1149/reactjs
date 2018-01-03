import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GetIndexList from '../../components/common/GetIndexList';
import BtnDelete from '../../components/Button/BtnDelete'

class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className='text-center '><input type="checkbox" checked={this.props.obj.check_flag ? this.props.obj.check_flag : ''}
                           onChange={this.props.onChange}/></td>
                <GetIndexList obj={this.props.st} index={this.props.index}/>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <Link to={"/index/edit/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <BtnDelete onSubmit={this.props.onSubmit}/>
                </td>
            </tr>
        );
    }
}

export default TableRow;
