import React from 'react';
import '../App.css';
import bgInicio from '../img/bg-historia.png';
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
            <span>//FUNÇÃO</span>
            <div className='sentinela'>
                <h1 style={{fontSize:'2.5em',color:'#3CDFC2'}}>SENTINELA</h1>
                <img className='iconSentBlack' src={iconSentBlack} alt="" style={{width:'35px', height:'35px', marginLeft:'5px'}}/>
                <img className='iconSent' src={iconSent}alt="" style={{width:'35px', height:'35px', marginLeft:'5px'}}/>
            </div>
            <div className='local'>
                <img className='iconPin' src={iconPin}alt="" style={{height:'20px', marginRight:'5px'}}/>
                <img className='iconPinBlack' src={iconPinBlack}alt="" style={{height:'20px', marginRight:'5px'}}/>
                <p>CHINA</p>
            </div>
            <span>//BIOGRAFIA</span>
            <p style={{marginTop:'10px',marginBottom:'10px', fontSize:'1.3em', maxWidth:'300px'}}>
                Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá.
                Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.
            </p>
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
