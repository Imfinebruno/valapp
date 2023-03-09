import React from 'react'
import skillBarrier from './skillsImg/verde/barreira.png'
import skillSlow from './skillsImg/slow.png';
import skillCura from './skillsImg/cura.png';
import skillRess from './skillsImg/ress.png';

import skillSlowBlack from './skillsImg/preto/slow.png';
import skillCuraBlack from './skillsImg/preto/cura.png';
import skillRessBlack from './skillsImg/preto/ress.png';

export const Barreira = ({ currentSkill }) => {

  currentSkill('Barreira');
  return (
    <div className='skills'>
        <ul className='skills-key' id="idSkill">
          <li>C</li>
          <li onClick={() => currentSkill('Slow')}>Q</li>
          <li onClick={() => currentSkill('Cura')}>E</li>
          <li onClick={() => currentSkill('Ress')}>X</li>
        </ul>
        <div className='skills-icon'>
            <img src={skillBarrier} alt="" />
            <img src={skillSlow} alt="" />
            <img src={skillCura} alt="" />
            <img src={skillRess} alt="" />
        </div>
        <div className='skills-icon-preto'>
            <img src={skillBarrier} alt="" />
            <img src={skillSlowBlack} alt="" />
            <img src={skillCuraBlack} alt="" />
            <img src={skillRessBlack} alt="" />
        </div>
        <div className='skills-info fade-in'>
          <h1>ORBE DE BARREIRA</h1>
          <p style={{marginTop:'10px',marginBottom:'10px', fontSize:'1.3em', maxWidth:'300px'}}>
              EQUIPE um orbe de barreira. DISPARE para posicionar uma parede sólida.
              DISPARO ALTERNATIVO gira o marcador de alvo.
          </p>
        </div>
    </div>
  )
}
