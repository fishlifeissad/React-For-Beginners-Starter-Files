import React from "react";
import PropTypes from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h2>Inventory login</h2>
        <p>Sign in to manage your store's inventory:  </p>
        <button 
            className="github" 
            onClick={() => props.authenticate('Github')}
        >
            Log in with GitHub
        </button>
        <button 
            className="email" 
            onClick={() => props.authenticate('Email')}
        >
            Log in with e-mail
        </button>  
    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired

};

export default Login;
