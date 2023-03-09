import React from 'react'
import skillBarrier from './skillsImg/barreira.png'
import skillSlow from './skillsImg/slow.png';
import skillCura from './skillsImg/verde/cura.png';
import skillRess from './skillsImg/ress.png';

import skillBarrierBlack from './skillsImg/preto/barreira.png';
import skillSlowBlack from './skillsImg/preto/slow.png';
import skillRessBlack from './skillsImg/preto/ress.png';

export const Cura = ({ currentSkill }) => {
  return (
    <div className='skills'>
        <ul className='skills-key'>
            <li onClick={() => currentSkill('Barreira')}>C</li>
            <li onClick={() => currentSkill('Slow')}>Q</li>
            <li>E</li>
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
            <img src={skillSlowBlack} alt="" />
            <img src={skillCura} alt="" />
            <img src={skillRessBlack} alt="" />
        </div>
        <div className='skills-info fade-in'>
          <h1>ORBE CURATIVO</h1>
          <p style={{marginTop:'10px',marginBottom:'10px', fontSize:'1.3em', maxWidth:'300px'}}>
            EQUIPE um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo.
            Use o DISPARO ALTERNATIVO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo.
          </p>
        </div>
    </div>
  )
}
