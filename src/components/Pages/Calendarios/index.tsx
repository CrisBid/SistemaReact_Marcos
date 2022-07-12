import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Header } from '../../../styles/components/Calendario';


export default function Calendario() {
  const [value, onChange] = useState(new Date());

  return (
    <Header>
      <Calendar onChange={onChange} value={value}/>
    </Header>
  );
}