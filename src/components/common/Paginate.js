import React, {Component} from 'react';
import Pagination from 'react-js-pagination';

class Paginate extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Pagination
                activePage={this.props.object.activePage}
                itemsCountPerPage={this.props.object.itemsCountPerPage}
                totalItemsCount={this.props.object.totalItemsCount}
                pageRangeDisplayed={this.props.object.pageRangeDisplayed}
                onChange={this.props.onChange}
            />
        )
    }
}

export default Paginate;