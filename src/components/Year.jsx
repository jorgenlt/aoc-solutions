
import Day from "./Day";

const Year = (props) => {
  return (
    <article>
      <h2>{props.year}</h2>
      <Day
        day={"1"}
        title={"get title from site"}
        codePart1={"code part 1 block here"}
        codePart2={"code part 2 here"}
      />
    </article>
  );
};

export default Year;
