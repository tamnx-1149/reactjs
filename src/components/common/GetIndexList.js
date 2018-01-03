import React, {Component} from 'react';

class GetIndexList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td className='text-center'>
                {(this.props.obj.activePage - 1) * this.props.obj.itemsCountPerPage + (this.props.index + 1)}
            </td>
        );
    }
}

export default GetIndexList;