import React from 'react';

const Accordion = ({ item, index }) => {
  const [toggle, setToggle] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  return (
    <>
      <h1
        onClick={() => {
          setToggle(!toggle);
          setSelected(index);
        }}
        style={{ backgroundColor: selected === index ? 'red' : 'blue' }}
      >
        {item.title}
      </h1>
      <p>{item.content}</p>
    </>
  );
};

export default Accordion;
