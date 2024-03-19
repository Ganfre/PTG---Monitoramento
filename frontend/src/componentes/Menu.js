import React from 'react'
import Userfront from '@userfront/toolkit'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { LogoutButton } from './autenticacao/Autenticacao';

const StyledMenu = styled.div`
    background: #00648F;
    color: white;
    min-height: 10vh;
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
        padding-top: 1rem;
    }

    a{
        color: white;
        text-decoration: none;
        &:hover{
            color: #001E2B;
        }
    }
`;

const Menu = ()=>{
    return(
        <StyledMenu>
            <h1>SensorSync</h1>
            <ul>
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