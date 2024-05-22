import styled from "styled-components";

// export default function BoxWithStyledComponents({ $isBlack }) {
//   return <StyledBox $isBlack={$isBlack}></StyledBox>;
// }

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "red")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;





// import { useState } from 'react';
// import { nanoid } from 'nanoid';

// const initialItems = [
//   { id: 'a', name: 'Brokkoli' },
//   { id: 'b', name: 'Zuchini' },
//   { id: 'c', name: 'Avocado' },
//   { id: 'd', name: 'Tzaziki' },
// ];

// function Item({ item, onEdit }) {
//   const [editMode, setEditMode] = useState(false);

//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);

//     //Was muss ich hier machen?
//     onEdit(item.id, data.input1);
//     setEditMode(false);
//   }

//   return (
//     <li key={item.id}>
//       {editMode ? (
//         <form onSubmit={handleSubmit}>
//           <input defaultValue={item.name} name="input1" />
//           <button type="submit">Update</button>
//           <button
//             type="button"
//             onClick={() => {
//               setEditMode(false);
//             }}
//           >
//             cancel
//           </button>
//         </form>
//       ) : (
//         <>
//           {item.name}
//           <button
//             onClick={() => {
//               setEditMode(true);
//             }}
//           >
//             edit
//           </button>
//         </>
//       )}
//     </li>
//   );
// }

// function App() {
//   const [list, setList] = useState(initialItems);

//   function handleEdit(id, name) {
//     setList(
//       list.map((item) => (item.id === id ? { ...item, name: name } : item))
//     );
//   }

//   return (
//     <>
//       <ul>
//         {list.map((item) => {
//           return <Item item={item} onEdit={handleEdit} />;
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;
