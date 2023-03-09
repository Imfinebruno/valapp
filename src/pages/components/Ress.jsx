import React from 'react'
import skillBarrier from './skillsImg/barreira.png'
import skillSlow from './skillsImg/slow.png';
import skillCura from './skillsImg/cura.png';
import skillRess from './skillsImg/verde/ress.png';

import skillBarrierBlack from './skillsImg/preto/barreira.png';
import skillSlowBlack from './skillsImg/preto/slow.png';
import skillCuraBlack from './skillsImg/preto/cura.png';

export const Ress = ({ currentSkill }) => {
  return (
    <div className='skills'>
        <ul className='skills-key'>
            <li onClick={() => currentSkill('Barreira')}>C</li>
            <li onClick={() => currentSkill('Slow')}>Q</li>
            <li onClick={() => currentSkill('Cura')}>E</li>
            <li>X</li>
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
            <img src={skillCuraBlack} alt="" />
            <img src={skillRess} alt="" />
        </div>
        <div className='skills-info fade-in'>
          <h1>RESSUREIÇÃO</h1>
          <p style={{marginTop:'10px',marginBottom:'10px', fontSize:'1.3em', maxWidth:'300px'}}>
            EQUIPE uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo.
            Depois de uma breve canalização, o aliado voltará com a Vida completa.
          </p>
        </div>
    </div>
  )
}
