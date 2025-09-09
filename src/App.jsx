const Header = (props) => {
  console.log(props);
  return (
    <>
      <h2>komponentti Header</h2>
      <p>- {props.course.name}</p>
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
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return (
    <>
      <h2>Komponentti total</h2>
      <p>- Total: {total} exercises</p>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <h2>komponentti Content</h2>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      { name: "Fundamentals of React", exercises: 10, id: 1 },
      { name: "Using props to pass data", exercises: 7, id: 2 },
      { name: "State of a component", exercises: 14, id: 3 },
    ],
  };
  return (
    <>
      <h1>1. Sovellus yhdessä komponentissa</h1>
      <h2>{course.name}</h2>
      <p>{course.parts[0].name}</p>
      <p>{course.parts[1].name}</p>
      <p>{course.parts[2].name}</p>
      <p>
        Number of exercises{" "}
        {course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises}
      </p>

      <hr />
      <h1>2. Sovellus purettuna komponentteihin Heading, Content ja Total</h1>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <h1>3. Step 6</h1>
      <Course course={course} />
    </>
  );
};

export default App;
