import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegisterForm } from "modules";
import { VerifyEmail } from 'components';

import './Auth.scss';

const Auth = () => (
    <section className='auth'>
        <div className="auth__content">
            <Route exact path={['/', '/login']} component={LoginForm}/>
            <Route exact path='/register' component={RegisterForm}/>
            <Route exact path='/register/verify' component={VerifyEmail}/>
        </div>
    </section>
);

export default Auth;