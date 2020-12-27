import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import{ useStateValue }from './StateProvider'
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) =>{ 
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => {alert(error.message)});

    };
    return (
        <div className="login">
            <div className="login_container">
            <img  src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png"
            alt=""/>
            <div className="login_text">
               <h1>Signin to whatsapp</h1>
            </div>    
            <Button  onClick={signIn}>
                sign in with Google
            </Button>
            </div>
        </div>
    )
}

export default Login
