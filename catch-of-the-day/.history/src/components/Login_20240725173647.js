import React from "react";

const Login = () => (
    <nav className="login">
        <h2>Inventory login</h2>
        <p>Sign in to manage your store's inventory.  </p>
        <button 
            className="github" 
            onClick={() => this.props.authenticate('Github')}
        >
            Log in with GitHub
        </button>;
        <button 
            className="email" 
            onClick={(this.props.authenticate('Email'))}
        >
            Log in with e-mail
        </button>  
    </nav>
);

export default Login;
