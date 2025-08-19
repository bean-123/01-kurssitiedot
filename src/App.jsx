const Header = (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.course}</h2>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <h1>Sovellus yhdessä komponentissa</h1>
      <h2>{course}</h2>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      <hr />
      <h1>Sovellus purettuna komonentteihin Heading, Content ja Total</h1>
      <Header course={course} />
    </>
  );
};

export default App;
