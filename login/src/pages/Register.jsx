import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/styles-login.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleRegister = () => {
        alert('Cadastro realizado com sucesso !');
    }

    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email) && !/\s/.test(email) && email.includes('.com');
    }

    const handleChangeEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(validateEmail(newEmail));
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/;
        return password.length >= 6 && !/\s/.test(email) && passwordRegex.test(password);
    }

    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsValid(validatePassword(newPassword));
    }

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setErrorMessage('Digite um email válido !');
        } else if (!validatePassword(password)) {
            setErrorMessage('A senha deve conter pelo menos 6 digitos e não pode ter espaços');
        } else {
            handleRegister();
            setErrorMessage('');
        }
    }

    const handleButtonBack = () => {
        navigate('/');
    }

    const handleSaveRegister = () => {
        if (!isValid) {
            handleSubmit();
        } else {
            localStorage.setItem('validEmail', email);
            localStorage.setItem('validPassword', password);
            handleRegister();
        }
    }

    return (
        <div className='container'>
            <div className='container-login'>
                <div className='wrap-login'>
                    <form className='login-form'>
                        <span className='login-form-title'>
                            Cadastro
                        </span>
                        <div className='wrap-input-email-login'>
                            <input className="input" type="email" value={email} onChange={handleChangeEmail} placeholder="Email" />
                            <span className="focus-input"></span>
                        </div>
                        <div className='wrap-input-password-login'>
                            <input className="input" type="password" value={password} onChange={handleChangePassword} placeholder="Password" />
                            <span className="focus-input"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn" onClick={handleSaveRegister}>
                                Registar
                            </button>
                        </div>
                        <div className="text-footer">
                            <button className="btn-register" onClick={handleButtonBack}>
                                Voltar
                            </button>
                        </div>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;