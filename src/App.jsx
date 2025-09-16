const Header = ({ course }) => {
  console.log(course);
  return (
    <>
      <h2>komponentti Header</h2>
      <p>- {course.name}</p>
    </>
  );
};

const Part = ({ part }) => {
  console.log(part);
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      <h2>komponentti Content</h2>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  console.log(parts);
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <h2>Komponentti total</h2>
      <p>- Total of {total} exercises</p>
    </>
  );
};

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        { name: "Fundamentals of React", exercises: 10, id: 1 },
        { name: "Using props to pass data", exercises: 7, id: 2 },
        { name: "State of a component", exercises: 14, id: 3 },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        { name: "Routing", exercises: 3, id: 1 },
        { name: "Middlewares", exercises: 7, id: 2 },
      ],
    },
  ];

  return (
    <>
      <h1>1. Sovellus yhdessä komponentissa</h1>
      <h2>{courses[0].name}</h2>
      <p>{courses[0].parts[0].name}</p>
      <p>{courses[0].parts[1].name}</p>
      <p>{courses[0].parts[2].name}</p>
      <p>
        Number of exercises{" "}
        {courses[0].parts[0].exercises +
          courses[0].parts[1].exercises +
          courses[0].parts[2].exercises}
      </p>

      <hr />
      <h1>2. Sovellus purettuna komponentteihin Heading, Content ja Total</h1>
      <Header course={courses[0]} />
      <Content parts={courses[0].parts} />
      <Total parts={courses[0].parts} />

      <h1> Step 2.5 </h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
