import React from 'react';
import '../App.css';
import { Fade } from "react-awesome-reveal";
import bgInicio from '../img/bg-historia-min.jpg';
import iconSent from '../img/icon-sentinela.png';
import iconSentBlack from '../img/icon-sentinela-preto.png';
import iconGithub from '../img/github.png';
import iconLinkedin from '../img/linkedin.png';
import iconSite from '../img/website.png';
import iconPin from '../img/pin.png';
import iconPinBlack from '../img/pin-preto.png';
import sage from '../img/sage.png';
import { Menu } from './components/Menu';


export const Historia = () => {
    const active = '#3CDFC2';

    const handlePng = ()=>{
        setTimeout(() => {
            document.querySelector('.sage').classList.add('active');
        });
    }

    handlePng();
    
    return (
    <>
    <div className='container'>
        <div className='background' style={{backgroundImage: `url(${bgInicio})`, backgroundSize:'cover'}}></div>
        <Menu />

        <img className='sage' src={sage}/>

        <div className='info-historia'>
            <Fade cascade direction='up'>
                <span>//FUNÇÃO</span>
                <div className='sentinela'>
                    <h1 style={{fontSize:'2.5em',color:'#3CDFC2'}}>SENTINELA</h1>
                    <img className='iconSentBlack' src={iconSentBlack} alt=""/>
                    <img className='iconSent' src={iconSent}alt=""/>
                </div>
                <div className='local'>
                    <img className='iconPin' src={iconPin}alt=""/>
                    <img className='iconPinBlack' src={iconPinBlack}alt=""/>
                    <p>CHINA</p>
                </div>
                <span>//BIOGRAFIA</span>
                <p>
                    Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá.
                    Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.
                </p>
            </Fade>
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
