import React, { useState } from 'react';
import '../App.css';
import bgInicio from '../img/bg-inicio1.jpg';
import iconSent from '../img/icon-sentinela.png';
import iconSentBlack from '../img/icon-sentinela-preto.png';
import iconSkills from '../img/skills.png';
import iconGithub from '../img/github.png';
import iconLinkedin from '../img/linkedin.png';
import iconSite from '../img/website.png';
import { Menu } from './components/Menu';

export const Inicio = () => {

    return (
    <>
    <div className='container'>
        <div className='background' style={{backgroundImage: `url(${bgInicio})`, backgroundSize:'cover'}}></div>

        <Menu />

        <div className='info-inicio'>
            <img className='iconSent' src={iconSent} alt="" style={{width:'50px', height:'50px'}}/>
            <img className='iconSentBlack' src={iconSentBlack} alt="" style={{width:'50px', height:'50px'}}/>

            <h1 style={{fontSize:'5em',color:'#3CDFC2'}}>SAGE</h1>
            <p style={{marginBottom:'10px', fontSize:'1.3em'}}>
                Diretamente da China, Sage foi a sétima agente a entrar em Valorant.
                De acordo com suas falas, ela é o braço direito do agente Brimstone
                e assumirá a liderança do Protocolo caso aconteça algo com o mesmo.
            </p>
            <img src={iconSkills}alt="" />
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
