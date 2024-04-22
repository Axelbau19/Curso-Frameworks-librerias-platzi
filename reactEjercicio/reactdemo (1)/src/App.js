import React from "react";
import { Theme } from "./Theme";
import { Title } from "./Title";
import Form from "./Form";
const movies = [
  {
    name: "avengers",
    availableTicke: 5,
  },
  {
    name: "terminator",
    availableTicke: 12,
  },
];
export default function App() {
  const [theme, setTheme] = React.useState("Avengers");
  return (
    <Theme theme={theme}>
      <Title>peliculas </Title>
      {movies.map((movie) => (
        <Form movie={movie} updateTheme={() => setTheme(movie.name)} />
      ))}
    </Theme>
  );
}
