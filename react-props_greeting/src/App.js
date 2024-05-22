import "./styles.css";

export default function App() {
  return <Greeting name="Lautaro" />;
}

function Greeting({ name }) {
  return (
    <div>
      Hello, {name}
      {/* { ? <span>Hello Coach : false</span>} */}
    </div>
  );
}

// function UserCard({ name }) {
//   return <div>{name}</div>;
// }
