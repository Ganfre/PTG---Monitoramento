import React from 'react'
import Userfront from '@userfront/toolkit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons'
import LogoSS from './img/LogoSS.png'
import { LogoutButton } from './autenticacao/Autenticacao'
import {useApi} from '../hooks/useApi';
import { enviarEmailAlerta } from './EnvEmail';
//import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


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
    border-radius: 0px 30px 0px 0px;
    box-shadow: 10px 0px 20px 5px rgba(0, 0, 0, 0.2);

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
    const {data} = useApi('/devices')
    return (
        <StyledMenu>
            {data?.data?.message?.map(projeto =>{
                return(
                    enviarEmailAlerta(projeto)
                )
        })}
            <Link to='/' style={{ textDecoration: 'none' }}>
                <img style={{ width: '100%', height: 'auto', padding: '30px 0px 20px 0px'}} src={LogoSS} alt="Logo" />
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
                        <li><Link to='/mensagens'>Mensagens</Link></li>
                        <li style={{ display: 'flex', alignItems: 'center' }}><Link to='/logout'><LogoutButton style={{ padding: '0px', margin: '0px', width: '80px' }} /></Link></li>
                    </>
                )}
            </ul>
        </StyledMenu>
    )
}

export default Menu
