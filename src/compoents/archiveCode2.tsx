// import React from 'react';
// import { cloneDeep } from 'lodash';
// import Accordion from './compoents/accordian';
// import './style.css';
// import { useState } from 'react';

// const accData = [
//   {
//     id: 0,
//     title: 'First Accordion',
//     content: 'First Accordion content',
//     isOpen: false,
//   },
//   {
//     id: 1,
//     title: 'Second Accordion',
//     content: 'Second Accordion content',
//     isOpen: false,
//   },
//   {
//     id: 2,
//     title: 'Third Accordion',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     isOpen: false,
//   },
// ];

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
