import Year from "./Year";
import Loading from "./Loading";

const Main = (props) => {
  return (
    <main>
      <div>
        <h4>
          My solutions for{" "}
          <a href="https://adventofcode.com/" target="_blank" rel="noreferrer">
            Advent of Code
          </a>{" "}
          puzzles. Fetches code snippets from my{" "}
          <a
            href="https://github.com/jorgenlt/advent-of-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repo
          </a>
          .
        </h4>
      </div>

      {props.status === "loading" && <Loading />}

      {props.status === "failed" && <p>{props.error}</p>}

      <Year isVisible={props.isYearVisible} />
    </main>
  );
};

export default Main;
