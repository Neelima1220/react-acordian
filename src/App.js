import React from 'react';
import { cloneDeep } from 'lodash';
import Accordion from './compoents/accordian';
import './style.css';
import { useState } from 'react';

const accData = [
  {
    id: 0,
    title: 'First Accordion',
    content: 'First Accordion content',
  },
  {
    id: 1,
    title: 'Second Accordion',
    content: 'Second Accordion content',
  },
  {
    id: 2,
    title: 'Third Accordion',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

// 1st way

export default function App() {
  const [data, setData] = useState(accData);

  return (
    data.length > 0 &&
    data.map((item, index) => {
      return <Accordian title={item.title} content={item.content} />;
    })
  );
}

const Accordian = ({ title, content }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div>
      <h1 onClick={handleClick}>{title} </h1>
      <p style={{ display: show ? 'block' : 'none' }}>{content} </p>
    </div>
  );
};

// 2nd way

// export default function App() {
//   const [data, setData] = useState(accData);
//   return (
//     data.length > 0 &&
//     data.map((item, index) => {
//       return (
//         <Accordian
//           title={item.title}
//           content={item.content}
//           data={data}
//           index={index}
//           isOpen={item.isOpen}
//           setData={setData}
//         />
//       );
//     })
//   );
// }

// const Accordian = ({ title, content, data, index, setData, isOpen }) => {
//   const handleClick = (i) => {
//     const tempData = [...data];
//     if (tempData[i].isOpen === true) {
//       tempData[i].isOpen = false;
//       setData(tempData);
//     } else {
//       tempData[i].isOpen = true;
//       setData(tempData);
//     }
//   };
//   return (
//     <div>
//       <h1 onClick={() => handleClick(index)}>{title} </h1>
//       <p style={{ display: isOpen ? 'block' : 'none' }}>{content} </p>
//     </div>
//   );
// };

// 3rd way

// export default function App() {
//   const [data, setData] = React.useState(accData);
//   const [selected, setSelected] = React.useState(null);
//   const [show, setShow] = React.useState(false);

//   // const handleAcc = (item, i) => {
//   //   let tempAcc = cloneDeep(accData);
//   //   if (item.id === selected) {
//   //     tempAcc[item.id].isOpen = !show;
//   //     setSelected(i);
//   //     setShow(tempAcc[item.id].isOpen);
//   //   } else {
//   //     tempAcc[i].isOpen = true;
//   //     setSelected(i);
//   //     setShow(tempAcc[item.id].isOpen);
//   //   }
//   //   setData(tempAcc);
//   // };
//   const handleAcc = (item, i) => {
//     console.log(item, i);
//   };
//   return data.map((item, index) => {
//     return (
//       <Accordion
//         item={item}
//         key={index}
//         onClick={() => handleAcc(item, index)}
//         isOpen={item.isOpen}
//       />
//     );
//   });
// }
