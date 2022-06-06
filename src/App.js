import React from 'react';
import { cloneDeep } from 'lodash';
import Accordion from './compoents/accordian';
import './style.css';

const accData = [
  {
    id: 0,
    title: 'First Accordion',
    content: 'First Accordion content',
    isOpen: false,
  },
  {
    id: 1,
    title: 'Second Accordion',
    content: 'Second Accordion content',
    isOpen: false,
  },
  {
    id: 2,
    title: 'Third Accordion',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isOpen: false,
  },
];

export default function App() {
  const [data, setData] = React.useState(accData);
  const [selected, setSelected] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const handleAcc = (item, i) => {
    let tempAcc = cloneDeep(accData);
    if (item.id === selected) {
      tempAcc[item.id].isOpen = !show;
      setSelected(i);
      setShow(tempAcc[item.id].isOpen);
    } else {
      tempAcc[i].isOpen = true;
      setSelected(i);
      setShow(tempAcc[item.id].isOpen);
    }
    setData(tempAcc);
  };
  return data.map((item, index) => {
    return (
      <Accordion
        item={item}
        key={index}
        onClick={() => handleAcc(item, index)}
        isOpen={item.isOpen}
      />
    );
  });
}
