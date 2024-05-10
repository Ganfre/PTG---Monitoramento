// ToggleMenu.jsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerIcon = styled.div`
    cursor: pointer;
`;

const ToggleMenu = ({ onToggle }) => {
    return (
        <HamburgerIcon onClick={onToggle}>
            <FontAwesomeIcon icon={faBars} />
        </HamburgerIcon>
    );
};

export default ToggleMenu;
