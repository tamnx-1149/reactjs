import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import InputText from '../../components/Input/TypeText'
import Common from "../../components/common/Common";
import Config from "../../components/common/Config";
import BtnPrimary from "../../components/Button/BtnPrimary";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '', password: '',
            }

        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e) {
        let user = Object.assign({}, this.state.user);
        user.email = e.target.value,
            this.setState({user: user});
    }

    handleChangePassword(e) {
        let user = Object.assign({}, this.state.user);
        user.password = e.target.value,
            this.setState({user: user});
    }

    handleSubmit(e) {
        e.preventDefault();
        let uri = Config.baseUrl + '/login';
        Common.showLoading();
        axios.post(uri, this.state.user).then((response) => {
            if (response.data.result) {
                localStorage.setItem('jwt', response.data.result);
                this.props.history.push('/');
            }
        })
    }

    render() {
        let login = localStorage.getItem('jwt');
        if (login) {
            return (
                <Redirect to='/'/>
            )
        }
        return (
            <div className="panel panel-default">
                <div className="panel-heading ">Login</div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit} ref="bar">
                        <InputText title='Email' name='email' onChange={this.handleChangeEmail}/>
                        <InputText type='password' title='Password' name='password'
                                   onChange={this.handleChangePassword}/>
                        <BtnPrimary text='Login'/>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login