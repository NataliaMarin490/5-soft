import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import cookie from 'react-cookies'
const { OAuth2Client } = require('google-auth-library');

      
const CLIENT_ID = '194617696880-4tg9gi23re9p5skrd7r4btbr30o41deo.apps.googleusercontent.com';

const ProtectedRoute = ({ ...props }) => {
    //componente prop
    const Component = props.component;
    console.log('Component', Component);
    const client = new OAuth2Client(CLIENT_ID);
    const [auth, setAuth] = useState(null)

   
      const algoblabla =(intime)=>{

        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < intime);

      }

    useEffect(() => {
        verify(cookie.load('token'))
    }, [auth])

    const verify = async (token) => {

        if (cookie.load('token') == undefined || cookie.load('token') == '') {
            console.log('undefined');
            setAuth(false)
        }
        else {
            console.log('token existe', typeof cookie.load('token'));

            try {
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                    // Or, if multiple clients access the backend:
                    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
                });
                console.log('tticket', ticket);

                const payload = ticket.getPayload();
                const userid = payload['sub'];
                console.log('userid', userid);
                setAuth(true);
                console.log('----------------------');
                // If request specified a G Suite domain:
                // const domain = payload['hd'];
            } catch (error) {
                console.log('error', error);
            }


        }

    }



    return (<div>
        {console.log('auth', auth)}
        
        {auth ?
            <Component />
            : auth === false ?
            
                <Redirect to={{ pathname: '/' }} /> : <img src="https://i.imgur.com/xzku5RR.png" alt="" />
                /* <div><h1>Cargando...</h1></div> */
        }
        {algoblabla(50)}
    </div>);
}

export default ProtectedRoute;