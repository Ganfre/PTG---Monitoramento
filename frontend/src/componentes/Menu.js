import React from 'react'
import Userfront from '@userfront/toolkit'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { LogoutButton } from './autenticacao/Autenticacao';

const StyledMenu = styled.div`
    background: #00648F;
    color: white;
    height: 120px; 
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    ul{
        display: flex;
        list-style: none;
    }

    li{
        padding-left: 2rem;
        padding-top: 1.5rem;
    }

    a{
        color: white;
        text-decoration: none;
        margin: none;
        padding: none;
        font-size: 20px;
        &:hover{
            color: #001E2B;
        }
    }
`;

const Menu = ()=>{
    return(
        <StyledMenu>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 style={{ fontSize: '38px', fontWeight: 'bold', color: 'white' }}>SensorSync</h1>
            </Link>   
            <ul style={{display: 'flex', textAlign: 'center', alignItems: 'baseline'}}>
                <li><Link to='/'>Home</Link></li>
                {/* <li><Link to='/mensagens'>Mensagens</Link></li> */}
                {!Userfront.accessToken() && (
                        <>
                            {/* <li><Link to='/cadastro'>Cadastrar</Link></li> */}
                            <li><Link to='/login'>Login</Link></li>
                        </>
                    )
                }
                {Userfront.accessToken() && (
                        <>
                            <li><Link to='/medidas'>Medidas</Link></li>
                            <li><Link to='/admin'>Administrador</Link></li>
                            <li><Link to='/logout'><LogoutButton /></Link></li>
                        </>
                    )
                }
                
            </ul>
        </StyledMenu>
    )
}

export default Menu