import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "🍌 banana", color: "yellow", id: 24 },
    { name: "🍎 apple", color: "red", id: 25 },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}

// function Drink({ name, key }) {
//   console.log(key); // → undefined
//   return <li>{name}</li>;
// }

// function Drinks() {
//   const drinks = [
//     { id: 0, name: "water" },
//     { id: 1, name: "lemonade" },
//     { id: 2, name: "coffee" },
//     { id: 3, name: "tea" },
//   ];

//   return (
//     <ul>
//       {drinks.map(({ id, name }) => (
//         <Drink key={id} name={name} />
//       ))}
//     </ul>
//   );
// }
