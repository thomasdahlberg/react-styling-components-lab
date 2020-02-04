import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';

const GuessPegs = (props) => (
  <div className='GuessPegs'>
    {console.log(props.guess)}
    <GuessPeg 
      color={props.colors[props.guess.code[0]]}
      key={props.guess.code[0]}
    />
    <GuessPeg 
      color={props.colors[props.guess.code[1]]}
      key={props.guess.code[1]}
    />
    <GuessPeg 
      color={props.colors[props.guess.code[2]]}
      key={props.guess.code[2]}
    />
    <GuessPeg 
      color={props.colors[props.guess.code[3]]}
      key={props.guess.code[3]}
    />
  </div>
);

export default GuessPegs;
