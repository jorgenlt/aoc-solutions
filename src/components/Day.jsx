import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Day = (props) => {
  const isPartOneCompleted = props.codePart1
    ? props.codePart1[0] !== " "
    : false;
  const isPartTwoCompleted = props.codePart2
    ? props.codePart2[0] !== " "
    : false;

  return (
    <details className="puzzle">
      <summary className="puzzle-summary">
        <h2>--- Day {props.day} ---</h2>
      </summary>
      <div>
        {!isPartOneCompleted && !isPartTwoCompleted ? (
          <p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Puzzle
            </a>{" "}
            not yet completed
          </p>
        ) : (
          <p>
            See{" "}
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              puzzle
            </a>
          </p>
        )}

        {isPartOneCompleted && (
          <>
            <h4>--- Part 1 ---</h4>
            <SyntaxHighlighter
              language="javascript"
              style={tomorrowNightBright}
            >
              {props.codePart1}
            </SyntaxHighlighter>
          </>
        )}

        {isPartTwoCompleted && (
          <>
            <br />
            <h4>--- Part 2 ---</h4>
            <SyntaxHighlighter
              language="javascript"
              style={tomorrowNightBright}
            >
              {props.codePart2}
            </SyntaxHighlighter>
          </>
        )}
      </div>
    </details>
  );
};

export default Day;
