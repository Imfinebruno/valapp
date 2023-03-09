import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
    const activeColor = '#3CDFC2';
    const inactiveColor = '#ffffff';
  
    const [mode, setMode] = useState(false);
  
    const handleMenu = () => {
      setMode(!mode);
    };
  
    // Obter o objeto location do React Router
    const location = useLocation();
  
    return (
      <>
        <div id='menu' className={mode ? 'menu active' : 'menu'}>
          <ul>
            <li>
              <Link to='/' style={{ color: location.pathname === '/' ? activeColor : inactiveColor }}>Início</Link>
            </li>
            <li>
              <Link to='/historia' style={{ color: location.pathname === '/historia' ? activeColor : inactiveColor }}>História</Link>
            </li>
            <li>
              <Link to='/habilidades' style={{ color: location.pathname === '/habilidades' ? activeColor : inactiveColor }}>Habilidades</Link>
            </li>
          </ul>
        </div>
        <div id='btnMenu' className='btn-menu' onClick={handleMenu}>
          <div id='btn-menu'></div>
          <div id='btn-menu'></div>
          <div id='btn-menu'></div>
        </div>
      </>
    )
}
