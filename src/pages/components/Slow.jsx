import React from 'react'
import skillBarrier from './skillsImg/barreira.png'
import skillSlow from './skillsImg/verde/slow.png';
import skillCura from './skillsImg/cura.png';
import skillRess from './skillsImg/ress.png';

import skillBarrierBlack from './skillsImg/preto/barreira.png';
import skillRessBlack from './skillsImg/preto/ress.png';
import skillCuraBlack from './skillsImg/preto/cura.png';

export const Slow = ({ currentSkill }) => {
  return (
    <div className='skills'>
        <ul className='skills-key'>
            <li onClick={() => currentSkill('Barreira')}>C</li>
            <li>Q</li>
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
            <img src={skillBarrierBlack} alt="" />
            <img src={skillSlow} alt="" />
            <img src={skillCuraBlack} alt="" />
            <img src={skillRessBlack} alt="" />
        </div>
        <div className='skills-info fade-in'>
          <h1>ORBE DE LENTIDÃO</h1>
          <p style={{marginTop:'10px',marginBottom:'10px', fontSize:'1.3em', maxWidth:'300px'}}>
            EQUIPE um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar,
            criando um campo duradouro que desacelera os jogadores dentro dele.
          </p>
        </div>
    </div>
  )
}
