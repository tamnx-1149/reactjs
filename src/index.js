import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Redirect} from 'react-router-dom';
import Header from './view/practice/Header'
import Router from './routes/Router'

function Render() {
    let login = localStorage.getItem('jwt');
    if (login) {
        return (
            <div className='container-fluid'>
                <Header/>
                <Router/>
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
