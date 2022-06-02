import React from 'react';

const Accordion = ({ item, index }) => {
  const [selected, setSelected] = React.useState(null);
  const [ind, setInd] = React.useState(null);

  const handleAcc = (i) => {
    if (selected === i) {
      setSelected(null);
      setInd(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <>
      <h1
        onClick={() => handleAcc(index)}
        // style={{ backgroundColor: selected === index ? 'red' : 'blue' }}
      >
        {item.title}
      </h1>
      <p style={{ display: selected === ind ? 'block' : 'none' }}>
        {item.content}
      </p>
    </>
  );
};

export default Accordion;
