import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Config from '../../components/common/Config';
import Common from "../../components/common/Common";
import Paginate from "../../components/common/Paginate";
import TableRow from './TableRow';
import BaseComponent from '../../components/Base/BaseComponent';

class Index extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: '',
            activePage: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 0,
            pageRangeDisplayed: 5,
            check_all: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChangeItem = this.handleChangeItem.bind(this);
    }

    componentDidMount() {
        document.title = 'Add item';
        Common.showLoading();
        axios.get(Config.baseUrl + '/items?page=' + this.state.activePage)
            .then(response => {
                Common.hideLoading();
                for (var i = 0; i < response.data.data.length; i++) {
                    response.data.data[i]['check_flag'] = false;
                }
                this.setState({
                    items: response.data.data,
                    activePage: response.data.current_page,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                });
            })
    }

    handlePageChange(pageNumber) {
        Common.showLoading();
        axios.get(Config.baseUrl + '/items?page=' + pageNumber)
            .then(response => {
                Common.hideLoading();
                this.setState({
                    items: response.data.data,
                    activePage: response.data.current_page,
                    check_all: false
                });
            })
    }

    handleSubmit(id) {
        return function (event) {
            event.preventDefault();
            let uri = Config.baseUrl + '/items/' + id;
            axios.delete(uri).then((response) => {
                this.componentDidMount();
            }).catch(function (error) {
            });
        }.bind(this)
    }

    handleChangeAll(event) {
        if (event.target.checked) {
            for (var i = 0; i < this.state.items.length; i++) {
                this.state.items[i]['check_flag'] = true;
            }
        }
        else {
            for (var i = 0; i < this.state.items.length; i++) {
                this.state.items[i]['check_flag'] = false;
            }
        }
        this.setState({
            items: this.state.items,
            check_all: event.target.checked,
        })
    }

    handleChangeItem(index, event) {
        this.state.items[index].check_flag = event.target.checked;
        this.setState({
            items: this.state.items,
            check_all: false,
        })
        var flagCheckAll = true;
        if (event.target.checked) {
            for (var i = 0; i < this.state.items.length; i++) {
                if (!this.state.items[i].check_flag) {
                    flagCheckAll = false;
                    break;
                }
            }
            this.setState({check_all: flagCheckAll})
        }
    }

    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <TableRow
                    obj={object} st={this.state} key={i} index={i}
                    onChange={this.handleChangeItem.bind(this, i)}
                    onSubmit={this.handleSubmit(object.id)}
                />;
            }, this)
        }
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/add">Add item</Link>
                    </div>
                </div>
                <br/>
                <table className="table table_custom">
                    <thead>
                    <tr>
                        <th className='width-5 text-center'><input type='checkbox' onChange={this.handleChangeAll}
                                                                   checked={this.state.check_all}/></th>
                        <th className='width-15 text-center'>#</th>
                        <th className='width-25'>name</th>
                        <th className='width-25'>price</th>
                        <th className='width-15'>update</th>
                        <th className='width-15'>delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
                <Paginate object={this.state} onChange={this.handlePageChange}/>
            </div>
        )
    }
}

export default Index;
