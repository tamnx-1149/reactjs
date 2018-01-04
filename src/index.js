import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Redirect} from 'react-router-dom';
import Header from './view/Practice/Header'
import SideBar from './view/Practice/Sidebar'
import Footer from './view/Practice/Footer'
import Router from './routes/Router'

function Render() {
    let login = localStorage.getItem('jwt');
    if (login) {
        return (
            <div className='wrapper'>
                <Header/>
                <SideBar/>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <Router/>
                    </div>
                </div>
                <Footer/>
                <div className="control-sidebar-bg"></div>
            </div>
        )
    }
    return (
        <div>
            <Router/>
            <Redirect to='/login'/>
        </div>
    );


}

ReactDOM.render((
    <HashRouter>
        <Render/>
    </HashRouter>
), document.getElementById('root'))
