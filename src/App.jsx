const Header = (props) => {
  console.log(props);
  return (
    <>
      <h2>komponentti Header</h2>
      <p>- {props.course}</p>
    </>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <>
      <h2>Komponentti total</h2>
      <p>- Total: {props.total} exercises</p>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <h2>komponentti Content</h2>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
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
      <h1>1. Sovellus yhdessä komponentissa</h1>
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
      <h1>2. Sovellus purettuna komonentteihin Heading, Content ja Total</h1>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
