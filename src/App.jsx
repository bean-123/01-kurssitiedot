const App = () => {
  const course = "Half Stack application development";
  const Header = ({course}) => {
    return <h1>{course}</h1>
  }

  const Content = ({ }) =>

  const Total = ({ }) =>

  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content content={} />
      <Total total={} />
    </>
  )
};

export default App;
