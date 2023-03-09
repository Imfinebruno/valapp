import React from 'react';
import '../App.css';
import bgInicio from '../img/bg-skills.jpg';
import iconGithub from '../img/github.png';
import iconLinkedin from '../img/linkedin.png';
import iconSite from '../img/website.png';
import { Skills } from './components/Skills';
import { Menu } from './components/Menu';

export const Habilidades = () => {

    return (
    <>
    <div className='container'>
        <div className='background' style={{backgroundImage: `url(${bgInicio})`, backgroundSize:'cover'}}></div>

        <Menu />
        
        <div className='info-historia'>
            <Skills />
        </div>
    </div>
    <footer>
        <div style={{marginTop:'10px'}}>
            <p style={{fontSize:'1.2em'}}>Bruno Menezes</p>
            <p style={{fontSize:'0.8em'}}>All rights reserved</p>

            <a href="https://github.com/Imfinebruno" target="_blank"><img src={iconGithub} alt="" /></a>
            <a href="https://www.linkedin.com/in/bruno-menezes-289867197/" target="_blank"><img src={iconLinkedin} alt="" /></a>
            <a href=""><img src={iconSite} alt="" /></a>
        </div>
    </footer>
    </>
    )
}
