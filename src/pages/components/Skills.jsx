import React, { useState } from 'react'
import { Barreira } from './Barreira';
import { Cura } from './Cura';
import { Ress } from './Ress';
import { Slow } from './Slow';


export const Skills = () => {
  const [current, setCurrent] = useState('Barreira');

  const handleCurrentSkill = (skill) => {
    setCurrent(skill);
    setTimeout(() => {
      document.querySelector('.skills-info').classList.add('active');
    }, 50);
  }

  return (
    <div>
      {current === 'Barreira' && <Barreira currentSkill={handleCurrentSkill}/>}
      {current === 'Slow' && <Slow currentSkill={handleCurrentSkill}/>}
      {current === 'Cura' && <Cura currentSkill={handleCurrentSkill}/>}
      {current === 'Ress' && <Ress currentSkill={handleCurrentSkill}/>}
    </div>
  )
}
