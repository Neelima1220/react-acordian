import React from 'react';

const Accordion = ({ item, isOpen, onClick }) => {
  return (
    <>
      <h1 onClick={onClick}>{item.title}</h1>
      <p style={{ display: isOpen ? 'block' : 'none' }}>{item.content}</p>
    </>
  );
};

export default Accordion;
