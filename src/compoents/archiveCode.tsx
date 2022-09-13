// import React from 'react';
// import { cloneDeep } from 'lodash';
// import Accordion from './compoents/accordian';
// import './style.css';

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

// import React from 'react';

// const Accordion = ({ item, isOpen, onClick }) => {
//   return (
//     <>
//       <h1 onClick={onClick}>{item.title}</h1>
//       <p style={{ display: isOpen ? 'block' : 'none' }}>{item.content}</p>
//     </>
//   );
// };

// export default Accordion;
