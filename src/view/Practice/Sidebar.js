import React, {Component} from 'react';

class SideBar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="../../images/avatar-sequels-delayed.jpg"
                                 className="img-circle"
                                 alt="User Image"/>
                        </div>
                        <div className="pull-left info"><p>Alexander Pierce</p><a href="#"><i
                            className="fa fa-circle text-success"></i>
                            Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-dashboard"></i>
                                <span>Item</span> <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/#/index"><i className="fa fa-circle-o"></i> List</a></li>
                                <li><a href="/#/add"><i className="fa fa-circle-o"></i> Add</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}

export default SideBar