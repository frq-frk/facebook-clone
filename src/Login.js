import { Button } from '@mui/material'
import React from 'react'
import './Login.css'

import { auth, provider} from './firebase';
import { signInWithPopup } from "firebase/auth";

import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result.user);
        })
        .catch((err) => alert(err.message))

    }

    return (
        <div className="login"> 
            <div className="login_logo">

                <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
                    alt = ""
                />

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
