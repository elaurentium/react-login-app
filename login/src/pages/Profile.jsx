import React from "react";
import '../styles/styles-profile.css';

const Profile = () => {

    const emailSaved = localStorage.getItem('validEmail')


    return (
        <div className="container">
            <div className="header-wrap">
                <header className="header">
                    <span className="email-header">{emailSaved}</span>
                </header>
            </div>
        </div>
    )
}

export default Profile;