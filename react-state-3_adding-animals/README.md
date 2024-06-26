# React State 3: Adding Animals

In the `./src/App.js` file, there is an `animals` state used to render a list of `initialAnimals`. There is also a [`Form`](./src/components/Form/index.js) component which already handles the submit event and the data.

Currently, the only thing not working is the state update.

## Task

### Updating State

1. At first, make sure you understand the data flow; then
2. write the state update to add a new animal on submitting the form.

You can use the following hints as guideline:

- Look at `./src/components/Form/index.js`; what kind of data is lifted up to the `App`?
- In the `./src/App.js` file, there is a `handleAddAnimal` function which only calls a `console.log`.
- Replace the `console.log` with the state setter function; pass it a copy of the previous state and add the submitted animal at the end of this new state.

Congratulations, you can now add a new animal to the state and it is rendered!

### Adding a unique identifier

There is, however, a warning regarding the `key` prop in list items. This happens becaus newly added items currently don't have an `id` to be used by the `./src/components/List/index.js` component. There is a package called `uid` already installed to fix this.

- In your `App`, import `uid` via `import { uid } from "uid";`.
- A new animal is added inside of the `handleAddAnimal` function, which is where you need to add the id.
- When `setAnimals` is called, replace the `newAnimal` part with a new object.
- Spread `newAnimal` into this object and add the id key with `id: uid()`. It might look similar to this:
  - `setXzys([...xyzs, {id: uid(), ...newXyz}]);`

## Notes

- You only have to touch the `./src/App.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open the displayed URL in a browser.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

> The `npm run start` script runs automatically.

### Scripts

You can use the following commands:

- `npm run start` to start a development server



import { uid } from "uid";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  function handleAddMovie(newMovie){
    setMovies([...movies, { id: uid(), ...newMovie}]);
  }

  function handleDeleteMovie(id){
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function handleToggleLike(id){
    console.log("toggle like", id);
    setMovies(
      movies.map((movie) => {
        if(movie.id === id){
          return {...movie, isLiked: !movie.isLiked};
        } else {
          return movie;
        }
      })
    );
  }

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie 
              name={movie.name} 
              isLiked={movie.isLiked} 
              id={movie.id} 
              onDeleteMovie={handleDeleteMovie} 
              onToggleLike={handleToggleLike}
              />
          </li>
        ))}
      </ul>
      <Form onAddMovie={handleAddMovie} />
    </div>
  );
}