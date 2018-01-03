import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/add'>Add</Link></li>
                        <li><Link to='/index'>List</Link></li>
                        <li><Link to='/logout'>Đăng xuất</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header