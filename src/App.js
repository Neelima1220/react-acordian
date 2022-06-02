import React from 'react';
import Accordion from './compoents/accordian';
import './style.css';

const accData = [
  { title: 'First Accordion', content: 'First Accordion content' },
  { title: 'Second Accordion', content: 'Second Accordion content' },
  {
    title: 'Third Accordion',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function App() {
  const [data, setData] = React.useState(accData);
  return data.map((item, index) => {
    return <Accordion item={item} index={index} />;
  });
}
