import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem('jwt');
    }

    render() {
        return (
            <Redirect to='/login'/>
        )
    }
}

export default Logout