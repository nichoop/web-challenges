import React from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  return <Counter />;
}

// import React, { useState } from "react";
// import ColoredNumber from "./ColoredNumber";

// export default function Counter() {
//   // Step 1: Initialize state for count
//   const [count, setCount] = useState(0); // Initial value of count is 0

//   // Step 2: Define increment and decrement functions
//   function handleIncrement() {
//     setCount(count + 1); // Increment count by 1
//   }

//   function handleDecrement() {
//     setCount(count - 1); // Decrement count by 1
//   }

//   return (
//     <div className="counter">
//       <h1>Colored Number</h1>
//       {/* Step 3: Pass count as value prop to ColoredNumber */}
//       <ColoredNumber
//         count={count}
//         value={0} // Assuming this is a default value, not used here
//         onIncrement={handleIncrement}
//         onDecrement={handleDecrement}
//       />
//       <div className="counter__buttons-container">
//         {/* Step 4: Attach onClick handlers to buttons */}
//         <button
//           type="button"
//           className="counter__button"
//           aria-label="increment count"
//           onClick={handleIncrement}
//         >
//           +
//         </button>
//         <button
//           type="button"
//           className="counter__button"
//           aria-label="decrement count"
//           onClick={handleDecrement}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// }
