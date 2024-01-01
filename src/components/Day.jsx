import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Day = (props) => {
  return (
    <details className="puzzle">
      <summary className="puzzle-summary">
        <h2>
          --- Day {props.day}: {props.title} ---
        </h2>
      </summary>
      <div>
        <span>
          <a href="#" target="_blank">
            Go to page
          </a>
        </span>
        <h3>Part 1</h3>
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright} >
          {props.codePart1}
        </SyntaxHighlighter>
        <h3>Part 2</h3>
        <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
          {props.codePart2}
        </SyntaxHighlighter>
      </div>
    </details>
  );
};

export default Day;
