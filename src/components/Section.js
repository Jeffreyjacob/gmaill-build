import React from 'react';
import './section.css'

function Section({Icon,title,selcted,color}) {
  return (
    <div className={`section ${selcted && "section--selected"}`} style={{
        borderBottom:`3px solid ${color}`,color:`${selcted && color}`
    }}>
      <Icon/>
      <h4>{title}</h4>
    </div>
  )
}

export default Section;