import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <a href="/" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span></a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src='../../images/avatar-sequels-delayed.jpg'  alt='' className="user-image" />
                                    <span className="hidden-xs">Nguyễn Xuân Tâm</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src='../../images/avatar-sequels-delayed.jpg' className="img-circle"
                                             alt="User Image"/>
                                        <p>Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-xs-4 text-center"><a href="#">Followers</a></div>
                                            <div className="col-xs-4 text-center"><a href="#">Sales</a></div>
                                            <div className="col-xs-4 text-center"><a href="#">Friends</a></div>
                                        </div>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#/logout" className="btn btn-default btn-flat">Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header