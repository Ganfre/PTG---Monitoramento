import React from 'react'
import Userfront from '@userfront/toolkit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons'
//import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { LogoutButton } from './autenticacao/Autenticacao';

const StyledMenu = styled.div`
    background: #111827;
    color: white;
    width: 280px;
    height: 100vh; 
    position: fixed; 
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0px 30px 30px 0px;
    box-shadow: 10px 0px 30px 5px rgba(0, 0, 0, 0.3);

    ul{
        list-style: none;
        padding: 0;
        flex-direction: column;
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
            color: #c0c0c0;
        }
    }
`;

const Menu = () => {
    return (
        <StyledMenu>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 style={{ fontSize: '38px', fontWeight: 'bold', color: 'white', textAlign: 'center', paddingBottom: '15px', paddingTop: '10px' }}>SensorSync</h1>
            </Link>
            <ul style={{ display: 'flex', paddingRight: '60px' }}>
                {!Userfront.accessToken() && (
                    <>
                        <li><FontAwesomeIcon icon={faUser} /><Link to='/login'> Login</Link></li>
                        {/* <li><FontAwesomeIcon icon={faUserPlus} /><Link to='/cadastro'> Cadastro</Link></li> */}
                    </>
                )}
                {Userfront.accessToken() && (
                    <>
                        <li><FontAwesomeIcon icon={faHome} /><Link to='/'> Home</Link></li>
                        <li><FontAwesomeIcon icon={faChartLine} /><Link to='/medidas'> Medidas</Link></li>
                        <li><FontAwesomeIcon icon={faCog} /><Link to='/admin'> Administrador</Link></li>
                        <li style={{ display: 'flex', alignItems: 'center' }}><Link to='/logout'><LogoutButton style={{ padding: '0px', margin: '0px', width: '80px' }} /></Link></li>
                    </>
                )}
            </ul>
        </StyledMenu>
    )
}

export default Menu
