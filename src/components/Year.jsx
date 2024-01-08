import Day from "./Day";
import { useSelector } from "react-redux";

const Year = (props) => {
  const { currentYear, codeSnippets } = useSelector((state) => state.aoc);

  let currentSnippets;
  let dayElements;

  if (codeSnippets && currentYear) {
    currentSnippets = codeSnippets[currentYear];
    dayElements = Object.keys(currentSnippets).map((key) => {
      return (
        <Day 
          key={key}
          day={key}
          link={`https://adventofcode.com/${currentYear}/day/${key}`}
          codePart1={currentSnippets[key]["partOne.js"]}
          codePart2={currentSnippets[key]["partTwo.js"]}
        />
      )
    });
  }

  return (
    <article className={`year ${props.isVisible ? "" : "fade-out"}`} >
      {dayElements && dayElements}
    </article>
  );
};

export default Year;
