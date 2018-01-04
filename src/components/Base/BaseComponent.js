import {Component} from 'react';
import axios from 'axios';

class BaseComponent extends Component {
    constructor(props) {
        super(props)
        axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('jwt');
        axios.interceptors.response.use(null, function (error) {
            if (error.response && error.response.status == 401) {
                localStorage.removeItem('jwt');
            }
            return Promise.reject(error.response);
        });
    }
}
export default BaseComponent