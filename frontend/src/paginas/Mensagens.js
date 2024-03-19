import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Userfront from '@userfront/toolkit';

const Mensagens = ()=>{
    let navigate = useNavigate()
    useEffect(()=>{
        if(!Userfront.accessToken()){
            return navigate('/login')
        }
    })
    return(
        <div>
            <h1>Mensagens</h1>
        </div>
    )
}

export default Mensagens