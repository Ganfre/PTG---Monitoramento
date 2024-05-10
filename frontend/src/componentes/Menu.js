import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChartLine, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import LogoSS from './img/LogoSS.png';
import LogoSS_Menor from './img/LogoSS_Menor.png';
import { LogoutButton } from './autenticacao/Autenticacao';
import { useApi } from '../hooks/useApi';
import { enviarEmailAlerta } from './EnvEmail';
import Userfront from '@userfront/toolkit';
import ToggleMenu from './ToggleMenu';

const StyledMenu = styled.div`
    background: #111827;
    color: white;
    width: ${props => (props.retract ? '60px' : '280px')};
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0px 30px 0px 0px;
    box-shadow: 10px 0px 20px 5px rgba(0, 0, 0, 0.2);
    transition: width 0.3s ease;

    ul {
        list-style: none;
        padding: 0;
        flex-direction: column;
    }

    li {
        padding-left: ${props => (props.retract ? '0.2rem' : '2rem')};
        padding-top: ${props => (props.retract ? '50px' : '1.5rem')};
        display: flex;
        align-items: center;
        &:hover {
            color: #c0c0c0;
        }
    }

    a {
        display: flex;
        color: white;
        text-decoration: none;
        margin: none;
        padding: none;
        align-items: center;
        font-size: 20px;
        &:hover {
            color: #c0c0c0;
        }
    }
`;

const BolinhaNotificacao = styled.div`
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    margin-left: 8px;
`;

const Menu = ({ onMenuToggle }) => {
    const [retractMenu, setRetractMenu] = useState(false);
    const { data } = useApi('/devices');
    const [dispositivosComProblemas, setDispositivosComProblemas] = useState(false);

    useEffect(() => {
        if (data?.data?.message) {
            const dispositivosComProblemas = data.data.message.some(projeto => {
                const ultimaMedida = projeto.medidas[projeto.medidas.length - 1];
                return (
                    ultimaMedida.temperatura > 85 ||
                    ultimaMedida.vibracao > 15 ||
                    ultimaMedida.corrente > 10 ||
                    ultimaMedida.rpm < 800
                );
            });
            setDispositivosComProblemas(dispositivosComProblemas);
        }
    }, [data]);

    const toggleRetractMenu = () => {
        setRetractMenu(!retractMenu);
        onMenuToggle(!retractMenu); 
    };

    return (
        <StyledMenu retract={retractMenu}>
            {data?.data?.message?.map(projeto => {
                return enviarEmailAlerta(projeto);
            })}
            <ToggleMenu onToggle={toggleRetractMenu} />
            <Link to='/' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', paddingTop: '40px' }}>
                {!retractMenu && <img style={{ width: '100%', height: 'auto'}} src={LogoSS} alt="Logo" />}
                {retractMenu && <img style={{ width: '100%', height: 'auto'}} src={LogoSS_Menor} alt="Logotipo Contraído" />}
            </Link>
            
                <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: '20px' }}>
                    {!Userfront.accessToken() && (
                        <>
                            {!retractMenu && <li><FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /><Link to='/login'> Login</Link></li>}
                            {retractMenu && <li><FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /> <Link to='/login'></Link></li>}
                        </>
                    )}
                    {Userfront.accessToken() && (
                        <>
                            {!retractMenu && <li><Link to='/'><FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> Início</Link></li>}
                            {retractMenu && <li><Link to='/'><FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /></Link></li>}

                            {!retractMenu && <li><Link to='/medidas'><FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px' }} /> Medidas</Link></li>}
                            {retractMenu &&<li><Link to='/medidas'><FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px' }} /></Link></li>}

                            {!retractMenu && <li><Link to='/admin'><FontAwesomeIcon icon={faCog} style={{ marginRight: '10px' }} /> Administrador</Link></li>}
                            {retractMenu &&<li><Link to='/admin'><FontAwesomeIcon icon={faCog} style={{ marginRight: '10px' }} /></Link></li>}
                            
                            {!retractMenu && <li>
                                <Link to='/notificacao'>
                                    <FontAwesomeIcon icon={faBell} style={{ marginRight: '10px' }} /> 
                                    Notificação {dispositivosComProblemas && <BolinhaNotificacao style={{ marginTop: '4px' }}/>}
                                </Link>
                            </li>}
                            {retractMenu && <li>
                                <Link to='/notificacao'>
                                    <FontAwesomeIcon icon={faBell} style={{ marginRight: '5px' }} />
                                    {dispositivosComProblemas && <BolinhaNotificacao style={{ marginTop: '-10px', marginLeft: '-13px'}}/>}
                                </Link>
                            </li>}

                            <li style={{ display: 'flex', alignItems: 'center' }}>
                            {!retractMenu && <Link to='/logout'><LogoutButton style={{ padding: '0px', margin: '0px', width: '80px' }} /></Link>}
                            </li>
                        </>
                    )}
                </ul>
        </StyledMenu>
    );
};

export default Menu;
