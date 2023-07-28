import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/styles-login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleButtonBack = () => {
        navigate('/register');
    }

    return (
        <div className='container'>
            <div className='container-login'>
                <div className='wrap-login'>
                    <form className='login-form'>
                        <span className='login-form-title'>
                            Login
                        </span>
                        <div className='wrap-input-email-login'>
                            <input className="input" type="email" placeholder="Email" />
                            <span className="focus-input"></span>
                        </div>
                        <div className='wrap-input-password-login'>
                            <input className="input" type="password" placeholder="Password" />
                            <span className="focus-input"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn">
                                Login
                            </button>
                        </div>
                        <div className="text-footer">
                            <button className="btn-register" onClick={handleButtonBack}>
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;