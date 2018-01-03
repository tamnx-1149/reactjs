import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Config from '../../components/common/Config';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', price: ''};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = 'Edit';
        axios.get(Config.baseUrl + '/items/' + this.props.match.params.id + '/edit')
            .then(response => {
                this.setState({name: response.data.name, price: response.data.price});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleChange1(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChange2(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const products = {
            name: this.state.name,
            price: this.state.price
        }
        let uri = Config.baseUrl + '/items/' + this.props.match.params.id;
        axios.patch(uri, products).then((response) => {
            this.props.history.push('/index');
        });
    }

    render() {
        return (
            <div>
                <h1>Update Item</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/index" className="btn btn-success">Return to Items</Link>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>name</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.handleChange1}/>
                    </div>
                    <div className="form-group">
                        <label name="product_price">Price</label>
                        <input type="text" className="form-control"
                               value={this.state.price}
                               onChange={this.handleChange2}/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItem;
